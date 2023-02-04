import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { AppLogoutButton } from '../../components/AppLogoutButton/AppLogoutButton';
import { LocaleMeAsideLogOut, LocaleMeAsideTab } from '../../types/locales/me';
import { AsideTabs } from './AsideTabs/AsideTabs';
import s from './PageMe.module.scss';
import { FiLogOut } from 'react-icons/fi';
import { ProfileCard } from './AsideProfileCard/AsideProfileCard';
import { useEffect, useState } from 'react';

export const PageMe = () => {
    const [current, setCurrent] = useState(0);
    const { t } = useTranslation("me");

    useEffect(() => {
        setCurrent(0);
    }, [])

    const { text, title }: LocaleMeAsideLogOut = t('aside.logout', { returnObjects: true });
    const tabs: LocaleMeAsideTab[] = t("aside.tabs", { returnObjects: true });

    const components = tabs.map(({ name, title, url, icon, id }) => (
        <AsideTabs.Item
            tabId={id}
            current={current}
            setCurrent={setCurrent}
            icon={icon}
            href={url}
            title={title}
            key={name}
            text={name} />
    ));

    const styles = clsx(s.me_container, "container");

    return (
        <div className={s.me}>
            <div className={styles}>
                <div className={s.me_aside}>
                    <ProfileCard />

                    <hr className={s.me_hr} />

                    <AsideTabs>
                        {components}
                    </AsideTabs>

                    <hr className={s.me_hr} />

                    <AppLogoutButton
                        resetStyles
                        onlyARIA
                        className={s.me_logout}
                        title={title}>
                        <FiLogOut className={s.me_logout_icon} />
                        {text}
                    </AppLogoutButton>
                </div>
            </div>
        </div>
    )
}