const search = {
	locale: 'ru',
	search_title: 'Doom.ru - база данных по недвижимости | Поиск',
	search_sorts: {
		sort_by: {
			name: 'sort_by',
			type: 'sorting',
			label: 'Выберите сортировку',
			title: 'Сортировать по',
			options: [
				{
					value: '',
					title: 'Сортировка'
				},
				{
					value: 'DEFAULT',
					title: 'По умолчанию'
				},
				{
					value: 'PRICE_DESC',
					title: 'Дороже'
				},
				{
					value: 'PRICE_ASC',
					title: 'Дешевле'
				},
				{
					value: 'DATE_DESC',
					title: 'Новые'
				},
				{
					value: 'DATE_ASC',
					title: 'Старые'
				}
			]
		}
	},
	search_filters: [
		{
			name: 'address',
			page: 'both',
			type: 'text',
			title: 'Адрес',
			label: 'Введите адрес'
		},
		{
			name: 'type',
			page: 'both',
			type: 'option',
			title: 'Тип жилья',
			label: 'Выберите тип жилья',
			options: [
				{
					value: '',
					title: 'Тип жилья'
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
			name: 'rooms',
			page: 'both',
			type: 'number',
			title: 'Комнаты',
			label: 'Введите комнаты'
		},

		{
			name: 'bedrooms',
			page: 'both',
			type: 'number',
			title: 'Кровати',
			label: 'Введите кровати'
		},
		{
			name: 'term',
			page: 'rent',
			type: 'option',
			title: 'Срок',
			label: 'Выберите срок аренды',
			options: [
				{
					value: '',
					title: 'Срок аренды'
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
			name: 'price',
			page: 'both',
			type: 'from_to',
			title: 'Цена',
			from: {
				name: 'price_from',
				title: 'от',
				label: 'Минимальная цена'
			},
			to: {
				name: 'price_to',
				title: 'до',
				label: 'Максимальная цена'
			}
		},
		{
			name: 'floor',
			page: 'both',
			type: 'from_to',
			title: 'Этаж',
			from: {
				name: 'floor_from',
				title: 'от',
				label: 'Минимальный этаж'
			},
			to: {
				name: 'floor_to',
				title: 'до',
				label: 'Максимальный этаж'
			}
		},
		{
			name: 'area',
			page: 'both',
			type: 'from_to',
			title: 'Площадь, кв.м.',
			from: {
				name: 'area_from',
				title: 'от',
				label: 'Минимальную площадь'
			},
			to: {
				name: 'area_to',
				title: 'до',
				label: 'Максимальную площадь'
			}
		},
		{
			name: 'house_type',
			page: 'both',
			type: 'option',
			title: 'Тип дома',
			label: 'Выберите тип дома',
			options: [
				{
					value: '',
					title: 'Тип дома'
				},
				{
					value: 'panel',
					title: 'Панель'
				},
				{
					value: 'brick',
					title: 'Кирпич'
				},
				{
					value: 'monolith',
					title: 'Монолит'
				},
				{
					value: 'wood',
					title: 'Дерево'
				},
				{
					value: 'other',
					title: 'Другой'
				}
			]
		},
		{
			name: 'repair',
			page: 'both',
			type: 'option',
			title: 'Ремонт',
			label: 'Выберите ремонт',
			options: [
				{
					value: '',
					title: 'Ремонт'
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
					title: 'Косметика'
				},
				{
					value: 'without',
					title: 'Без'
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
			label: 'В ипотеку или нет'
		}
	],
	search_filters_btn: {
		reset: {
			name: 'Сбросить',
			label: 'Сбросить все фильтры'
		},
		submit: {
			name: 'Поиск',
			label: 'Применить фильтры'
		}
	},
	search_result_btn: {
		list: {
			name: 'Список',
			label: 'Перейти в режим списка'
		},
		grid: {
			name: 'Таблица',
			label: 'Перейти в табличный режим'
		},
		prev: {
			name: 'предыдущий',
			label: 'Перейти к предыдущей странице'
		},
		next: {
			name: 'следующий',
			label: 'Перейти к следующей странице'
		},
		page: {
			name: 'страница',
			label: 'Перейти к {{page}}-ой странице'
		}
	},
	search_realty: {
		favorite: {
			add_label: 'Сохранить в избранное',
			remove_label: 'Удалить из избранного'
		}
	}
};

export default search;
