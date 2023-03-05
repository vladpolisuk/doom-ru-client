import { useTranslation } from 'next-i18next';
import { FaHeart } from 'react-icons/fa';
import AppButton from '../../../../../components/AppButton/AppButton';
import s from './Favorites.module.scss';

export const Favorites = () => {
	const { t } = useTranslation('header');

	const title = t('header_user_profile.favorites.title');

	return (
		<AppButton
			title={title}
			color='none'
			className='active--scale'>
			<FaHeart className={s.header_favorites} />
		</AppButton>
	);
};
