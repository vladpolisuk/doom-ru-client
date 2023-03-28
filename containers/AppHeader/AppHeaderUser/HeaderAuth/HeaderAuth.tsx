import clsx from 'clsx';
import { useState } from 'react';
import AppButton from '../../../../components/AppButton/AppButton';
import { useAppDispatch } from '../../../../hooks/store';
import { useTranslation } from '../../../../hooks/useTranslation';
import locales from '../../../../locales';
import { appSignIn } from '../../../../store/app/requests';
import { AuthSignIn, SignInFields } from './AuthSignIn';
import s from './HeaderAuth.module.scss';

export const HeaderAuth = () => {
	const [viewModal, setViewModal] = useState(false);
	const dispatch = useAppDispatch();
	const [formError, setFormError] = useState('');
	const [loading, setLoading] = useState(false);
	const header = useTranslation('header') as typeof locales.en.header;

	const title = header.header_user_auth.signin.title;
	const text = header.header_user_auth.signin.name;
	const openModalBtnStyles = clsx('transition', 'active--scale');

	const onSubmit = async (data: SignInFields) => {
		setLoading(true);
		const result = await dispatch(appSignIn(data));
		setLoading(false);
		if (result.success) return setViewModal(false);
		setFormError(result.message);
	};

	const openModal = () => setViewModal(true);

	return (
		<div className={s.authBox}>
			<AppButton
				onClick={openModal}
				disabled={viewModal}
				className={openModalBtnStyles}
				title={title}>
				{text}
			</AppButton>

			<AuthSignIn
				error={formError}
				loading={loading}
				onSubmit={onSubmit}
				setViewModal={setViewModal}
				viewModal={viewModal}
			/>
		</div>
	);
};
