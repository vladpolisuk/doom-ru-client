import AppSkeleton from '../../../components/AppSkeleton/AppSkeleton';
import useAppSelector from '../../../hooks/useAppSelector';
import { getAppUser, getAppUserLoading } from '../../../store/app/selectors';
import s from './AppHeaderUser.module.scss';
import { HeaderAuth } from './HeaderAuth/HeaderAuth';
import { HeaderNav } from './HeaderNav/HeaderNav';
import { HeaderProfile } from './HeaderProfile/HeaderProfile';

const AppHeaderUser = () => {
	const userLoading = useAppSelector(getAppUserLoading);
	const user = useAppSelector(getAppUser);

	return (
		<div className={s.header_user}>
			<HeaderNav />
			{userLoading && !user.email && <AppSkeleton className={s.header_userSkeleton} />}
			{!userLoading && !user.email && <HeaderAuth />}
			{!userLoading && user.email && <HeaderProfile />}
		</div>
	);
};

export default AppHeaderUser;
