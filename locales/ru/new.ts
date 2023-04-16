const newRealty = {
	locale: 'ru',
	new_title: 'Доом.ру - Новая недвижимость | База данных недвижимости',
	new_header: {
		title: 'Новая недвижимость'
	},
	new_form: {
		images: {
			title: 'Загрузите изображения (до 10 штук)',
			uploadBoxTitle: 'добавить фото',
			errors: {
				empty: {
					title: 'Картинки не могут быть пустыми'
				}
			}
		},
		form: {
			base: {
				title: 'Укажите основную информацию',
				fields: [
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
				]
			},
			detail: {
				title: 'Укажите дополнительные поля',
				fields: [
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
			submit: {
				title: 'Создать',
				label: 'Нажмите чтобы создать'
			},
			confirm: {
				title: 'Вы уверены?',
				label: 'Если вы нажмете кнопку "Создать", ваше объявление будет создано. Нажмите "Отменить", чтобы вернуться к форме.',
				cancel: {
					title: 'Отменить',
					label: 'Нажмите, чтобы отменить'
				},
				submit: {
					title: 'Создать',
					label: 'Нажмите, чтобы создать объявление'
				}
			}
		},
		errors: {
			unknown: {
				title: 'Что-то пошло не так. Попробуйте еще раз.'
			}
		}
	}
};

export default newRealty;
