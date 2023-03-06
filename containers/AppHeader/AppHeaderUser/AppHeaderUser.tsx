import { useAppSelector } from '../../../hooks/store';
import { getAppUser, getAppUserLoading } from '../../../store/app/selectors';
import s from './AppHeaderUser.module.scss';
import { HeaderAuth } from './HeaderAuth/HeaderAuth';
import { HeaderProfile } from './HeaderProfile/HeaderProfile';

const AppHeaderUser = () => {
	const userLoading = useAppSelector(getAppUserLoading);
	const user = useAppSelector(getAppUser);
	const component = !user && !userLoading ? <HeaderAuth /> : <HeaderProfile />;
	return <div className={s.header_user}>{component}</div>;
};

export default AppHeaderUser;
