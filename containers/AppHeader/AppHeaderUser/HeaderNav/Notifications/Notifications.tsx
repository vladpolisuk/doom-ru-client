import clsx from 'clsx';
import { FaBell } from 'react-icons/fa';
import AppLink from '../../../../../components/AppLink/AppLink';
import { useTranslation } from '../../../../../hooks/useTranslation';
import s from './Notifications.module.scss';

export const Notifications = () => {
	const header = useTranslation('header');

	const styles = clsx(s.notifications, 'transition', 'active--scale');
	const title = header.header_user_profile.notifications.title;

	return (
		<AppLink
			title={title}
			href='/me/notifications'
			className={styles}>
			<FaBell className={s.notifications_icon} />
		</AppLink>
	);
};
