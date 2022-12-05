import { useTranslation } from 'next-i18next';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AppLink } from '../../../components/AppLink/AppLink';
import s from './AppHeaderLogo.module.scss';

export const AppHeaderLogo = () => {
    const { t } = useTranslation('common');
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [resolvedTheme])

    const src = `/assets/logo_${resolvedTheme}.svg`;

    if (!mounted) return null;

    return (
        <AppLink
            href='/'
            translation="header"
            className={s.header_ctr_logoLink}
            title="header_logo_link_label">
            <Image
                alt={t("logo_name")}
                width="132"
                height="42"
                priority
                className={s.header_ctr_logoLink__img}
                src={src} />
        </AppLink>
    );
}