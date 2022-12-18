import { useTranslation } from 'next-i18next';
import React, { useState } from 'react'
import { AppButton } from '../../../../../components/AppButton/AppButton'
import { LocaleHomeSearchTab } from '../../../../../types/locales/home';
import s from './SearchBarTabs.module.scss';

export const SearchBarTabs = () => {
    const [tab, setTab] = useState(0);
    const { t } = useTranslation("home");

    const tabs: LocaleHomeSearchTab[] = t("home_section_search.search_tabs", { returnObjects: true });

    return (
        <ul className={`${s.searchbar_tabs} unlisted`}>
            {tabs.map(({ title, text }, i) => (
                <li key={text}>
                    <AppButton
                        title={title}
                        onClick={() => setTab(i)}
                        className={`${s["searchbar_tabs--item"]}`}>
                        {text}
                    </AppButton>
                </li>
            ))}

            <div
                style={{ left: `${80 * tab}px` }}
                className={s["searchbar_tabs--line"]}></div>
        </ul>
    )
}
