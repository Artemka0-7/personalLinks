/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['localhost', 'cdn-icons.flaticon.com', 'cdn-icons-png.flaticon.com'] },
  env: {
		APP_URL: process.env.APP_URL,
	}
}

module.exports = nextConfig
