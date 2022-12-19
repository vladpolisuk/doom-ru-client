import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, memo } from 'react';
import { getConcatenatedStylesByCondition } from '../../utils/ui/getConcatenatedStylesByCondition';
import { BaseAppComponent } from '../types';
import s from './AppLink.module.scss';

interface AppLink extends BaseAppComponent<HTMLAnchorElement> {
    resetHref?: boolean;
};

/**
 * The common link component in the application
 * @type `FC<AppLink>`
 * @memo `true`
 * @return `next/link`
 */
export const AppLink: FC<AppLink> = memo(({
    title,
    children,
    href = "/",
    resetHref = false,
    className = s.app_link,
    resetStyles = false,
    ...props
}) => {
    const { locale } = useRouter();
    const url = resetHref ? href : `/${locale}${href}`;

    const styles = getConcatenatedStylesByCondition(
        resetStyles,
        className,
        s.app_link
    );

    return (
        <Link
            href={url}
            className={styles}
            aria-label={title}
            title={title}
            {...props}>
            {children}
        </Link>
    )
})

AppLink.displayName = "AppLink";