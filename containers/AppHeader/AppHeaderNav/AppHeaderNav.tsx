import clsx from 'clsx';
import AppLink from '../../../components/AppLink/AppLink';
import { useTranslation } from '../../../hooks/useTranslation';
import locales from '../../../locales';
import s from './AppHeaderNav.module.scss';

const AppHeaderNav = () => {
	const header = useTranslation('header') as typeof locales.en.header;

	const styles = clsx(s.header_nav_list_item, 'active--scale', 'transition');
	const navLabel = header.header_nav_label;
	const links = header.header_nav_links;

	return (
		<nav className={s.header_nav}>
			<ul
				aria-label={navLabel}
				className={s.header_nav_list}>
				{links &&
					links.map(link => (
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
					))}
			</ul>
		</nav>
	);
};

export default AppHeaderNav;
