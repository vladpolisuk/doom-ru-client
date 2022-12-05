import { FC, memo } from 'react';
import { BaseAppComponent } from '../types';
import s from './AppSkeleton.module.scss';

type AppSkeleton = BaseAppComponent<HTMLDivElement>;

/**
 * The common component that renders a temporary stub
 * @returns `html:div`
 */
export const AppSkeleton: FC<AppSkeleton> = memo(({
    resetStyles,
    className,
    children
}) => {
    const styles = resetStyles
        ? className
        : `${s["app--skeleton"]} transition ${className}`;

    return (
        <div className={styles}>
            {children}
        </div>
    )
});

AppSkeleton.displayName = "AppSkeleton";


