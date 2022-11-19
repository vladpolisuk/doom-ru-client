import { useTranslation } from 'next-i18next';
import React from 'react'
import { AppButton } from '../../../../components/AppButton/AppButton';
import s from './HeaderAuth.module.scss';

export const HeaderAuth = () => {
    const { t } = useTranslation("header");

    return (
        <div className={s.header_ctr_user_auth}>
            <AppButton
                translation="header"
                className={`${s.auth_signin} transition active_scale`}
                title="header_user_auth.signin.title">
                {t("header_user_auth.signin.name")}
            </AppButton>
        </div>
    )
}
