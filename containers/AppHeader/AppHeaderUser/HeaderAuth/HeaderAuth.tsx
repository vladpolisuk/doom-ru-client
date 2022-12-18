import { useTranslation } from 'next-i18next';
import React from 'react'
import { AppButton } from '../../../../components/AppButton/AppButton';
import s from './HeaderAuth.module.scss';
import clsx from 'clsx';

export const HeaderAuth = () => {
    const { t } = useTranslation("header");

    const title = t("header_user_auth.signin.title");
    const styles = clsx(s.auth_signin, "transition", "active--scale");
    const text = t("header_user_auth.signin.name");

    return (
        <div className={s.header_container_user_auth}>
            <AppButton
                className={styles}
                title={title}>
                {text}
            </AppButton>
        </div>
    )
}
