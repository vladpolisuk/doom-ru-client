const home = {
	locale: 'ru',
	home_title: 'Доом.ру - база недвижимости | Продажа, аренда квартир и другой недвижимости',
	home_section_search: {
		section_title: 'За недвижимостью? Doom.ru',
		search_input: {
			placeholder: 'Город, адрес, район или метро',
			title: 'Введите адрес'
		},
		search_modal: {
			name: 'Фильтры'
		},
		search_btn: {
			reset: {
				name: 'Отменить',
				label: 'Отменить фильтры'
			},
			submit: {
				name: 'Применить',
				label: 'Применить фильтры'
			},
			search: {
				name: 'Поиск',
				label: 'Применить фильтры и поиск'
			}
		},
		search_filters: {
			title: 'Установить фильтры',
			text: 'Фильтры'
		},
		search_tabs: [
			{
				type: 'rent',
				title: 'Снять жилье',
				text: 'Аренда'
			},
			{
				type: 'buy',
				title: 'Купить жилье',
				text: 'Купить'
			}
		]
	},
	home_section_quickLinks: {
		section_title: 'Быстрые ссылки',
		links_board: [
			{
				title: 'Купить квартиру',
				content: {
					links: [
						{
							title: 'Перейти к выбору 1-комнатных к покупке',
							text: '1-комнатные',
							url: '/s/buy?type=apartment&rooms=1'
						},
						{
							title: 'Перейти к выбору 2-комнатных к покупке',
							text: '2-комнатные',
							url: '/s/buy?type=apartment&rooms=2'
						},
						{
							title: 'Перейти к выбору 3-комнатных к покупке',
							text: '3-комнатные',
							url: '/s/buy?type=apartment&rooms=3'
						},
						{
							title: 'Перейти к выбору студий к покупке',
							text: 'Студии',
							url: '/s/buy?type=studio'
						},
						{
							title: 'Перейти к выбору комнат к покупке',
							text: 'Купить комнату',
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
				title: 'Снять квартиру',
				content: {
					links: [
						{
							title: 'Перейти к выбору 1-комнатных в аренду',
							text: '1-комнатные',
							url: '/s/rent?type=apartment&rooms=1'
						},
						{
							title: 'Перейти к выбору 2-комнатных в аренду',
							text: '2-комнатные',
							url: '/s/rent?type=apartment&rooms=2'
						},
						{
							title: 'Перейти к выбору 3-комнатных в аренду',
							text: '3-комнатные',
							url: '/s/rent?type=apartment&rooms=3'
						},
						{
							title: 'Перейти к выбору студий в аренду',
							text: 'Студии',
							url: '/s/rent?type=studio'
						},
						{
							title: 'Перейти к выбору комнат в аренду',
							text: 'Снять комнату',
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
				title: 'Снять посуточно',
				content: {
					links: [
						{
							title: 'Перейти к выбору квартир',
							text: 'Квартира посуточно',
							url: '/s/rent?type=apartment&term=day'
						},
						{
							title: 'Перейти к выбору коттеджа',
							text: 'Коттедж на день',
							url: '/s/rent?type=cottage&term=day'
						},
						{
							title: 'Перейти в выбору комнаты',
							text: 'Комната на день',
							url: '/s/rent?type=room&term=day'
						},
						{
							title: 'Перейти в выбору хостела',
							text: 'Хостел на день',
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
