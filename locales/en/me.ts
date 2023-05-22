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
	me_profile: {
		title: 'Profile',
		avatar: {
			modal: {
				actions: {
					submit: {
						title: 'Set image',
						label: 'Click to set image'
					},
					cancel: {
						title: 'Cancel',
						label: 'Click to cancel'
					}
				}
			}
		},
		form: {
			fields: [
				{
					name: 'email',
					fieldType: 'input',
					type: 'email',
					title: 'Email',
					label: 'Enter new email',
					autoComplete: 'username',
					required: {
						value: true,
						message: 'Email is required'
					},
					pattern: {
						value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
						message: 'Email is incorrect'
					}
				},
				{
					name: 'name',
					fieldType: 'input',
					type: 'text',
					title: 'Name',
					label: 'Enter your new name',
					autoComplete: 'given-name',
					required: {
						value: true,
						message: 'Name is required'
					},
					minLength: {
						value: 2,
						message: 'Min 2 letters'
					}
				},
				{
					name: 'secondName',
					fieldType: 'input',
					type: 'text',
					title: 'Second name',
					label: 'Enter your new second name',
					autoComplete: 'family-name',
					required: {
						value: true,
						message: 'Second name is required'
					},
					minLength: {
						value: 2,
						message: 'Min 2 letters'
					}
				},
				{
					name: 'bio',
					fieldType: 'textarea',
					type: 'text',
					title: 'Bio',
					label: 'Enter your bio',
					autoComplete: 'off'
				},
				{
					name: 'city',
					fieldType: 'input',
					type: 'text',
					title: 'City',
					label: 'Enter your city',
					autoComplete: 'city'
				},
				{
					name: 'phone',
					fieldType: 'input',
					type: 'tel',
					title: 'Phone number',
					label: 'Enter your new phone number',
					autoComplete: 'phone'
				}
			],
			btn: {
				submit: {
					title: 'Save changes',
					label: 'Click to save profile changes'
				},
				code: {
					title: 'Verify email',
					label: 'Click to verify email',
					again: {
						title: 'Send code again',
						label: 'Click to send code again'
					}
				}
			}
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
			},
			hide: {
				label: 'Click to hide realty'
			}
		},
		modal: {
			title: 'Are you sure?',
			description: 'When you\'ll click "remove", realties will be removing forever'
		},
		edit_form: {
			btn: {
				edit: {
					label: 'Click to edit realty'
				},
				finish: {
					label: 'Click to finish editing'
				},
				cancel: {
					label: 'Click to cancel changes'
				},
				showMore: {
					title: 'Show more',
					label: 'Click to show more fields'
				},
				hideMore: {
					title: 'Hide more',
					label: 'Click to hide more fields'
				}
			},
			fields: {
				base: [
					{
						name: 'title',
						page: 'both',
						type: 'text',
						required: {
							value: true,
							message: 'Title is required'
						},
						title: 'Title',
						label: 'Input title'
					},
					{
						name: 'address',
						page: 'both',
						type: 'text',
						required: {
							value: true,
							message: 'Address is required'
						},
						title: 'Address',
						label: 'City, district or subway'
					},
					{
						name: 'action',
						page: 'both',
						type: 'option',
						required: {
							value: true,
							message: 'Rent or sale'
						},
						title: 'Action',
						label: 'Select action',
						options: [
							{
								value: '',
								title: 'Choose action'
							},
							{
								value: 'rent',
								title: 'Rent'
							},
							{
								value: 'buy',
								title: 'Sale'
							}
						]
					},
					{
						name: 'price',
						page: 'both',
						type: 'number',
						required: {
							value: true,
							message: 'Price is required'
						},
						title: 'Price',
						label: 'Input price'
					},
					{
						name: 'description',
						page: 'both',
						type: 'textarea',
						required: {
							value: true,
							message: 'Description is required'
						},
						title: 'Description',
						label: 'Input description'
					}
				],
				detail: [
					{
						name: 'area',
						page: 'both',
						type: 'number',
						required: {
							value: true,
							message: 'Area is required'
						},
						title: 'Area',
						label: 'Input area'
					},
					{
						name: 'floor',
						page: 'both',
						type: 'number',
						required: {
							value: true,
							message: 'Floor is required'
						},
						title: 'Floor',
						label: 'Input floor'
					},
					{
						name: 'rooms',
						page: 'both',
						type: 'number',
						required: {
							value: true,
							message: 'Rooms is required'
						},
						title: 'Rooms',
						label: 'Input rooms'
					},
					{
						name: 'bedrooms',
						page: 'both',
						type: 'number',
						required: {
							value: true,
							message: 'Bedrooms is required'
						},
						title: 'Beds',
						label: 'Input beds'
					},
					{
						name: 'currency',
						page: 'both',
						type: 'option',
						required: {
							value: true,
							message: 'Ruble or dollar'
						},
						title: 'Currency',
						label: 'Select currency',
						options: [
							{
								value: '',
								title: 'Choose currency'
							},
							{
								value: 'RUB',
								title: 'Ruble'
							},
							{
								value: 'USD',
								title: 'Dollar'
							}
						]
					},
					{
						name: 'type',
						page: 'both',
						type: 'option',
						required: {
							value: true,
							message: 'Type is required'
						},
						title: 'Type',
						label: 'Select type',
						options: [
							{
								value: '',
								title: 'Choose type'
							},
							{
								value: 'apartment',
								title: 'Apartment'
							},
							{
								value: 'room',
								title: 'Room'
							},
							{
								value: 'house',
								title: 'House'
							},
							{
								value: 'cottage',
								title: 'Cottage'
							},
							{
								value: 'studio',
								title: 'Studio'
							},
							{
								value: 'hostel',
								title: 'Hostel'
							}
						]
					},
					{
						name: 'term',
						page: 'rent',
						type: 'option',
						required: {
							value: true,
							message: 'Term is required'
						},
						title: 'Term',
						label: 'Select term',
						options: [
							{
								value: '',
								title: 'Choose term'
							},
							{
								value: 'day',
								title: 'Day'
							},
							{
								value: 'month',
								title: 'Month'
							}
						]
					},
					{
						name: 'houseType',
						page: 'both',
						type: 'option',
						required: {
							value: true,
							message: 'House type is required'
						},
						title: 'House type',
						label: 'Select house type',
						options: [
							{
								value: '',
								title: 'Select house type'
							},
							{
								value: 'panel',
								title: 'Panel'
							},
							{
								value: 'brick',
								title: 'Brick'
							},
							{
								value: 'monolith',
								title: 'Monolith'
							},
							{
								value: 'wood',
								title: 'Wood'
							},
							{
								value: 'other',
								title: 'Other'
							}
						]
					},
					{
						name: 'repair',
						page: 'both',
						type: 'option',
						required: {
							value: true,
							message: 'Repair is required'
						},
						title: 'Repair',
						label: 'Select repair',
						options: [
							{
								value: '',
								title: 'Select repair'
							},
							{
								value: 'euro',
								title: 'Euro'
							},
							{
								value: 'design',
								title: 'Design'
							},
							{
								value: 'cosmetic',
								title: 'Cosmetic'
							},
							{
								value: 'without',
								title: 'Without'
							}
						]
					},
					{
						name: 'elevator',
						page: 'both',
						type: 'checkbox',
						title: 'Elevator',
						label: 'Is there an elevator or not'
					},
					{
						name: 'mortgage',
						page: 'buy',
						type: 'checkbox',
						title: 'Into a mortgage',
						label: 'With mortgage or not'
					}
				]
			},
			error: {
				images: {
					empty: {
						title: 'Images cannot be empty'
					}
				}
			}
		}
	}
};

export default me;
