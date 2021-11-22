/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    register: true,
    scope: '/',
    sw: 'service-worker.js',
    dest: 'public',
  },
})
