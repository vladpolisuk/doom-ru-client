/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const withPWA = require('next-pwa')({
	dest: 'public'
});

const nextConfig = withPWA({
	reactStrictMode: false,
	swcMinify: true,
	compiler: {
		removeConsole: true
	},
	i18n,
	images: {
		domains: ['lh3.googleusercontent.com', 'i.postimg.cc', 'www.udr.com', 'images.unsplash.com']
	}
});

module.exports = nextConfig;
