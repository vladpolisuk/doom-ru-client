const auth = {
	locale: 'en',
	auth_title: 'Doom.ru - real estate database | Auth',
	auth_haveAccount: "Don't have an account?",
	auth_form: {
		signin: {
			name: 'signin',
			title: 'Sign In'
		},
		signup: {
			name: 'signup',
			title: 'Sign Up'
		},
		fields: [
			{
				page: 'both',
				name: 'email',
				fieldType: 'input',
				type: 'email',
				title: 'Email',
				label: 'Enter email',
				autoComplete: 'username',
				required: {
					value: true,
					message: 'Email is required'
				},
				pattern: {
					value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
					message: 'Email is incorrect'
				}
			},
			{
				page: 'signup',
				name: 'name',
				fieldType: 'input',
				type: 'text',
				title: 'Name',
				label: 'Enter your name',
				autoComplete: 'given-name',
				required: {
					value: true,
					message: 'Name is required'
				},
				minLength: {
					value: 2,
					message: 'Min 2 letters'
				}
			},
			{
				page: 'signup',
				name: 'secondName',
				fieldType: 'input',
				type: 'text',
				title: 'Second name',
				label: 'Enter your second name',
				autoComplete: 'family-name',
				required: {
					value: true,
					message: 'Second name is required'
				},
				minLength: {
					value: 2,
					message: 'Min 2 letters'
				}
			},
			{
				page: 'signin',
				name: 'password',
				fieldType: 'input',
				type: 'password',
				title: 'Password',
				label: 'Enter password',
				showPasswordButton: true,
				autoComplete: 'current-password',
				required: {
					value: true,
					message: 'Password is required'
				},
				minLength: {
					value: 8,
					message: 'Min 8 letters'
				}
			},
			{
				page: 'signup',
				name: 'password',
				fieldType: 'input',
				type: 'password',
				title: 'Password',
				label: 'Enter password',
				showPasswordButton: true,
				autoComplete: 'new-password',
				required: {
					value: true,
					message: 'Password is required'
				},
				minLength: {
					value: 8,
					message: 'Min 8 letters'
				}
			},
			{
				page: 'signup',
				name: 'repeatPassword',
				fieldType: 'input',
				type: 'password',
				title: 'Repeat password',
				label: 'Enter password again',
				showPasswordButton: true,
				autoComplete: 'new-password',
				required: {
					value: true,
					message: 'Repeat password'
				},
				validate: {
					equalValueField: 'password',
					message: 'Repeat password'
				},
				minLength: {
					value: 8,
					message: 'Min 8 letters'
				}
			},
			{
				page: 'signin',
				name: 'remember',
				fieldType: 'checkbox',
				defaultValue: true,
				type: 'checkbox',
				title: 'Remember me',
				label: 'Remember me'
			}
		],
		code: {
			name: 'code',
			title: 'Enter your code',
			label: 'We sent it to your email',
			sendAgain: {
				title: 'Send again',
				label: "We'll send code again"
			}
		},
		btn: {
			signin: {
				cancel: {
					title: 'Cancel',
					label: 'Cancel sign in'
				},
				submit: {
					title: 'Sign In',
					label: 'Submit and sign in'
				}
			},
			signup: {
				submit: {
					title: 'Sign Up',
					label: 'Submit and sign up'
				}
			}
		}
	}
};

export default auth;
