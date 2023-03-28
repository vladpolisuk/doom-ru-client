import clsx from 'clsx';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import AppAlert from '../../components/AppAlert/AppAlert';
import AppButton from '../../components/AppButton/AppButton';
import AppCheckbox from '../../components/AppCheckbox/AppCheckbox';
import AppInput from '../../components/AppInput/AppInput';
import AppLabel from '../../components/AppLabel/AppLabel';
import { useTranslation } from '../../hooks/useTranslation';
import locales from '../../locales';
import s from './PageAuth.module.scss';

export type SignUpFields = {
	email: string;
	name: string;
	secondName: string;
	password: string;
	repeatPassword: string;
};

type Fields = 'email' | 'name' | 'secondName' | 'password' | 'repeatPassword';

type Props = {
	onSubmit: (data: SignUpFields) => void;
	loading: boolean;
	error: string;
};

export const AuthSignUp: FC<Props> = ({ onSubmit, error, loading }) => {
	const auth = useTranslation('auth') as typeof locales.en.auth;
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch
	} = useForm<SignUpFields>();

	const name = auth.auth_form.signup.name;
	const fields = auth.auth_form.fields;
	const submit_title = auth.auth_form.btn.signup.submit.title;
	const submit_label = auth.auth_form.btn.signup.submit.label;
	const submitBtnStyles = clsx(s.auth_form_actions_submit, 'active--scale', 'transition');

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={s.auth_form}>
			{error && <AppAlert type='error'>{error}</AppAlert>}
			{fields
				.filter(field => field.page === name || field.page === 'both')
				.map(field => {
					switch (field.fieldType) {
						case 'input':
							return (
								<AppLabel
									key={`signup_${field.name}`}
									errorMessage={errors[field.name as Fields]?.message}>
									<AppInput
										onlyARIA
										disabled={loading}
										showPasswordButton={field.showPasswordButton}
										type={field.type}
										title={field.label}
										placeholder={field.title}
										invalid={field.name in errors}
										className={s.auth_form_input}
										{...register(field.name as Fields, {
											required: field.required,
											minLength: field.minLength,
											validate: value => {
												if (field.validate) {
													if (watch(field.validate.equalValueField as Fields) != value) {
														return field.validate.message;
													}
												}
											},
											pattern: field.pattern && {
												value: field.pattern.value,
												message: field.pattern.message
											}
										})}
									/>
								</AppLabel>
							);

						case 'checkbox':
							return (
								<AppLabel row>
									<AppCheckbox {...register(field.name as Fields)} />
									<p>{field.title}</p>
								</AppLabel>
							);
					}
				})}

			<div className={s.auth_form_actions}>
				<AppButton
					type='submit'
					disabled={loading}
					loading={loading}
					title={submit_label}
					className={submitBtnStyles}>
					{submit_title}
				</AppButton>
			</div>
		</form>
	);
};
