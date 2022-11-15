import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AnchorHTMLAttributes, FC, memo } from 'react';

/**
 * Interface of AppLink components
 * @type `AnchorHTMLAttributes<HTMLAnchorElement>`
 */
type AppLink = AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * The common link component in the app
 * @type `FC<AppLink>`
 * @memo `true`
 * @return `next/link`
 */
export const AppLink: FC<AppLink> = memo(({
    href,
    title,
    className,
    children,
}) => {
    const { locale } = useRouter();
    const th = useTranslation('header').t;

    return (
        <Link
            href={`/${locale}${href}`}
            className={className}
            aria-label={th(title || "")}
            title={th(title || "")}>
            {children}
        </Link>
    )
})

AppLink.displayName = "AppLink";