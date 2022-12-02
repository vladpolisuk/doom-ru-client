import React from 'react'
import { AppButton } from '../../../../../components/AppButton/AppButton'
import { Bell } from 'react-feather';
import s from './Notifications.module.scss'

export const Notifications = () => {
    return (
        <AppButton
            translation='header'
            title="header_user_profile.notifications.title"
            className="active_scale transparent hover--none">
            <Bell className={s.profile_notifications} />
        </AppButton>
    )
}
