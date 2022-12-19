import React from 'react';
import { useTranslation } from 'next-i18next'
import s from './AppFooter.module.scss';

export const AppFooterBottom = () => {
    const t = useTranslation("common").t;
    const author = t("site_author");
    const currentYear = new Date().getFullYear().toString();

    return (
        <div className={s.footer_bottom}>
            <p className={s.footer_bottom_text}>
                {author},&nbsp;
                <time dateTime={currentYear}>
                    {currentYear}
                </time>
            </p>
        </div>
    )
}