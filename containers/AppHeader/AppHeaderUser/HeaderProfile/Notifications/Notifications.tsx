import { useTranslation } from 'next-i18next';
import { FaBell } from 'react-icons/fa';
import { AppButton } from '../../../../../components/AppButton/AppButton';
import s from './Notifications.module.scss';

export const Notifications = () => {
	const { t } = useTranslation('header');

	const title = t('header_user_profile.notifications.title');

	return (
		<AppButton
			title={title}
			className='active--scale transparent hover--none'>
			<FaBell className={s.header_notifications} />
		</AppButton>
	);
};
