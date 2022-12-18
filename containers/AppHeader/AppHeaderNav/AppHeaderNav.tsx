import { useTranslation } from 'next-i18next';
import { AppLink } from '../../../components/AppLink/AppLink';
import { LocaleHeaderNavLink } from '../../../types/locales/header';
import s from './AppHeaderNav.module.scss';

export const AppHeaderNav = () => {
    const { t } = useTranslation("header");

    const links: LocaleHeaderNavLink[] = t("header_nav_links", { returnObjects: true });

    return (
        <nav className={s.header_ctr_nav}>
            <ul
                aria-label="Site navigation"
                className={s.header_ctr_nav_list}>
                {links.map((link: LocaleHeaderNavLink) => (
                    <li key={link.name}
                        aria-label={link.title}
                        className={`${s.header_ctr_nav_list_item} active_scale transition`}>
                        <AppLink
                            translation='header'
                            className={s.header_ctr_nav_list_item_link}
                            title={link.title}
                            href={link.url}>
                            <span>{link.name}</span>
                        </AppLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
