const header = {
	locale: 'ru',
	header_logo_link_label: 'Домой',
	header_nav_label: 'Навигация по сайту',
	header_nav_links: [
		{
			name: 'Аренда',
			url: '/s/rent',
			title: 'Аренда квартир и домов'
		},
		{
			name: 'Купить',
			url: '/s/buy',
			title: 'Покупка квартир и домов'
		}
	],
	header_user_auth: {
		signin: {
			name: 'Войти',
			title: 'Войти в доом.ру'
		}
	},
	header_user_profile: {
		profile: {
			title: 'Перейти в профиль'
		},
		favorites: {
			title: 'Перейти в избранное'
		},
		notifications: {
			title: 'Уведомления'
		}
	}
};

export default header;
