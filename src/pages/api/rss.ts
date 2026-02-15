import type { NextApiRequest, NextApiResponse } from 'next'
import { blogPosts } from '@/data/blogPosts'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.indiajobsupport.in'

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).end()
  }

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>IndiaJobSupport Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Guides, how-tos, and insights on IT job support: React, Angular, Node.js, Python, Java, and how to choose and use job support effectively.</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/api/rss" rel="self" type="application/rss+xml"/>
    ${blogPosts
      .map(
        (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <description>${escapeXml(post.excerpt)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
    </item>`
      )
      .join('')}
  </channel>
</rss>`

  res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8')
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate')
  res.status(200).send(rss)
}
