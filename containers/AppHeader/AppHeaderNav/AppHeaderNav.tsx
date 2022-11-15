import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';
import { AppLink } from '../../../components/AppLink/AppLink';
import s from '../AppHeader.module.scss';

interface Link {
    name: string;
    url: string;
    title: string;
}

export const AppHeaderNav = () => {
    const { t } = useTranslation("header");

    const t_links = t("header_nav_links", { returnObjects: true }) as Link[];

    return (
        <nav className={s.header_ctr_nav}>
            <ul
                aria-label="Site navigation"
                className={s.header_ctr_nav_list}>
                {t_links.map((link: Link) => (
                    <li key={link.name}
                        aria-label={link.title}
                        className={`${s.header_ctr_nav_list_item} active_scale transition`}>
                        <AppLink
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
