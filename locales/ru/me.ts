import { FaHistory, FaRegBell, FaRegHeart, FaRegListAlt, FaRegSun, FaRegUserCircle } from 'react-icons/fa';

const me = {
	locale: 'ru',
	me_title: 'Доом.ру | Мой профиль',
	me_aside: {
		tabs: [
			{
				id: 0,
				name: 'Профиль',
				title: 'Перейти в профиль',
				url: '/me/profile',
				Icon: FaRegUserCircle
			},
			{
				id: 1,
				name: 'Уведомления',
				title: 'Перейти в уведомления',
				url: '/me/notifications',
				Icon: FaRegBell
			},
			{
				id: 2,
				name: 'Избранное',
				title: 'Перейти в избранное',
				url: '/me/favorites',
				Icon: FaRegHeart
			},
			{
				id: 3,
				name: 'Настройки',
				title: 'Перейти в настройки',
				url: '/me/settings',
				Icon: FaRegSun
			},
			{
				id: 4,
				name: 'Мои объявления',
				title: 'Перейти в мои объявления',
				url: '/me/announcements',
				Icon: FaRegListAlt
			},
			{
				id: 5,
				name: 'История',
				title: 'Перейти в историю сделок',
				url: '/me/history',
				Icon: FaHistory
			}
		],
		logout: {
			title: 'Выйти',
			label: 'Выйти из приложения'
		}
	},
	me_settings: {
		title: 'Кастомизация',
		form: {
			options: [
				{
					name: 'theme',
					title: 'Тема приложения',
					select: {
						title: 'Выбрать тему',
						label: 'Выбрать тему приложения',
						options: [
							{
								value: 'system',
								title: 'Как в системе'
							},
							{
								value: 'light',
								title: 'Светлая'
							},
							{
								value: 'dark',
								title: 'Темная'
							}
						]
					}
				}
			],
			submit: {
				title: 'Сохранить настройки',
				label: 'Нажмите что сохранить настройки'
			}
		}
	},
	me_favorites: {
		title: 'Избранное'
	}
};

export default me;
