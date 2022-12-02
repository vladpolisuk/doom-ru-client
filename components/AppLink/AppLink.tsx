import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AnchorHTMLAttributes, FC, memo } from 'react';
import s from './AppLink.module.scss';

interface AppLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
    /**
     * Specify the which json file with translation to use 
     */
    translation?: string;
    /**
     * Specify that styles should be resets or not
     */
    resetStyles?: boolean;
};

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