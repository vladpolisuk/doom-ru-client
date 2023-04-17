import clsx from 'clsx';
import AppLink from '../../../components/AppLink/AppLink';
import { useTranslation } from '../../../hooks/useTranslation';
import s from './AppHeaderNav.module.scss';

const AppHeaderNav = () => {
	const header = useTranslation('header');

	const navLabel = header.header_nav_label;
	const links = header.header_nav_links;
	const itemStyles = clsx(s.header_nav_list_item, 'active--scale', 'transition');

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
							className={itemStyles}>
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
