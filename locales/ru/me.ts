const me = {
	locale: 'ru',
	me_title: 'Доом.ру | Мой профиль',
	aside: {
		tabs: [
			{
				id: 0,
				name: 'Профиль',
				title: 'Перейти в профиль',
				url: '/me/profile',
				icon: 'FaRegUserCircle'
			},
			{
				id: 1,
				name: 'Уведомления',
				title: 'Перейти в уведомления',
				url: '/me/notifications',
				icon: 'FaRegBell'
			},
			{
				id: 2,
				name: 'Избранное',
				title: 'Перейти в избранное',
				url: '/me/favorites',
				icon: 'FaRegHeart'
			},
			{
				id: 3,
				name: 'Настройки',
				title: 'Перейти в настройки',
				url: '/me/settings',
				icon: 'FaRegSun'
			},
			{
				id: 4,
				name: 'Мои объявления',
				title: 'Перейти в мои объявления',
				url: '/me/announcements',
				icon: 'FaRegListAlt'
			},
			{
				id: 5,
				name: 'История',
				title: 'Перейти в историю сделок',
				url: '/me/history',
				icon: 'FaHistory'
			}
		],
		logout: {
			text: 'Выйти',
			title: 'Выйти из приложения'
		}
	}
};

export default me;
