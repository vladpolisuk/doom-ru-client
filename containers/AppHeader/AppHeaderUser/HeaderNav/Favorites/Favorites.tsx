import { FaHeart } from 'react-icons/fa';
import AppButton from '../../../../../components/AppButton/AppButton';
import { useAppSelector } from '../../../../../hooks/store';
import { useTranslation } from '../../../../../hooks/useTranslation';
import { getAppUserFavorites } from '../../../../../store/app/selectors';
import s from './Favorites.module.scss';

export const Favorites = () => {
	const favorites = useAppSelector(getAppUserFavorites);
	const header = useTranslation('header');

	const title = header.header_user_profile.favorites.title;

	return (
		<AppButton
			title={title}
			color='none'
			className='active--scale'>
			<FaHeart className={s.header_favorites} />
			{favorites.length > 0 && <span className={s.header_favorites_count}>{favorites.length}</span>}
		</AppButton>
	);
};
