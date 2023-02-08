import s from './AppHeader.module.scss';
import { AppHeaderLogo } from './AppHeaderLogo/AppHeaderLogo';
import { AppHeaderNav } from './AppHeaderNav/AppHeaderNav';
import { AppHeaderUser } from './AppHeaderUser/AppHeaderUser';
import clsx from 'clsx';

export const AppHeader = () => {
	return (
		<header className={s.header}>
			<div className={clsx(s.header_container, 'container')}>
				<div className={s.header_nav}>
					<AppHeaderLogo />
					<AppHeaderNav />
				</div>

				<AppHeaderUser />
			</div>
		</header>
	);
};
