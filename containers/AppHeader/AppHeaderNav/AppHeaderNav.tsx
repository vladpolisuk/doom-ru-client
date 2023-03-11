import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import AppLink from '../../../components/AppLink/AppLink';
import { LocaleHeaderNavLink } from '../../../types/locales/header';
import s from './AppHeaderNav.module.scss';

const AppHeaderNav = () => {
	const { t } = useTranslation('header');

	const styles = clsx(s.header_nav_list_item, 'active--scale', 'transition');
	const navLabel = t('header_nav_label');
	const links: LocaleHeaderNavLink[] = t('header_nav_links', { returnObjects: true });

	const components = links.map((link: LocaleHeaderNavLink) => (
		<li
			key={link.name}
			aria-label={link.title}
			className={styles}>
			<AppLink
				resetStyles
				className={s.header_nav_list_item_link}
				title={link.title}
				href={link.url}>
				<span>{link.name}</span>
			</AppLink>
		</li>
	));

	return (
		<nav className={s.header_nav}>
			<ul
				aria-label={navLabel}
				className={s.header_nav_list}>
				{components}
			</ul>
		</nav>
	);
};

export default AppHeaderNav;
