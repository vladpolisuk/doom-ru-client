import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import AppAlert from '../../components/AppAlert/AppAlert';
import AppButton from '../../components/AppButton/AppButton';
import AppCheckbox from '../../components/AppCheckbox/AppCheckbox';
import AppInput from '../../components/AppInput/AppInput';
import AppLabel from '../../components/AppLabel/AppLabel';
import { LocaleAuthSignUpField } from '../../types/locales/auth';
import s from './PageAuth.module.scss';

export type SignUpFields = {
	email: string;
	name: string;
	secondName: string;
	password: string;
	repeatPassword: string;
};

type Props = {
	onSubmit: (data: SignUpFields) => void;
	loading: boolean;
	error: string;
};

export const AuthSignUp: FC<Props> = ({ onSubmit, error, loading }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch
	} = useForm<SignUpFields>();
	const t = useTranslation('auth').t;

	const name = t('auth_form.signup.name');
	const fields = t('auth_form.fields', { returnObjects: true }) as LocaleAuthSignUpField[];
	const submit_title = t('auth_form.btn.signup.submit.title');
	const submit_label = t('auth_form.btn.signup.submit.label');

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
									errorMessage={errors[field.name]?.message}>
									<AppInput
										onlyARIA
										disabled={loading}
										showPasswordButton={field.showPasswordButton}
										type={field.type}
										title={field.label}
										placeholder={field.title}
										invalid={field.name in errors}
										className={s.auth_form_input}
										{...register(field.name, {
											required: field.required,
											minLength: field.minLength,
											validate: (value: string) => {
												if (field.validate) {
													if (watch(field.validate.equalValueField) != value) {
														return field.validate.message;
													}
												}
											},
											pattern: field.pattern && {
												value: new RegExp(field.pattern.value.slice(1, -1)),
												message: field.pattern.message
											}
										})}
									/>
								</AppLabel>
							);

						case 'checkbox':
							return (
								<AppLabel row>
									<AppCheckbox {...register(field.name)} />
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
