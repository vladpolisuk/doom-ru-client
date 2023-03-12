import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FiLogOut } from 'react-icons/fi';
import AppSignOutButton from '../../components/AppSignOutButton/AppSignOutButton';
import { useAppSelector } from '../../hooks/store';
import { getAppUser } from '../../store/app/selectors';
import { LocaleMeAsideLogOut } from '../../types/locales/me';
import { Aside } from './Aside/Aside';
import { ProfileCard } from './AsideProfileCard/AsideProfileCard';
import s from './PageMe.module.scss';

const PageMe = () => {
	const user = useAppSelector(getAppUser);
	const router = useRouter();
	const { t } = useTranslation('me');
	const { text, title }: LocaleMeAsideLogOut = t('aside.logout', { returnObjects: true });
	const styles = clsx(s.me_container, 'container');

	useEffect(() => {
		if (!user) router.replace(`/${router.locale}`);
	}, [router, user]);

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
