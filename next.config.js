const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  images: {
    domains: ['localhost', 'flagcdn.com', 'dummyimage.com', 'upload.wikimedia.org'],
    unoptimized: true,
  },
}

module.exports = nextConfig 