import { FaHeart } from 'react-icons/fa';
import AppButton from '../../../../../components/AppButton/AppButton';
import AppSkeleton from '../../../../../components/AppSkeleton/AppSkeleton';
import { useAppSelector } from '../../../../../hooks/store';
import { useTranslation } from '../../../../../hooks/useTranslation';
import { getAppUserLoading, getAppUserFavorites } from '../../../../../store/app/selectors';
import s from './Favorites.module.scss';

export const Favorites = () => {
	const userLoading = useAppSelector(getAppUserLoading);
	const favorites = useAppSelector(getAppUserFavorites)
	const header = useTranslation('header');

	const title = header.header_user_profile.favorites.title;
	const skeleton = userLoading ? <AppSkeleton className={s.header_favoritesSkeleton} /> : undefined;

	return (
		<AppButton
			title={title}
			color='none'
			Skeleton={skeleton}
			className='active--scale'>
			<FaHeart className={s.header_favorites} />
			{favorites?.length > 0 && (
				<span className={s.header_favorites_count}>
					{favorites?.length}
				</span>
			)}
		</AppButton>
	);
};
