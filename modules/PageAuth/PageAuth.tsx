import { Fragment, useState } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { AuthCode } from './AuthCode';
import { AuthSignUp, SignUpFields } from './AuthSignUp';
import s from './PageAuth.module.scss';
import { useRouter } from 'next/router';

type Step = 'signup' | 'code';

const PageAuth = () => {
	const router = useRouter();
	const [step, setStep] = useState<Step>('code');
	const t = useTranslation('auth').t;

	const onSubmit = (data: SignUpFields) => {
		console.log(data);
		setStep('code');
	};

	const onSubmitCode = (code: number) => {
		console.log(code);
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
							<h1 className={s.auth_header_logo}>DOOM.RU</h1>{' '}
							<strong className={s.auth_header_method}>{signupTitle}</strong>
						</Fragment>
					)}

					{step === 'code' && (
						<Fragment>
							<h1 className={s.auth_header_title}>{codeTitle}</h1>{' '}
							<p className={s.auth_header_description}>{codeLabel}</p>
						</Fragment>
					)}
				</div>

				{step === 'signup' && <AuthSignUp onSubmit={onSubmit} />}
				{step === 'code' && <AuthCode onSubmit={onSubmitCode} />}
			</div>
		</main>
	);
};

export default PageAuth;
