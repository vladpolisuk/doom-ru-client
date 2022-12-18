import React from 'react'
import { AppButton } from '../../../../../components/AppButton/AppButton'
import { Bell } from 'react-feather';
import s from './Notifications.module.scss'
import { useTranslation } from 'next-i18next';

export const Notifications = () => {
    const { t } = useTranslation("header")

    const title = t("header_user_profile.notifications.title");

    return (
        <AppButton
            title={title}
            className="active--scale transparent hover--none">
            <Bell className={s.header_notifications} />
        </AppButton>
    )
}
