/** @type {import('next').NextConfig} */

const isDevelopment = process.env.NODE_ENV !== "production";
const rewritesConfig = isDevelopment
  ? [
      {
        source: "/:path*/bnm/:path*",
        destination: `${process.env.NEXT_PUBLIC_BNM_API_HOST}/:path*`,
      },
    ]
  : [];

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/api/**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/img/**",
      },
    ],
  },
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: "canvas" }];
    return config;
  },
  rewrites: async () => rewritesConfig,
};

module.exports = withBundleAnalyzer(nextConfig);
