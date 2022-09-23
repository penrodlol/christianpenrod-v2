const { withContentlayer } = require('next-contentlayer');
const { withPlausibleProxy } = require('next-plausible');

/** @type {import('next').NextConfig} */
module.exports = withPlausibleProxy()(
  withContentlayer({
    reactStrictMode: true,
    swcMinify: true,
    i18n: { locales: ['en'], defaultLocale: 'en' },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      });

      return config;
    },
  }),
);
