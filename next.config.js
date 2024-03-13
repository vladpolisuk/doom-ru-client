/** @type {import('next').NextConfig} */
const million = require('million/compiler');
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
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
				pathname: '**'
			},
			{
				protocol: 'http',
				hostname: 'localhost',
				pathname: '**'
			},
			{
				protocol: 'https',
				hostname: 'api.doomru.ru',
				pathname: '**'
			},
			{
				protocol: 'https',
				hostname: 'doomru.ru',
				pathname: '**'
			}
		]
	}
});

module.exports = million.next(nextConfig);
