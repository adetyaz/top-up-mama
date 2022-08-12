/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async rewrites() {
		return [
			{ source: '/login', destination: '/Login' },
			{ source: '/register', destination: '/Register' },
			{ source: '/account', destination: '/Account' },
		]
	},
}

module.exports = nextConfig
