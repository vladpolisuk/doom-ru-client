import clsx from 'clsx';
import AppAvatar from '../../../../../components/AppAvatar/AppAvatar';
import AppLink from '../../../../../components/AppLink/AppLink';
import AppSkeleton from '../../../../../components/AppSkeleton/AppSkeleton';
import { useAppSelector } from '../../../../../hooks/store';
import { useTranslation } from '../../../../../hooks/useTranslation';
import locales from '../../../../../locales';
import { getAppUser, getAppUserLoading } from '../../../../../store/app/selectors';
import s from './Profile.module.scss';

export const Profile = () => {
	const user = useAppSelector(getAppUser);
	const userLoading = useAppSelector(getAppUserLoading);
	const header = useTranslation('header') as typeof locales.en.header;

	const title = header.header_user_profile.profile.title;
	const styles = clsx(s.header_profile, 'active--scale', 'transparent');
	const skeleton = userLoading ? <AppSkeleton className={s.header_profileSkeleton} /> : undefined;

	return (
		<AppLink
			href='/me'
			title={title}
			onlyARIA
			className={styles}>
			<AppAvatar
				Skeleton={skeleton}
				src={user?.avatar}
				alt={title}
			/>
		</AppLink>
	);
};
