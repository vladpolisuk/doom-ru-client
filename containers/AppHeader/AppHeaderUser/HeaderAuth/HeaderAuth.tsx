import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import AppButton from '../../../../components/AppButton/AppButton';
import { useAppDispatch } from '../../../../hooks/store';
import { appSignIn } from '../../../../store/app/requests';
import { AuthSignIn, SignInFields } from './AuthSignIn';
import s from './HeaderAuth.module.scss';

export const HeaderAuth = () => {
	const [viewModal, setViewModal] = useState(false);
	const dispatch = useAppDispatch();
	const [formError, setFormError] = useState('');
	const [loading, setLoading] = useState(false);
	const { t } = useTranslation('header');

	const title = t('header_user_auth.signin.title');
	const text = t('header_user_auth.signin.name');

	const openModalBtnStyles = clsx('transition', 'active--scale');

	const onSubmit = async (data: SignInFields) => {
		setLoading(true);
		const result = await dispatch(appSignIn(data));
		setLoading(false);
		if (result.success) return setViewModal(false);
		setFormError(result.message);
	};

	return (
		<div className={s.authBox}>
			<AppButton
				onClick={() => setViewModal(true)}
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
