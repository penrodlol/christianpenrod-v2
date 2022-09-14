const { withContentlayer } = require('next-contentlayer');
const dayjs = require('dayjs');

dayjs.extend(require('dayjs/plugin/advancedFormat'));
dayjs.extend(require('dayjs/plugin/utc'));

/** @type {import('next').NextConfig} */
module.exports = withContentlayer({
  reactStrictMode: true,
  swcMinify: true,
  env: {
    URL: process.env.URL,
    TWITTER: process.env.NEXT_PUBLIC_TWITTER,
    GITHUB: process.env.NEXT_PUBLIC_GITHUB,
    LINKEDIN: process.env.NEXT_PUBLIC_LINKEDIN,
    COPYRIGHT_YEAR: String(dayjs().year()),
    LAST_UPDATE: String(dayjs().format('MMM Do, YYYY h:mm A')),
  },
  i18n: { locales: ['en'], defaultLocale: 'en' },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
