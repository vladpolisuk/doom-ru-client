import { Children, FC, memo } from 'react';
import { getConcatenatedStylesByCondition } from '../../utils/ui/getConcatenatedStylesByCondition';
import { BaseAppComponent } from '../types';
import s from './AppBreadcrumbs.module.scss';

interface IAppBreadcrumbs extends BaseAppComponent<HTMLUListElement> {
    resetHref?: boolean;
    separator?: string;
};

/**
 * The common breadcrumbs component in the application
 * @type `FC<ul>`
 * @memo `true`
 * @return `html:ul`
 */
export const AppBreadcrumbs: FC<IAppBreadcrumbs> = memo(({
    title,
    children,
    className = "",
    separator = "/",
    resetStyles = false,
    ...props
}) => {
    const components = Children.toArray(children).map((child, i) => (
        <li key={`${i}_${Date.now()}`}>
            {child}
            <span className={s.app_breadcrumbs_separator}>
                &nbsp;{separator}&nbsp;
            </span>
        </li>
    ))

    const styles = getConcatenatedStylesByCondition(
        resetStyles,
        className,
        s.app_breadcrumbs,
        "unlisted"
    );

    return (
        <ul
            className={styles}
            {...props}>
            {components}
        </ul>
    )
})

AppBreadcrumbs.displayName = "AppBreadcrumbs";