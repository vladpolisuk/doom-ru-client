import { FC } from 'react';
import s from './AppHeader.module.scss';
import { AppHeaderLogo } from './AppHeaderLogo/AppHeaderLogo';
import { AppHeaderNav } from './AppHeaderNav/AppHeaderNav';

export const AppHeader: FC = () => {
    return (
        <header className={s.header}>
            <div className={s.header_ctr}>
                <AppHeaderLogo />
                <AppHeaderNav />
            </div>
        </header>
    )
};