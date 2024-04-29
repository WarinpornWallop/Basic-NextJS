/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "upload.wikimedia.org",
      "raw.githubusercontent.com",
      "cdn.dummyjson.com",
      "images.unsplash.com",
    ], //Domain ภายนอกของรูป ตอนที่เอารูปมาเป็นลิงก์
  },
};

module.exports = nextConfig
