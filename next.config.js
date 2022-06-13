/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3000/:path*",
      },
    ];
  },
  reactStrictMode: true,
  env: {
    MONGODB_URL:
      "mongodb+srv://admin:m1a2h3d4i5@cluster0.rkyeg.mongodb.net/nextjs-pinterest?retryWrites=true&w=majority",
    BASE_Url: "http://localhost:3000",
    Access_token:
      "oijcnukyrjgbfuyghjxgfwieusfjgbvfxhdcbgiukjdbfyestfgcjxhmchdh",
    REFRESH_TOKEN_SECRET:
      "ihugfuyrjgfoiexrxghritdyejdghf375uty98figxuvkbjkx9vro8yhguej",
  },
  images: {
    domains: [
      "iconarchive.com",
      "i.pinimg.com",
      "s.pinimg.com",
      "lh3.googleusercontent.com",
    ],
  },
};
