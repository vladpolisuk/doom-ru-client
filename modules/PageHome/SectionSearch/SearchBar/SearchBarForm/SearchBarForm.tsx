import React from 'react'
import { useTranslation } from 'next-i18next'
import { AppButton } from '../../../../../components/AppButton/AppButton'
import { AppInput } from '../../../../../components/AppInput/AppInput'
import s from "./SearchBarForm.module.scss";
import clsx from 'clsx';
import { FaSearch } from 'react-icons/fa';
import { FiSearch, FiSliders } from 'react-icons/fi';

export const SearchBarForm = () => {
    const { t } = useTranslation("home");

    const inputTitle = t("home_section_search.search_input.title");
    const inputPlaceholder = t("home_section_search.search_input.placeholder");
    const filtersTitle = t("home_section_search.search_filters.title");
    const filtersStyles = clsx(s.sectionSearch_searchBar_form_filters, "active--scale", "transition");
    const filtersText = t("home_section_search.search_filters.text");
    const submitTitle = t("home_section_search.search_button.title");
    const submitStyles = clsx(s.sectionSearch_searchBar_form_button, "active--scale", "transition");
    const submitText = t("home_section_search.search_button.text");

    return (
        <form className={s.sectionSearch_searchBar_form}>
            <AppInput
                type="search"
                title={inputTitle}
                placeholder={inputPlaceholder}
                data-testid="home-search-input"
                iconLeft={<FiSearch className={s.sectionSearch_searchBar_form_inputIcon} />}
                className={s.sectionSearch_searchBar_form_input} />

            <AppButton
                title={filtersTitle}
                className={filtersStyles}>
                <FiSliders className={s.sectionSearch_searchBar_form_filtersIcon} />
                {filtersText}
            </AppButton>

            <AppButton
                title={submitTitle}
                className={submitStyles}>
                {submitText}
            </AppButton>
        </form>
    )
}
