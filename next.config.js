/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["upload.wikimedia.org"], //Domain ภายนอกของรูป ตอนที่เอารูปมาเป็นลิงก์
  },
};

module.exports = nextConfig
