/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
	dest: 'public'
});

const nextConfig = withPWA({
	reactStrictMode: false,
	swcMinify: true,
	env: {
		NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
		NEXT_PUBLIC_LOCATION_API_URL: process.env.NEXT_PUBLIC_LOCATION_API_URL,
		NEXT_PUBLIC_HOST: process.env.NEXT_PUBLIC_HOST
	},
	images: {
		domains: ['lh3.googleusercontent.com', 'localhost', 'api.doom-estate.ru', 'doom-estate.ru']
	}
});

module.exports = nextConfig;
