/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.indiajobsupport.in',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/', '/_next/', '/thankyou'] },
    ],
  },
  exclude: ['/api/*', '/_next/*', '/404', '/500', '/thankyou'],
  changefreq: 'weekly',
  priority: 0.7,
};
