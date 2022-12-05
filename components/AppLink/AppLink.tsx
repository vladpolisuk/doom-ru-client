import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, memo } from 'react';
import { BaseAppComponent } from '../types';
import s from './AppLink.module.scss';

type AppLink = BaseAppComponent<HTMLAnchorElement>;

/**
 * The common link component in the application
 * @type `FC<AppLink>`
 * @memo `true`
 * @return `next/link`
 */
export const AppLink: FC<AppLink> = memo(({
    href,
    title,
    className,
    children,
    translation,
    resetStyles,
    ...props
}) => {
    const { locale } = useRouter();
    const { t } = useTranslation(translation);

    const styles = resetStyles
        ? className
        : `${s['app--link']} ${className}`;

    return (
        <Link
            translate="yes"
            href={`/${locale}${href}`}
            className={styles}
            aria-label={t(title || "")}
            title={t(title || "")}
            {...props}>
            {children}
        </Link>
    )
})

AppLink.displayName = "AppLink";