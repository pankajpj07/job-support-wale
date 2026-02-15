import type { NextApiRequest, NextApiResponse } from 'next'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = (req.body || {}) as { email?: string }
  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Please provide a valid email address.' })
  }

  const trimmed = email.trim()
  if (!EMAIL_REGEX.test(trimmed)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' })
  }

  // TODO: Integrate with Mailchimp, ConvertKit, or your email provider.
  // For now we return success so the form UX works; add persistence when ready.
  return res.status(200).json({
    ok: true,
    message: 'Thanks! Check your inbox to confirm.',
  })
}
