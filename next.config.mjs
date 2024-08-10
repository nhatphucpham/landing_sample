import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { dev, isServer }) {
    if (dev) {
      config.devtool = 'source-map';
    } else {
      config.devtool = false; // Disable source maps in production
    }
    return config;
  },
  productionBrowserSourceMaps: false,
};

// next.config.js
export default withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true',})(nextConfig);;
