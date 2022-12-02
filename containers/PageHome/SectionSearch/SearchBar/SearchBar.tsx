import { useTranslation } from 'next-i18next';
import { type } from 'os';
import React from 'react'
import { Filter, Sliders } from 'react-feather';
import { AppButton } from '../../../../components/AppButton/AppButton';
import { AppInput } from '../../../../components/AppInput/AppInput';
import s from './SearchBar.module.scss';

export const SearchBar = () => {
    const { t } = useTranslation("home");

    return (
        <div className={s.searchbar}>
            <AppInput
                type="search"
                translation="home"
                data-testid="home-search-input"
                className={s["searchbar--input"]}
                title="home_section_search_input.title"
                placeholder="home_section_search_input.placeholder" />

            <AppButton
                translation="home"
                title="home_section_search_filters.title"
                className={`${s["searchbar--filters"]} active_scale transition`}>
                <Sliders className={s["searchbar--filters_icon"]} />
                {t("home_section_search_filters.text")}
            </AppButton>

            <AppButton
                translation="home"
                title="home_section_search_button.title"
                className={`${s["searchbar--button"]} active_scale transition`}>
                {t("home_section_search_button.text")}
            </AppButton>
        </div>
    )
}
