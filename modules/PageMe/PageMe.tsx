import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { FiLogOut } from 'react-icons/fi';
import { AppSignOutButton } from '../../components/AppSignOutButton/AppSignOutButton';
import { LocaleMeAsideLogOut } from '../../types/locales/me';
import { Aside } from './Aside/Aside';
import { ProfileCard } from './AsideProfileCard/AsideProfileCard';
import s from './PageMe.module.scss';

export const PageMe = () => {
	const { t } = useTranslation('me');
	const { text, title }: LocaleMeAsideLogOut = t('aside.logout', { returnObjects: true });

	const styles = clsx(s.me_container, 'container');

	return (
		<div className={s.me}>
			<div className={styles}>
				<div className={s.me_aside}>
					<ProfileCard />

					<hr className={s.me_hr} />

					<Aside />

					<hr className={s.me_hr} />

					<AppSignOutButton
						resetStyles
						onlyARIA
						className={s.me_logout}
						title={title}>
						<FiLogOut className={s.me_logout_icon} />
						{text}
					</AppSignOutButton>
				</div>
			</div>
		</div>
	);
};
