import { useAppSelector } from '../../../hooks/useSelector';
import { getAppUser } from '../../../store/app/selectors';
import s from './AppHeaderUser.module.scss';
import { HeaderAuth } from './HeaderAuth/HeaderAuth';
import { HeaderProfile } from './HeaderProfile/HeaderProfile';

export const AppHeaderUser = () => {
    const user = useAppSelector(getAppUser);

    const component = user
        ? <HeaderProfile />
        : <HeaderAuth />

    return (
        <div className={s.header_ctr_user}>
            {component}
        </div>
    )
}
