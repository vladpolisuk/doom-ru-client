/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const withPWA = require('next-pwa')({
	dest: 'public'
})

const nextConfig = withPWA({
	reactStrictMode: true,
	swcMinify: true,
	i18n,
	images: {
		domains: ["lh3.googleusercontent.com"],
	}
});

module.exports = nextConfig
