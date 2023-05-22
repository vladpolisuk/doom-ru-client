import clsx from 'clsx';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa';
import AppAlert from '../../../../components/AppAlert/AppAlert';
import AppButton from '../../../../components/AppButton/AppButton';
import AppInput from '../../../../components/AppInput/AppInput';
import AppInputCode from '../../../../components/AppInputCode/AppInputCode';
import AppLabel from '../../../../components/AppLabel/AppLabel';
import { useTranslation } from '../../../../hooks/useTranslation';
import { appResendVerify, appVerifyUser } from '../../../../store/app/requests';
import { Locale } from '../../../../store/app/types';
import { Fields } from '../PageMeProfile';
import s from './ProfileForm.module.scss';

interface Props {
	success: string;
	loading: boolean;
	error: string;
	submit: (fields: Fields) => void;
	form: UseFormReturn<Fields, any>;
	isActivated: boolean;
}

type Field = keyof Fields;

export const ProfileForm: FC<Props> = ({ error, isActivated, success, loading, form, submit }) => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = form;
	const t = useTranslation('me');
	const [verifyLoading, setVerifyLoading] = useState(false);
	const [viewVerifyEmail, setViewVerifyEmail] = useState(false);
	const [codeSuccess, setCodeSuccess] = useState('');
	const [codeError, setCodeError] = useState('');
	const router = useRouter();

	const onSubmitCode = async (code: number) => {
		setVerifyLoading(true);
		const locale = router.query.lang as Locale;
		const response = await appVerifyUser(code, locale);
		setVerifyLoading(false);

		if (response.success) {
			setCodeError('');
			setCodeSuccess(response.message);
		} else {
			setCodeSuccess('');
			setCodeError(response.message);
		}
	};

	const onResendVerify = async () => {
		setVerifyLoading(true);
		const locale = router.query.lang as Locale;
		await appResendVerify(locale);
		setVerifyLoading(false);
	};

	const onOpenVerifyEmail = () => {
		setViewVerifyEmail(true);
	};

	const btnStyles = clsx(s.me_profile_form_btn, 'active--scale', 'transition');
	const verifyEmailBtnStyles = clsx(s.me_profile_form_btnVerify, 'active--scale', 'transition');
	const fields = t.me_profile.form.fields;
	const submitBtnTitle = t.me_profile.form.btn.submit.title;
	const submitBtnLabel = t.me_profile.form.btn.submit.label;
	const verifyEmailBtnLabel = t.me_profile.form.btn.code.label;
	const verifyEmailBtnTitle = t.me_profile.form.btn.code.title;
	const submitCodeAgainBtnTitle = t.me_profile.form.btn.code.again.title;
	const submitCodeAgainBtnLabel = t.me_profile.form.btn.code.again.label;

	return (
		<form
			className={s.me_profile_form}
			onSubmit={handleSubmit(submit)}>
			{success && <AppAlert type='success'>{success}</AppAlert>}
			{error && <AppAlert type='error'>{error}</AppAlert>}

			{fields.map(field => {
				switch (field.fieldType) {
					case 'input':
						return (
							<AppLabel
								key={`profile_${field.name}`}
								errorMessage={errors[field.name as Field]?.message}>
								<AppInput
									onlyARIA
									disabled={loading}
									type={field.type}
									title={field.label}
									autoCorrect='on'
									placeholder={field.title}
									invalid={field.name in errors}
									className={s.me_profile_form_input}
									autoComplete={field.autoComplete}
									{...register(field.name as Field, {
										required: field.required,
										minLength: field.minLength,
										pattern: field.pattern && {
											value: field.pattern.value,
											message: field.pattern.message
										}
									})}
								/>

								{!isActivated && field.name === 'email' && (
									<>
										{!viewVerifyEmail && (
											<AppButton
												title={verifyEmailBtnLabel}
												disabled={verifyLoading}
												onClick={onOpenVerifyEmail}
												className={verifyEmailBtnStyles}
												color='none'>
												{verifyEmailBtnTitle}
											</AppButton>
										)}

										{viewVerifyEmail && codeSuccess && (
											<div className={s.me_profile_form_verify}>
												<FaCheck size={32} />
												<p>{codeSuccess}</p>
											</div>
										)}

										{viewVerifyEmail && !codeSuccess && (
											<div className={s.me_profile_form_verify}>
												{codeError && <AppAlert type='error'>{codeError}</AppAlert>}

												<AppInputCode
													disabled={verifyLoading}
													submit={onSubmitCode}
													codeLength={6}
													className={s.me_profile_form_inputVerify}
												/>

												<AppButton
													title={submitCodeAgainBtnLabel}
													disabled={verifyLoading}
													onClick={onResendVerify}
													className={verifyEmailBtnStyles}
													color='none'>
													{submitCodeAgainBtnTitle}
												</AppButton>
											</div>
										)}
									</>
								)}
							</AppLabel>
						);

					case 'textarea':
						return (
							<AppLabel
								key={`profile_${field.name}`}
								errorMessage={errors[field.name as Field]?.message}>
								<AppInput
									onlyARIA
									as='textarea'
									disabled={loading}
									type={field.type}
									title={field.label}
									autoCorrect='on'
									placeholder={field.title}
									invalid={field.name in errors}
									className={s.me_profile_form_textarea}
									autoComplete={field.autoComplete}
									{...register(field.name as Field)}
								/>
							</AppLabel>
						);
				}
			})}

			<AppButton
				onlyARIA
				title={submitBtnLabel}
				loading={loading}
				disabled={loading}
				className={btnStyles}>
				{submitBtnTitle}
				{!loading && <FaCheck />}
			</AppButton>
		</form>
	);
};
