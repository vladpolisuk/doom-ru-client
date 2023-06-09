const home = {
	locale: 'en',
	home_title: 'Doom.ru - real estate database | Sale, rent of apartments and other real estate',
	home_section_search: {
		section_title: 'For real estate? Doom.ru',
		search_input: {
			placeholder: 'City, address, district or subway',
			title: 'Input your address'
		},
		search_modal: {
			name: 'Filters'
		},
		search_btn: {
			reset: {
				name: 'Cancel',
				label: 'Cancel the filters'
			},
			submit: {
				name: 'Apply',
				label: 'Apply the filters'
			},
			search: {
				name: 'Search',
				label: 'Apply filters and search'
			}
		},
		search_filters: {
			title: 'Set filters',
			text: 'Filters'
		},
		search_tabs: [
			{
				type: 'rent',
				title: 'Choose rent',
				text: 'Rent'
			},
			{
				type: 'buy',
				title: 'Choose buy',
				text: 'Buy'
			}
		]
	},
	home_section_quickLinks: {
		section_title: 'Quick Links',
		links_board: [
			{
				title: 'Buy apartments',
				content: {
					links: [
						{
							title: 'Go to buy a 1-room',
							text: '1-room',
							url: '/s/buy?type=apartment&rooms=1'
						},
						{
							title: 'Go to buy a 2-room',
							text: '2-room',
							url: '/s/buy?type=apartment&rooms=2'
						},
						{
							title: 'Go to buy a 3-room',
							text: '3-room',
							url: '/s/buy?type=apartment&rooms=3'
						},
						{
							title: 'Go to buy a studio',
							text: 'Studios',
							url: '/s/buy?type=studio'
						},
						{
							title: 'Go to buy a room',
							text: 'Buy a room',
							url: '/s/buy?type=room'
						}
					]
				},
				image: {
					src: '../../assets/boardLinks_item_1.jpg',
					alt: 'Poster 1'
				}
			},
			{
				title: 'Rent apartments',
				content: {
					links: [
						{
							title: 'Go to rent a 1-room',
							text: '1-room',
							url: '/s/rent?type=apartment&rooms=1'
						},
						{
							title: 'Go to rent a 2-room',
							text: '2-room',
							url: '/s/rent?type=apartment&rooms=2'
						},
						{
							title: 'Go to rent a 3-room',
							text: '3-room',
							url: '/s/rent?type=apartment&rooms=3'
						},
						{
							title: 'Go to rent a studio',
							text: 'Studios',
							url: '/s/rent?type=studio'
						},
						{
							title: 'Go to rent a room',
							text: 'Buy a room',
							url: '/s/rent?type=room'
						}
					]
				},
				image: {
					src: '../../assets/boardLinks_item_2.jpg',
					alt: 'Poster 2'
				}
			},
			{
				title: 'Rent daily',
				content: {
					links: [
						{
							title: 'Go to rent an apartments daily',
							text: 'Daily rate apartments',
							url: '/s/rent?type=apartment&term=day'
						},
						{
							title: 'Go to rent a cottage daily',
							text: 'Rent cottage for a day',
							url: '/s/rent?type=cottage&term=day'
						},
						{
							title: 'Go to rent a room daily',
							text: 'Rent a room for a day',
							url: '/s/rent?type=room&term=day'
						},
						{
							title: 'Go to rent a hostel daily',
							text: 'Rent a hostel for a day',
							url: '/s/rent?type=hostel'
						}
					]
				},
				image: {
					src: '../../assets/boardLinks_item_3.jpg',
					alt: 'Poster 3'
				}
			},
			{
				title: 'Map Search',
				content: {
					map: '',
					links: []
				}
			}
		]
	}
};

export default home;
