/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.DOMAIN,
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', disallow: ['/api', '/404'] }],
  },
};

module.exports = config;
