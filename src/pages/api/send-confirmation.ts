import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type Body = {
  to: string
  type: 'contact' | 'demo'
  name?: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).end()
  }

  const { to, type, name } = (req.body || {}) as Body
  if (!to || typeof to !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid "to" email' })
  }

  const from = process.env.EMAIL_FROM
  const host = process.env.EMAIL_SERVER_HOST
  const port = process.env.EMAIL_SERVER_PORT
  const user = process.env.EMAIL_SERVER_USER
  const pass = process.env.EMAIL_SERVER_PASSWORD

  if (!host || !user || !pass || !from) {
    // Email not configured; don't fail the request so form submission still succeeds
    return res.status(200).json({ ok: true, sent: false })
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port: port ? parseInt(port, 10) : 587,
      secure: false,
      auth: { user, pass },
    })

    const subject =
      type === 'demo'
        ? "We've received your demo request - IndiaJobSupport"
        : "We've received your message - IndiaJobSupport"

    const text =
      type === 'demo'
        ? `Hi${name ? ` ${name}` : ''},\n\nThank you for requesting a demo. We'll review your requirements and get back to you within 24 hours.\n\nBest,\nIndiaJobSupport Team`
        : `Hi${name ? ` ${name}` : ''},\n\nThank you for getting in touch. We'll review your message and contact you within 24 hours.\n\nBest,\nIndiaJobSupport Team`

    await transporter.sendMail({
      from,
      to,
      subject,
      text,
    })

    return res.status(200).json({ ok: true, sent: true })
  } catch (err) {
    console.error('Send confirmation email error:', err)
    return res.status(200).json({ ok: true, sent: false })
  }
}
