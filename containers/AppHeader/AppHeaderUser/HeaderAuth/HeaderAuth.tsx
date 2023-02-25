import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import AppButton from '../../../../components/AppButton/AppButton';
import { AuthSignIn, SignInFields } from './AuthSignIn';
import s from './HeaderAuth.module.scss';

export const HeaderAuth = () => {
	const [viewModal, setViewModal] = useState(false);
	const { t } = useTranslation('header');

	const onOpen = () => setViewModal(true);

	const onSubmit = (data: SignInFields) => console.log(data);

	const title = t('header_user_auth.signin.title');
	const text = t('header_user_auth.signin.name');

	const openModalBtnStyles = clsx('transition', 'active--scale');

	return (
		<div className={s.authBox}>
			<AppButton
				onClick={onOpen}
				className={openModalBtnStyles}
				title={title}>
				{text}
			</AppButton>

			<AuthSignIn
				onSubmit={onSubmit}
				setViewModal={setViewModal}
				viewModal={viewModal}
			/>
		</div>
	);
};
