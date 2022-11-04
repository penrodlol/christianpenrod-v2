const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer({
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: { subsets: ['cyrillic'] },
      },
    ],
  },
});

module.exports = nextConfig;
