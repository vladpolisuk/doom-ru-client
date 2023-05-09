import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useState } from 'react';
import AppButton from '../../../../components/AppButton/AppButton';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import useAppSelector from '../../../../hooks/useAppSelector';
import { useTranslation } from '../../../../hooks/useTranslation';
import { setAppSignInView } from '../../../../store/app/actions';
import { appSignIn } from '../../../../store/app/requests';
import { getAppSignInView } from '../../../../store/app/selectors';
import { Locale } from '../../../../store/app/types';
import { AuthSignIn, SignInFields } from './AuthSignIn';
import s from './HeaderAuth.module.scss';

export const HeaderAuth = () => {
	const signInView = useAppSelector(getAppSignInView);
	const dispatch = useAppDispatch();
	const [formError, setFormError] = useState('');
	const [loading, setLoading] = useState(false);
	const header = useTranslation('header');
	const router = useRouter();

	const title = header.header_user_auth.signin.title;
	const text = header.header_user_auth.signin.name;
	const openModalBtnStyles = clsx('transition', 'active--scale');

	const onSubmit = async (data: SignInFields) => {
		const locale = router.query.lang as Locale;
		if (!locale) return;
		setLoading(true);
		const result = await appSignIn(data, locale);
		setLoading(false);
		if (!result.success) return setFormError(result.message);
		router.reload();
		dispatch(setAppSignInView(false));
	};

	const openModal = () => dispatch(setAppSignInView(true));

	const setViewModal = (view: boolean) => dispatch(setAppSignInView(view));

	return (
		<div className={s.authBox}>
			<AppButton
				onClick={openModal}
				disabled={signInView}
				className={openModalBtnStyles}
				title={title}>
				{text}
			</AppButton>

			<AuthSignIn
				error={formError}
				loading={loading}
				onSubmit={onSubmit}
				setViewModal={setViewModal}
				viewModal={signInView}
			/>
		</div>
	);
};
