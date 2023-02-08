import { useTranslation } from 'next-i18next';
import React, { useEffect, useState } from 'react'
import { LocaleMeAsideTab } from '../../../types/locales/me';
import { AsideTabs } from './AsideTabs/AsideTabs';

export const Aside = () => {
    const { t } = useTranslation('me');
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        setCurrent(0);
    }, [])

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

    return (
        <AsideTabs>
            {components}
        </AsideTabs>
    )
}
