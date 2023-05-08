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
			},
			hide: {
				label: 'Нажмите, чтобы скрыть объявление'
			}
		},
		modal: {
			title: 'Вы уверены?',
			description: 'Когда вы нажмете "удалить", объявления удалятся безвозвратно'
		},
		edit_form: {
			btn: {
				edit: {
					label: 'Нажмите, чтобы редактировать объявление'
				},
				finish: {
					label: 'Нажмите, чтобы завершить редактирование'
				},
				cancel: {
					label: 'Нажмите, чтобы отменить изменения'
				},
				showMore: {
					title: 'Показать еще',
					label: 'Нажмите, чтобы показать еще поля'
				},
				hideMore: {
					title: 'Свернуть',
					label: 'Нажмите, чтобы скрыть поля'
				}
			},
			fields: {
				base: [
					{
						name: 'title',
						type: 'text',
						page: 'both',
						required: {
							value: true,
							message: 'Заголовок'
						},
						title: 'Заголовок',
						label: 'Введите заголовок'
					},
					{
						name: 'address',
						page: 'both',
						type: 'text',
						required: {
							value: true,
							message: 'Адрес'
						},
						title: 'Адрес',
						label: 'Город, район или метро'
					},
					{
						name: 'action',
						page: 'both',
						type: 'option',
						required: {
							value: true,
							message: 'Аренда или продажа'
						},
						title: 'Действие',
						label: 'Выберите действие',
						options: [
							{
								value: '',
								title: 'Выберите действие'
							},
							{
								value: 'rent',
								title: 'Сдать'
							},
							{
								value: 'buy',
								title: 'Продать'
							}
						]
					},
					{
						name: 'price',
						page: 'both',
						type: 'number',
						required: {
							value: true,
							message: 'Цена обязательна'
						},
						title: 'Цена',
						label: 'Введите цену'
					},
					{
						name: 'description',
						page: 'both',
						type: 'textarea',
						required: {
							value: true,
							message: 'Описание обязательно'
						},
						title: 'Описание',
						label: 'Введите описание'
					}
				],
				detail: [
					{
						name: 'area',
						page: 'both',
						type: 'number',
						required: {
							value: true,
							message: 'Площадь обязательна'
						},
						title: 'Площадь',
						label: 'Введите площадь'
					},
					{
						name: 'floor',
						page: 'both',
						type: 'number',
						required: {
							value: true,
							message: 'Этаж обязателен'
						},
						title: 'Этаж',
						label: 'Введите этаж'
					},
					{
						name: 'rooms',
						page: 'both',
						type: 'number',
						required: {
							value: true,
							message: 'Комнаты обязательны'
						},
						title: 'Комнаты',
						label: 'Введите комнаты'
					},
					{
						name: 'bedrooms',
						page: 'both',
						type: 'number',
						required: {
							value: true,
							message: 'Спальни обязательны'
						},
						title: 'Спальни',
						label: 'Введите спальни'
					},
					{
						name: 'currency',
						page: 'both',
						type: 'option',
						required: {
							value: true,
							message: 'Валюта обязательна'
						},
						title: 'Валюта',
						label: 'Выберите валюту',
						options: [
							{
								value: '',
								title: 'Выберите валюту'
							},
							{
								value: 'RUB',
								title: 'Рубль'
							},
							{
								value: 'USD',
								title: 'Доллар'
							}
						]
					},
					{
						name: 'type',
						page: 'both',
						type: 'option',
						required: {
							value: true,
							message: 'Тип обязателен'
						},
						title: 'Тип',
						label: 'Выберите тип',
						options: [
							{
								value: '',
								title: 'Выберите тип'
							},
							{
								value: 'apartment',
								title: 'Квартира'
							},
							{
								value: 'room',
								title: 'Комната'
							},
							{
								value: 'house',
								title: 'Дом'
							},
							{
								value: 'cottage',
								title: 'Коттедж'
							},
							{
								value: 'studio',
								title: 'Студия'
							},
							{
								value: 'hostel',
								title: 'Хостел'
							}
						]
					},
					{
						name: 'term',
						page: 'rent',
						type: 'option',
						required: {
							value: true,
							message: 'Срок обязателен'
						},
						title: 'Срок',
						label: 'Выберите срок',
						options: [
							{
								value: '',
								title: 'Выберите срок'
							},
							{
								value: 'day',
								title: 'День'
							},
							{
								value: 'month',
								title: 'Месяц'
							}
						]
					},
					{
						name: 'houseType',
						page: 'both',
						type: 'option',
						required: {
							value: true,
							message: 'Тип дома обязателен'
						},
						title: 'Тип дома',
						label: 'Выберите тип дома',
						options: [
							{
								value: '',
								title: 'Выберите тип дома'
							},
							{
								value: 'panel',
								title: 'Панельный'
							},
							{
								value: 'brick',
								title: 'Кирпичный'
							},
							{
								value: 'monolith',
								title: 'Монолитный'
							},
							{
								value: 'wood',
								title: 'Деревянный'
							},
							{
								value: 'other',
								title: 'Другое'
							}
						]
					},
					{
						name: 'repair',
						page: 'both',
						type: 'option',
						required: {
							value: true,
							message: 'Ремонт обязателен'
						},
						title: 'Ремонт',
						label: 'Выберите ремонт',
						options: [
							{
								value: '',
								title: 'Выберите ремонт'
							},
							{
								value: 'euro',
								title: 'Евро'
							},
							{
								value: 'design',
								title: 'Дизайн'
							},
							{
								value: 'cosmetic',
								title: 'Косметический'
							},
							{
								value: 'without',
								title: 'Без ремонта'
							}
						]
					},
					{
						name: 'elevator',
						page: 'both',
						type: 'checkbox',
						title: 'Лифт',
						label: 'Есть лифт или нет'
					},
					{
						name: 'mortgage',
						page: 'buy',
						type: 'checkbox',
						title: 'В ипотеку',
						label: 'С ипотекой или нет'
					}
				]
			},
			error: {
				images: {
					empty: {
						title: 'Картинки не могут быть пустыми'
					}
				}
			}
		}
	}
};

export default me;
