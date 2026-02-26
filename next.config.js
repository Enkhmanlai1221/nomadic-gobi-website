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

//   const apiHost = process.env.NEXT_PUBLIC_LOCAL_API_HOST || "";
// const rewritesConfig = apiHost
//   ? [
//       {
//         source: "/:path*/aut/:path*",
//         destination: `${apiHost}/:path*`,
//       },
//     ]
//   : [];

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // experimental: {
  //   optimizePackageImports: [
  //     "@mantine/core",
  //     "@mantine/hooks",
  //     "@mantine/modals",
  //     "@mantine/dates",
  //   ],
  // },
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.alicdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "*.alicdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.taobao.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dev-goodtech.s3.ap-southeast-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dev-azod.zto.mn",
        port: "",
        pathname: "/**",
      },
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
      {
        protocol: "https",
        hostname: "*.bananamall.mn",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: "canvas" }]; // required to make Konva & react-konva work
    return config;
  },
  rewrites: async () => rewritesConfig,
};

module.exports = withBundleAnalyzer(nextConfig);
