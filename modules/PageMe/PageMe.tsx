import clsx from 'clsx';
import { FiLogOut } from 'react-icons/fi';
import AppSignOutButton from '../../components/AppSignOutButton/AppSignOutButton';
import { useTranslation } from '../../hooks/useTranslation';
import locales from '../../locales';
import { Aside } from './Aside/Aside';
import { ProfileCard } from './AsideProfileCard/AsideProfileCard';
import s from './PageMe.module.scss';

const PageMe = () => {
	const me = useTranslation('me') as typeof locales.en.me;
	const { text, title } = me.aside.logout;
	const styles = clsx(s.me_container, 'container');

	return (
		<div className={s.me}>
			<div className={styles}>
				<main
					id='main'
					className={s.me_aside}>
					<ProfileCard />

					<hr className={s.me_hr} />

					<Aside />

					<hr className={s.me_hr} />

					<AppSignOutButton
						resetStyles
						onlyARIA
						color='transparent'
						className={s.me_logout}
						title={title}>
						<FiLogOut className={s.me_logout_icon} />
						{text}
					</AppSignOutButton>
				</main>
			</div>
		</div>
	);
};

export default PageMe;
