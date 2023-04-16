import clsx from 'clsx';
import { Favorites } from './Favorites/Favorites';
import s from './HeaderProfile.module.scss';
import { NewRealty } from './NewRealty/NewRealty';
import { Notifications } from './Notifications/Notifications';
import { Profile } from './Profile/Profile';

export const HeaderProfile = () => {
	return (
		<ul className={clsx(s.header_user_nav, 'unlisted')}>
			<li className={s.header_user_nav_item}>
				<NewRealty />
			</li>

			<li className={s.header_user_nav_item}>
				<Notifications />
			</li>

			<li className={s.header_user_nav_item}>
				<Favorites />
			</li>

			<li className={s.header_user_nav_item}>
				<Profile />
			</li>
		</ul>
	);
};
