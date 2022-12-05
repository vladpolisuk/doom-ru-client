import React from 'react'
import { useTranslation } from 'next-i18next'
import { Search, Sliders } from 'react-feather'
import { AppButton } from '../../../../../components/AppButton/AppButton'
import { AppInput } from '../../../../../components/AppInput/AppInput'
import s from "./SearchBarForm.module.scss";

export const SearchBarForm = () => {
    const { t } = useTranslation("home");

    return (
        <form className={s.searchbar_form}>
            <AppInput
                type="search"
                translation="home"
                iconLeft={<Search className={s["searchbar_form--input_icon"]} />}
                data-testid="home-search-input"
                className={s["searchbar_form--input"]}
                title="home_section_search.search_input.title"
                placeholder="home_section_search.search_input.placeholder" />

            <AppButton
                translation="home"
                title="home_section_search.search_filters.title"
                className={`${s["searchbar_form--filters"]} active_scale transition`}>
                <Sliders className={s["searchbar_form--filters_icon"]} />
                {t("home_section_search.search_filters.text")}
            </AppButton>

            <AppButton
                translation="home"
                title="home_section_search.search_button.title"
                className={`${s["searchbar_form--button"]} active_scale transition`}>
                {t("home_section_search.search_button.text")}
            </AppButton>
        </form>
    )
}
