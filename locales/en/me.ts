import { FaHistory, FaRegBell, FaRegHeart, FaRegListAlt, FaRegSun, FaRegUserCircle } from 'react-icons/fa';

const me = {
	locale: 'en',
	me_title: 'Doom.ru | My profile',
	aside: {
		tabs: [
			{
				id: 0,
				name: 'Profile',
				title: 'Go to profile info',
				url: '/me/profile',
				Icon: FaRegUserCircle
			},
			{
				id: 1,
				name: 'Notifications',
				title: 'Go to notifications',
				url: '/me/notifications',
				Icon: FaRegBell
			},
			{
				id: 2,
				name: 'Favorites',
				title: 'Go to favorites',
				url: '/me/favorites',
				Icon: FaRegHeart
			},
			{
				id: 3,
				name: 'Settings',
				title: 'Go to settings',
				url: '/me/settings',
				Icon: FaRegSun
			},
			{
				id: 4,
				name: 'My posts',
				title: 'Go to your announcements',
				url: '/me/announcements',
				Icon: FaRegListAlt
			},
			{
				id: 5,
				name: 'History',
				title: 'Go to my history',
				url: '/me/history',
				Icon: FaHistory
			}
		],
		logout: {
			text: 'Log Out',
			title: 'Log out of the app'
		}
	},
	settings: {
		title: 'Customization',
		form: {
			options: [
				{
					name: 'theme',
					title: 'Application theme',
					select: {
						title: 'Select theme',
						label: 'Select app theme',
						options: [
							{
								value: 'system',
								title: 'System'
							},
							{
								value: 'light',
								title: 'Light'
							},
							{
								value: 'dark',
								title: 'Dark'
							}
						]
					}
				}
			],
			submit: {
				title: 'Save settings',
				label: 'Click to save settings'
			}
		}
	}
};

export default me;
