/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['localhost', '192.168.1.61', 'cdn-icons.flaticon.com', 'cdn-icons-png.flaticon.com'] },
  env: {
		APP_URL: process.env.APP_URL,
		SERVER_URL: process.env.SERVER_URL,
	}
}

module.exports = nextConfig
