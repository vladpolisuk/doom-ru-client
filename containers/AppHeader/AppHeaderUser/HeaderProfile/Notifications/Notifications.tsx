import { FaBell } from 'react-icons/fa';
import AppButton from '../../../../../components/AppButton/AppButton';
import { useTranslation } from '../../../../../hooks/useTranslation';
import s from './Notifications.module.scss';

export const Notifications = () => {
	const header = useTranslation('header');

	const title = header.header_user_profile.notifications.title;

	return (
		<AppButton
			title={title}
			color='none'
			className='active--scale'>
			<FaBell className={s.header_notifications} />
		</AppButton>
	);
};
