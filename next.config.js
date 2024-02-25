/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  ...nextConfig,
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};
