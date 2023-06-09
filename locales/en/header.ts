const header = {
	locale: 'en',
	header_logo_link_label: 'Go home',
	header_nav_label: 'Site navigation',
	header_nav_links: [
		{
			name: 'Rent',
			url: '/s/rent',
			title: 'Real estate properties'
		},
		{
			name: 'Buy',
			url: '/s/buy',
			title: 'Real estate and property for sale'
		}
	],
	header_user_auth: {
		signin: {
			name: 'Sign In',
			title: 'Sing in in doom.ru'
		}
	},
	header_user_profile: {
		profile: {
			title: 'Go to profile'
		},
		favorites: {
			title: 'Go to favorites'
		},
		notifications: {
			title: 'Notifications'
		}
	}
};

export default header;
