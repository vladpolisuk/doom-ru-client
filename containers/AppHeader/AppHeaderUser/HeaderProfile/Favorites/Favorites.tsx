import { useTranslation } from 'next-i18next';
import { FaHeart } from 'react-icons/fa';
import AppButton from '../../../../../components/AppButton/AppButton';
import AppSkeleton from '../../../../../components/AppSkeleton/AppSkeleton';
import { useAppSelector } from '../../../../../hooks/store';
import { getAppUserLoading } from '../../../../../store/app/selectors';
import s from './Favorites.module.scss';

export const Favorites = () => {
	const { t } = useTranslation('header');
	const userLoading = useAppSelector(getAppUserLoading);

	const title = t('header_user_profile.favorites.title');
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
