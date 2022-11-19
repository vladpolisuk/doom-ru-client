import React from 'react'
import { AppButton } from '../../../../../components/AppButton/AppButton'
import { Heart } from 'react-feather';
import s from './Favorites.module.scss'

export const Favorites = () => {
    return (
        <AppButton
            translation='header'
            title="header_user_profile.favorites.title"
            className={`${s.profile} active_scale transparent`}>
            <Heart className={s.profile_favorites} />
        </AppButton>
    )
}
