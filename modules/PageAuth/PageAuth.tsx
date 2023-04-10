import clsx from 'clsx';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { useAppDispatch } from '../../hooks/store';
import { useTranslation } from '../../hooks/useTranslation';
import { appSignUp, appVerify } from '../../store/app/requests';
import { Locale } from '../../store/app/types';
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
	const auth = useTranslation('auth');

	const onSubmit = async (data: SignUpFields) => {
		setLoading(true);

		const body: SendVerifyFields = {
			...data,
			bio: '',
			city: '',
			avatar: '',
			favorites: [],
			phone: ''
		};

		const newData = removeProperty<SendVerifyFields>(body, 'repeatPassword');
		const result = await appVerify(newData, router.query.lang as Locale);
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
		setFormError('');
		router.push(`/${router.query.lang}`);
	};

	const signupTitle = auth.auth_form.signup.title;
	const codeTitle = auth.auth_form.code.title;
	const codeLabel = auth.auth_form.code.label;

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
