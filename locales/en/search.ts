const search = {
	locale: 'en',
	search_title: 'Doom.ru - real estate database | Search',
	search_sorts: {
		sort_by: {
			name: 'sort_by',
			type: 'sorting',
			label: 'Choose sort',
			title: 'Sort by',
			options: [
				{
					value: '',
					title: 'Sort by'
				},
				{
					value: 'DEFAULT',
					title: 'Default'
				},
				{
					value: 'PRICE_DESC',
					title: 'More expensive'
				},
				{
					value: 'PRICE_ASC',
					title: 'Cheaper'
				},
				{
					value: 'DATE_DESC',
					title: 'New'
				},
				{
					value: 'DATE_ASC',
					title: 'Old'
				}
			]
		}
	},
	search_filters: [
		{
			page: 'both',
			name: 'address',
			type: 'text',
			title: 'Address',
			label: 'City, district or subway'
		},
		{
			page: 'both',
			name: 'type',
			type: 'option',
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
			name: 'rooms',
			page: 'both',
			type: 'number',
			title: 'Rooms',
			label: 'Input rooms'
		},

		{
			name: 'bedrooms',
			page: 'both',
			type: 'number',
			title: 'Beds',
			label: 'Input beds'
		},
		{
			name: 'term',
			page: 'rent',
			type: 'option',
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
			name: 'price',
			page: 'both',
			type: 'from_to',
			title: 'Price',
			from: {
				name: 'price_from',
				title: 'from',
				label: 'Input min price'
			},
			to: {
				name: 'price_to',
				title: 'to',
				label: 'Input max price'
			}
		},
		{
			name: 'floor',
			page: 'both',
			type: 'from_to',
			title: 'Floor',
			from: {
				name: 'floor_from',
				title: 'from',
				label: 'Input min floor'
			},
			to: {
				name: 'floor_to',
				title: 'to',
				label: 'Input max floor'
			}
		},
		{
			name: 'area',
			page: 'both',
			type: 'from_to',
			title: 'Area, sq. m.',
			from: {
				name: 'area_from',
				title: 'from',
				label: 'Input min area'
			},
			to: {
				name: 'area_to',
				title: 'to',
				label: 'Input max area'
			}
		},
		{
			name: 'house_type',
			page: 'both',
			type: 'option',
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
	],
	search_filters_btn: {
		reset: {
			name: 'Reset',
			label: 'Reset all filters'
		},
		submit: {
			name: 'Search',
			label: 'Apply filters'
		}
	},
	search_result_btn: {
		list: {
			name: 'List',
			label: 'Switch to list view'
		},
		grid: {
			name: 'Grid',
			label: 'Switch to grid view'
		},
		prev: {
			name: 'prev',
			label: 'Go to previous page'
		},
		next: {
			name: 'next',
			label: 'Go to next page'
		},
		page: {
			name: 'page',
			label: 'Go to {{page}} page'
		}
	},
	search_realty: {
		favorite: {
			add_label: 'Save to favorites',
			remove_label: 'Remove from favorites'
		}
	}
};

export default search;
