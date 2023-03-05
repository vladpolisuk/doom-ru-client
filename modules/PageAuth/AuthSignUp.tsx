import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import AppButton from '../../components/AppButton/AppButton';
import AppCheckbox from '../../components/AppCheckbox/AppCheckbox';
import AppInput from '../../components/AppInput/AppInput';
import AppLabel from '../../components/AppLabel/AppLabel';
import { LocaleAuthField } from '../../types/locales/auth';
import s from './PageAuth.module.scss';

export type SignUpFields = {
	email: string;
	password: string;
	name: string;
	secondName: string;
	repeatPassword: string;
	remember?: boolean;
};

type Props = {
	onSubmit: (data: SignUpFields) => void;
};

export const AuthSignUp: FC<Props> = ({ onSubmit }) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<SignUpFields>();
	const t = useTranslation('auth').t;

	const name = t('auth_form.signup.name');
	const fields = t('auth_form.fields', { returnObjects: true }) as LocaleAuthField[];
	const submit_title = t('auth_form.btn.signup.submit.title');
	const submit_label = t('auth_form.btn.signup.submit.label');

	const submitBtnStyles = clsx(s.auth_form_actions_submit, 'active--scale', 'transition');

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={s.auth_form}>
			{fields
				.filter(field => field.page === name || field.page === 'both')
				.map(field => {
					switch (field.fieldType) {
						case 'input':
							return (
								<AppLabel errorMessage={errors[field.name]?.message}>
									<AppInput
										onlyARIA
										showPasswordButton={field.showPasswordButton}
										key={`signup_${field.name}`}
										type={field.type}
										title={field.label}
										placeholder={field.title}
										invalid={field.name in errors}
										className={s.auth_form_input}
										{...register(field.name, {
											required: field.required,
											minLength: field.minLength,
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
					title={submit_label}
					className={submitBtnStyles}>
					{submit_title}
				</AppButton>
			</div>
		</form>
	);
};
