import React from 'react'
import { AppButton } from '../../../../../components/AppButton/AppButton'
import { Heart } from 'react-feather';
import s from './Favorites.module.scss'

export const Favorites = () => {
    return (
        <AppButton
            translation='header'
            title="header_user_profile.favorites.title"
            className="active_scale transparent hover--none">
            <Heart className={s.profile_favorites} />
        </AppButton>
    )
}
