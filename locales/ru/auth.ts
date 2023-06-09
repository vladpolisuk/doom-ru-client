const auth = {
	locale: 'en',
	auth_title: 'Доом.ру - база данных недвижимости | Регистрация',
	auth_haveAccount: 'Нет аккаунта?',
	auth_form: {
		signin: {
			name: 'signin',
			title: 'Вход'
		},
		signup: {
			name: 'signup',
			title: 'Регистрация'
		},
		fields: [
			{
				page: 'both',
				name: 'email',
				fieldType: 'input',
				type: 'email',
				title: 'Почта',
				label: 'Введите email',
				autoComplete: 'username',
				required: {
					value: true,
					message: 'Почта обязательна'
				},
				pattern: {
					value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
					message: 'Неверная почта'
				}
			},
			{
				page: 'signup',
				name: 'name',
				fieldType: 'input',
				type: 'text',
				title: 'Имя',
				label: 'Введите свое имя',
				autoComplete: 'given-name',
				required: {
					value: true,
					message: 'Имя обязательно'
				},
				minLength: {
					value: 2,
					message: 'Минимум 2 символа'
				}
			},
			{
				page: 'signup',
				name: 'secondName',
				fieldType: 'input',
				type: 'text',
				title: 'Фамилия',
				label: 'Введите свою фамилию',
				autoComplete: 'family-name',
				required: {
					value: true,
					message: 'Фамилия обязательна'
				},
				minLength: {
					value: 2,
					message: 'Минимум 2 символа'
				}
			},
			{
				page: 'signup',
				name: 'password',
				fieldType: 'input',
				type: 'password',
				title: 'Пароль',
				label: 'Введите пароль',
				showPasswordButton: true,
				autoComplete: 'new-password',
				required: {
					value: true,
					message: 'Пароль обязателен'
				},
				minLength: {
					value: 8,
					message: 'Минимум 8 символов'
				}
			},
			{
				page: 'signin',
				name: 'password',
				fieldType: 'input',
				type: 'password',
				title: 'Пароль',
				label: 'Введите пароль',
				showPasswordButton: true,
				autoComplete: 'current-password',
				required: {
					value: true,
					message: 'Пароль обязателен'
				},
				minLength: {
					value: 8,
					message: 'Минимум 8 символов'
				}
			},
			{
				page: 'signup',
				name: 'repeatPassword',
				fieldType: 'input',
				type: 'password',
				title: 'Повторите пароль',
				label: 'Введите пароль еще раз',
				showPasswordButton: true,
				autoComplete: 'new-password',
				required: {
					value: true,
					message: 'Повторите пароль'
				},
				validate: {
					equalValueField: 'password',
					message: 'Повторите пароль'
				},
				minLength: {
					value: 8,
					message: 'Минимум 8 символов'
				}
			},
			{
				page: 'signin',
				name: 'remember',
				fieldType: 'checkbox',
				defaultValue: true,
				type: 'checkbox',
				title: 'Запомнить меня',
				label: 'Запомнить меня'
			}
		],
		code: {
			name: 'code',
			title: 'Введите код',
			label: 'Мы отправили его вам на почту',
			sendAgain: {
				title: 'Отправить еще раз',
				label: 'Мы вновь отправим вам код'
			}
		},
		btn: {
			signin: {
				cancel: {
					title: 'Отменить',
					label: 'Отменить вход'
				},
				submit: {
					title: 'Войти',
					label: 'Отправить и войти'
				}
			},
			signup: {
				submit: {
					title: 'Регистрация',
					label: 'Отправить и зарегистрироваться'
				}
			}
		}
	}
};

export default auth;
