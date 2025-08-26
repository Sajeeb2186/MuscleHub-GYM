/** @type {import('next').NextConfig} */
const nextConfig = {
    plugins: {
    '@tailwindcss/postcss': {},
  },
    images: {
    remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "i.ibb.co",   // ✅ if the correct domain is i.ibb.co
    //   },
      // OR if it really is i.ibb.co.com
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
      },
    ],
  },
};

export default nextConfig;
