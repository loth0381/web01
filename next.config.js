/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otras configuraciones

  webpack(config) {
    config.resolve.alias['@'] = __dirname;
    return config;
  },
};

module.exports = nextConfig;
