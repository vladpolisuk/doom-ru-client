import React from 'react'
import { AppButton } from '../../../../../components/AppButton/AppButton'
import { Heart } from 'react-feather';
import s from './Favorites.module.scss'
import { useTranslation } from 'next-i18next';

export const Favorites = () => {
    const { t } = useTranslation("header");

    const title = t("header_user_profile.favorites.title");

    return (
        <AppButton
            title={title}
            className="active--scale transparent hover--none">
            <Heart className={s.header_favorites} />
        </AppButton>
    )
}
