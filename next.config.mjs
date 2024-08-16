import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { dev }) {
    if (dev) {
      config.devtool = 'eval-source-map';
    } else {
      config.devtool = false; // Disable source maps in production
    }
    return config;
  },
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/uploads/**',
      },
    ],
  },
};

// next.config.js
export default withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true',})(nextConfig);;
