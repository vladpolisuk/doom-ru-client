import { FiLogOut } from 'react-icons/fi';
import AppSignOutButton from '../../../components/AppSignOutButton/AppSignOutButton';
import { useTranslation } from '../../../hooks/useTranslation';
import s from './Aside.module.scss';
import { AsideTabs } from './AsideTabs/AsideTabs';
import { ProfileCard } from './ProfileCard/ProfileCard';

export const Aside = () => {
	const me = useTranslation('me');

	const { text, title } = me.aside.logout;
	const tabs = me.aside.tabs;

	return (
		<main className={s.me_aside}>
			<ProfileCard />

			<hr className={s.me_aside_hr} />

			<AsideTabs>
				{tabs.map(({ name, title, url, Icon, id }) => (
					<AsideTabs.Item
						Icon={Icon}
						tabId={id}
						href={url}
						title={title}
						key={name}
						text={name}
					/>
				))}

				<hr className={s.me_aside_hr} />

				<AppSignOutButton
					resetStyles
					onlyARIA
					color='transparent'
					className={s.me_aside_logout}
					title={title}>
					<FiLogOut className={s.me_aside_logout_icon} />
					{text}
				</AppSignOutButton>
			</AsideTabs>
		</main>
	);
};
