import clsx from 'clsx';
import AppSkeleton from '../../../../components/AppSkeleton/AppSkeleton';
import { useAppSelector } from '../../../../hooks/store';
import { getAppUserLoading } from '../../../../store/app/selectors';
import { Favorites } from './Favorites/Favorites';
import s from './HeaderProfile.module.scss';
import { NewRealty } from './NewRealty/NewRealty';
import { Notifications } from './Notifications/Notifications';
import { Profile } from './Profile/Profile';

const array = [
	{ component: <NewRealty /> },
	{ component: <Notifications /> },
	{ component: <Favorites /> },
	{ component: <Profile /> }
];

export const HeaderProfile = () => {
	const userLoading = useAppSelector(getAppUserLoading);

	return (
		<ul className={clsx(s.header_user_nav, 'unlisted')}>
			{array.map(({ component }, i) => (
				<li
					key={String(i)}
					className={s.header_user_nav_item}>
					{userLoading && <AppSkeleton className={s.header_user_nav_item_skeleton} />}
					{!userLoading && component}
				</li>
			))}
		</ul>
	);
};
