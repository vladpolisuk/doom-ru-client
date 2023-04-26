import { FaHistory, FaRegBell, FaRegHeart, FaRegListAlt, FaRegSun, FaRegUserCircle } from 'react-icons/fa';

const me = {
	locale: 'en',
	me_profile_title: 'Doom.ru | My profile',
	me_favorites_title: 'Doom.ru | Favorites',
	me_settings_title: 'Doom.ru | Settings',
	me_realties_title: 'Doom.ru | Realties',
	me_aside: {
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
				title: 'Go to your realties',
				url: '/me/realties',
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
			title: 'Log Out',
			label: 'Log out of the app'
		}
	},
	me_settings: {
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
	},
	me_favorites: {
		title: 'Favorites',
		not_found: {
			title: 'No favorites'
		}
	},
	me_realties: {
		title: 'My realties',
		not_found: {
			title: 'No realties'
		},
		messages: {
			success: {
				title: 'Successfully removed'
			},
			error: {
				title: 'Something went wrong'
			}
		},
		btn: {
			remove: {
				title: 'Remove',
				label: 'Click to remove realties'
			},
			reset: {
				title: 'Reset',
				label: 'Click to reset realties'
			},
			cancel: {
				title: 'Cancel',
				label: 'Click to cancel removing'
			}
		},
		modal: {
			title: 'Are you sure?',
			description: 'When you\'ll click "remove", realties will be removing forever'
		}
	}
};

export default me;
