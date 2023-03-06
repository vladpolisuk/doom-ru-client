import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import AppAlert from '../../../../components/AppAlert/AppAlert';
import AppButton from '../../../../components/AppButton/AppButton';
import AppCheckbox from '../../../../components/AppCheckbox/AppCheckbox';
import AppInput from '../../../../components/AppInput/AppInput';
import AppLabel from '../../../../components/AppLabel/AppLabel';
import AppModal from '../../../../components/AppModal/AppModal';
import { SendSignInFields } from '../../../../types/api/auth';
import { LocaleAuthSignInField } from '../../../../types/locales/auth';
import s from './HeaderAuth.module.scss';

export type SignInFields = SendSignInFields;

type Props = {
	setViewModal: (view: boolean) => void;
	onSubmit: (data: SignInFields) => void;
	loading: boolean;
	viewModal: boolean;
	error: string;
};

export const AuthSignIn: FC<Props> = memo(({ setViewModal, viewModal, error, loading, onSubmit }) => {
	const router = useRouter();
	const t = useTranslation('auth').t;
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm<SignInFields>();

	const title = t('auth_form.signin.title');
	const name = t('auth_form.signin.name');
	const haveAccount = t('auth_haveAccount');
	const fields = t('auth_form.fields', { returnObjects: true }) as LocaleAuthSignInField[];
	const cancel_title = t('auth_form.btn.signin.cancel.title');
	const cancel_label = t('auth_form.btn.signin.cancel.label');
	const submit_title = t('auth_form.btn.signin.submit.title');
	const submit_label = t('auth_form.btn.signin.submit.label');

	const submitBtnStyles = clsx(s.auth_modal_actions_submit, 'active--scale', 'transition');
	const cancelBtnStyles = clsx(s.auth_modal_actions_cancel, 'active--scale', 'transition');

	return (
		<AppModal
			view={viewModal}
			setView={setViewModal}>
			<AppModal.Header>
				<h1 className={s.auth_modal_headerLogo}>DOOM.RU</h1>
				<strong className={s.auth_modal_headerMethod}>{title}</strong>
			</AppModal.Header>

			<AppModal.Content>
				<form
					className={s.auth_modal_form}
					onSubmit={handleSubmit(onSubmit)}>
					{error && <AppAlert type='error'>{error}</AppAlert>}

					{fields
						.filter(field => field.page === name || field.page === 'both')
						.map(field => {
							switch (field.fieldType) {
								case 'input':
									return (
										<AppLabel
											key={`field_${field.name}`}
											errorMessage={errors[field.name]?.message}>
											<AppInput
												showPasswordButton={field.showPasswordButton}
												type={field.type}
												disabled={loading}
												invalid={field.name in errors}
												placeholder={field.title}
												className={s.auth_modal_form_input}
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
										<AppLabel
											row
											key={`field_${field.name}`}>
											<AppCheckbox
												disabled={loading}
												{...register(field.name)}
											/>
											<p>{field.title}</p>
										</AppLabel>
									);
							}
						})}

					<div className={s.auth_modal_actions}>
						<AppButton
							type='submit'
							title={submit_label}
							disabled={loading}
							loading={loading}
							className={submitBtnStyles}>
							{submit_title}
						</AppButton>

						<AppButton
							type='reset'
							color='transparent'
							onClick={() => setViewModal(false)}
							title={cancel_label}
							disabled={loading}
							className={cancelBtnStyles}>
							{cancel_title}
						</AppButton>
					</div>

					<a href={`/${router.locale}/auth`}>{haveAccount}</a>
					<AppModal.Close
						disabled={loading}
						onClick={() => setViewModal(false)}
					/>
				</form>
			</AppModal.Content>
		</AppModal>
	);
});

AuthSignIn.displayName = 'AuthSignIn';
