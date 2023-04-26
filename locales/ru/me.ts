import { FaHistory, FaRegBell, FaRegHeart, FaRegListAlt, FaRegSun, FaRegUserCircle } from 'react-icons/fa';

const me = {
	locale: 'ru',
	me_profile_title: 'Doom.ru | Профиль',
	me_favorites_title: 'Doom.ru | Избранное',
	me_settings_title: 'Doom.ru | Настройки',
	me_realties_title: 'Doom.ru | Мои объявления',
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
				url: '/me/realties',
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
		title: 'Избранное',
		not_found: {
			title: 'Нет избранных'
		}
	},
	me_realties: {
		title: 'Мои объявления',
		not_found: {
			title: 'Нет объявлений'
		},
		messages: {
			success: {
				title: 'Объявления удалены'
			},
			error: {
				title: 'Что-то пошло не так'
			}
		},
		btn: {
			remove: {
				title: 'Удалить',
				label: 'Нажмите, чтобы удалить'
			},
			reset: {
				title: 'Сбросить',
				label: 'Нажмите, чтобы сбросить'
			},
			cancel: {
				title: 'Отменить',
				label: 'Нажмите, чтобы отменить'
			}
		},
		modal: {
			title: 'Вы уверены?',
			description: 'Когда вы нажмете "удалить", объявления удалятся безвозвратно'
		}
	}
};

export default me;
