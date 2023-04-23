import clsx from 'clsx';
import AppSkeleton from '../../../../components/AppSkeleton/AppSkeleton';
import { useAppSelector } from '../../../../hooks/store';
import { getAppUser, getAppUserLoading } from '../../../../store/app/selectors';
import { Favorites } from './Favorites/Favorites';
import s from './HeaderNav.module.scss';
import { NewRealty } from './NewRealty/NewRealty';
import { Notifications } from './Notifications/Notifications';

const array = [
	{ component: <NewRealty />, auth: true },
	{ component: <Notifications />, auth: true },
	{ component: <Favorites />, auth: false }
];

export const HeaderNav = () => {
	const userLoading = useAppSelector(getAppUserLoading);
	const user = useAppSelector(getAppUser);

	return (
		<ul className={clsx(s.header_user_nav, 'unlisted')}>
			{array.map(({ component, auth }, i) => (
				<li
					key={String(i)}
					className={s.header_user_nav_item}>
					{userLoading && !user.email && <AppSkeleton className={s.header_user_nav_item_skeleton} />}
					{!userLoading && user.email && component}
					{!userLoading && !user.email && !auth && component}
				</li>
			))}
		</ul>
	);
};
