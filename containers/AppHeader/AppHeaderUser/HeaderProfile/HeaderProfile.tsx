import clsx from 'clsx';
import AppAvatar from '../../../../components/AppAvatar/AppAvatar';
import AppLink from '../../../../components/AppLink/AppLink';
import useAppSelector from '../../../../hooks/useAppSelector';
import { useTranslation } from '../../../../hooks/useTranslation';
import { getAppUser } from '../../../../store/app/selectors';
import s from './HeaderProfile.module.scss';

export const HeaderProfile = () => {
	const user = useAppSelector(getAppUser);
	const header = useTranslation('header');

	const title = header.header_user_profile.profile.title;
	const styles = clsx(s.header_profile, 'active--scale', 'transparent');

	return (
		<AppLink
			href='/me'
			title={title}
			onlyARIA
			className={styles}>
			<AppAvatar
				src={user.avatar}
				alt={title}
			/>
		</AppLink>
	);
};
