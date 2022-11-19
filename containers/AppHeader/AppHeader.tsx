import s from './AppHeader.module.scss';
import { AppHeaderLogo } from './AppHeaderLogo/AppHeaderLogo';
import { AppHeaderNav } from './AppHeaderNav/AppHeaderNav';
import { AppHeaderUser } from './AppHeaderUser/AppHeaderUser';

export const AppHeader = () => {
    return (
        <header className={s.header}>
            <div className={s.header_ctr}>
                <div className={s.header_ctr_static}>
                    <AppHeaderLogo />
                    <AppHeaderNav />
                </div>

                <AppHeaderUser />
            </div>
        </header>
    )
};