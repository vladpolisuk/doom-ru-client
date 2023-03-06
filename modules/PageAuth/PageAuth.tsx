import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { useAppDispatch } from '../../hooks/store';
import { appSignUp, appVerify } from '../../store/app/actions';
import { SendVerifyFields } from '../../types/api/auth';
import removeProperty from '../../utils/removeProperty';
import { AuthCode } from './AuthCode';
import { AuthSignUp, SignUpFields } from './AuthSignUp';
import s from './PageAuth.module.scss';

type Step = 'signup' | 'code';

const PageAuth = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const [step, setStep] = useState<Step>('signup');
	const [formError, setFormError] = useState('');
	const [loading, setLoading] = useState(false);
	const [fields, setFields] = useState<SendVerifyFields | null>(null);
	const t = useTranslation('auth').t;

	const onSubmit = async (data: SignUpFields) => {
		setLoading(true);

		const body: SendVerifyFields = {
			...data,
			bio: '',
			city: '',
			avatar: ''
		};

		const newData = removeProperty<SendVerifyFields>(body, 'repeatPassword');
		const result = await appVerify(newData);
		setLoading(false);
		if (!result.success) return setFormError(result.message);
		setFormError('');
		setFields(newData);
		setStep('code');
	};

	const onSubmitWithCode = async (code: number) => {
		setLoading(true);
		if (!fields) return;
		const newData = { ...fields, code };
		const result = await dispatch(appSignUp(newData));
		setLoading(false);
		if (!result.success) return setFormError(result.message);
		router.push(`/${router.locale}`);
	};

	const signupTitle = t('auth_form.signup.title');
	const codeTitle = t('auth_form.code.title');
	const codeLabel = t('auth_form.code.label');

	const styles = clsx(s.authBox, 'container');

	return (
		<main
			id='main'
			className={s.auth}>
			<div className={styles}>
				<div className={s.auth_header}>
					{step === 'signup' && (
						<Fragment>
							<h1 className={s.auth_header_logo}>DOOM.RU</h1>
							<strong className={s.auth_header_method}>{signupTitle}</strong>
						</Fragment>
					)}

					{step === 'code' && (
						<Fragment>
							<h1 className={s.auth_header_title}>{codeTitle}</h1>
							<p className={s.auth_header_description}>{codeLabel}</p>
						</Fragment>
					)}
				</div>

				{step === 'signup' && (
					<AuthSignUp
						error={formError}
						loading={loading}
						onSubmit={onSubmit}
					/>
				)}

				{step === 'code' && (
					<AuthCode
						error={formError}
						loading={loading}
						onSubmit={onSubmitWithCode}
					/>
				)}
			</div>
		</main>
	);
};

export default PageAuth;
