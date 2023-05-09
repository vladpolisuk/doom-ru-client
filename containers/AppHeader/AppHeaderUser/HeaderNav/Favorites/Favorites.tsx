import clsx from 'clsx';
import { FaHeart } from 'react-icons/fa';
import AppLink from '../../../../../components/AppLink/AppLink';
import useAppSelector from '../../../../../hooks/useAppSelector';
import { useTranslation } from '../../../../../hooks/useTranslation';
import { getAppUserFavorites } from '../../../../../store/app/selectors';
import s from './Favorites.module.scss';

export const Favorites = () => {
	const favorites = useAppSelector(getAppUserFavorites);
	const header = useTranslation('header');

	const title = header.header_user_profile.favorites.title;
	const styles = clsx(s.favorites, 'transition', 'active--scale');

	return (
		<AppLink
			title={title}
			href='/me/favorites'
			className={styles}>
			<FaHeart className={s.favorites_icon} />
			{favorites.length > 0 && <span className={s.favorites_count}>{favorites.length}</span>}
		</AppLink>
	);
};
