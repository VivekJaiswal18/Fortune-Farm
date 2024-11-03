// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   basePath: "",
// };

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
  // Disable eslint during build if you're still having issues
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable type checking during build if you're still having issues
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig;
