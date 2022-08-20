const { withContentlayer } = require('next-contentlayer');
const dayjs = require('dayjs');

dayjs.extend(require('dayjs/plugin/advancedFormat'));
dayjs.extend(require('dayjs/plugin/utc'));

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer({
  reactStrictMode: true,
  swcMinify: true,
  env: {
    DOMAIN: 'https://christianpenrod.com',
    TWITTER: 'https://twitter.com/penrodlol',
    GITHUB: 'https://github.com/penrodlol',
    LINKEDIN: 'https://linkedin.com/in/christian-penrod-07618314b/',
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

module.exports = nextConfig;
