/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://nextjs-pinterest.vercel.app/:path*",
      },
    ];
  },
  reactStrictMode: true,

  images: {
    domains: [
      "iconarchive.com",
      "i.pinimg.com",
      "s.pinimg.com",
      "lh3.googleusercontent.com",
    ],
  },
};
