import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import s from './SectionSearch.module.scss';

export const SectionSearch: FC = () => {
    const { t } = useTranslation("home");

    return (
        <section
            id="section-search"
            className={s.section_search}>
            <div className={s.section_search_wallpaper}></div>
            <div className={s.section_search_content}>
                <h1 className={s["section_search_content--title"]}>
                    {t("home_section_search_title")}
                </h1>

                <SearchBar />
            </div>
        </section>
    )
}
