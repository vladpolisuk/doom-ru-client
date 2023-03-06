import { useTranslation } from 'next-i18next';
import { FaBell } from 'react-icons/fa';
import AppButton from '../../../../../components/AppButton/AppButton';
import AppSkeleton from '../../../../../components/AppSkeleton/AppSkeleton';
import { useAppSelector } from '../../../../../hooks/store';
import { getAppUserLoading } from '../../../../../store/app/selectors';
import s from './Notifications.module.scss';

export const Notifications = () => {
	const userLoading = useAppSelector(getAppUserLoading);
	const { t } = useTranslation('header');

	const title = t('header_user_profile.notifications.title');
	const skeleton = userLoading ? <AppSkeleton className={s.header_notificationsSkeleton} /> : undefined;

	return (
		<AppButton
			title={title}
			color='none'
			Skeleton={skeleton}
			className='active--scale'>
			<FaBell className={s.header_notifications} />
		</AppButton>
	);
};
