import { FC, memo } from 'react';
import { Navigation } from 'react-feather';
import { useAppSelector } from '../../hooks/store';
import { getAppLocation } from '../../store/app/selectors';
import { getConcatenatedStylesByCondition } from '../../utils/ui/getConcatenatedStylesByCondition';
import { AppButton } from '../AppButton/AppButton';
import { BaseAppComponent } from '../types';
import s from './AppLocationBadge.module.scss';

type IAppNavigationBadge = BaseAppComponent<HTMLButtonElement>;

/**
 * The common navigation badge component in the application
 * @memo `true`
 * @returns `AppButton`
 */
export const AppLocationBadge: FC<IAppNavigationBadge> = memo(({
    Skeleton,
    className = "",
    resetStyles = false,
    ...props
}) => {
    const location = useAppSelector(getAppLocation);

    const styles = getConcatenatedStylesByCondition(
        resetStyles,
        className,
        s.app_locationBadge,
        "transition",
    );

    if (!location && Skeleton)
        return <>{Skeleton}</>

    return (
        <AppButton
            {...props}
            className={styles}
            data-testid="app-location-badge"
            aria-label={`${location?.country}, ${location?.city}`}>
            <Navigation className={s.app_locationBadge_icon} />

            <p translate='yes'>
                {location?.country}, {location?.city}
            </p>
        </AppButton>
    )
})

AppLocationBadge.displayName = "AppLocationBadge";