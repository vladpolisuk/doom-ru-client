import { FaHeart } from 'react-icons/fa';
import AppButton from '../../../../../components/AppButton/AppButton';
import AppSkeleton from '../../../../../components/AppSkeleton/AppSkeleton';
import { useAppSelector } from '../../../../../hooks/store';
import { useTranslation } from '../../../../../hooks/useTranslation';
import locales from '../../../../../locales';
import { getAppUserLoading } from '../../../../../store/app/selectors';
import s from './Favorites.module.scss';

export const Favorites = () => {
	const userLoading = useAppSelector(getAppUserLoading);
	const header = useTranslation('header') as typeof locales.en.header;

	const title = header.header_user_profile.favorites.title;
	const skeleton = userLoading ? <AppSkeleton className={s.header_favoritesSkeleton} /> : undefined;

	return (
		<AppButton
			title={title}
			color='none'
			Skeleton={skeleton}
			className='active--scale'>
			<FaHeart className={s.header_favorites} />
		</AppButton>
	);
};
