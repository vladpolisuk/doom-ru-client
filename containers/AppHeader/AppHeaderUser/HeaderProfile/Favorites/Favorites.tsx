import React from 'react';
import AppButton from '../../../../../components/AppButton/AppButton';
import s from './Favorites.module.scss';
import { useTranslation } from 'next-i18next';
import { FaHeart } from 'react-icons/fa';

export const Favorites = () => {
	const { t } = useTranslation('header');

	const title = t('header_user_profile.favorites.title');

	return (
		<AppButton
			title={title}
			className='active--scale transparent hover--none'>
			<FaHeart className={s.header_favorites} />
		</AppButton>
	);
};
