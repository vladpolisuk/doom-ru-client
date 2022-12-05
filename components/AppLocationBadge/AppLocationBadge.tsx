import { FC, memo } from 'react';
import { Navigation } from 'react-feather';
import { AppLocation } from '../../store/app/types';
import { AppButton } from '../AppButton/AppButton';
import { BaseAppComponent } from '../types';
import s from './AppLocationBadge.module.scss';

interface AppNavigationBadge extends BaseAppComponent<HTMLButtonElement> {
    /**
     * The field with the user's geolocation information
     */
    location: AppLocation;
};

/**
 * The common navigation badge component in the application
 * @memo `true`
 * @returns `AppButton`
 */
export const AppLocationBadge: FC<AppNavigationBadge> = memo(({
    resetStyles,
    className,
    location,
    ...props
}) => {
    const styles = resetStyles
        ? className
        : `${s["app--locationBadge"]} transition ${className}`;

    return (
        <AppButton
            {...props}
            className={styles}
            data-testid="app-location-badge"
            aria-label={`${location?.country}, ${location?.city}`}>
            <Navigation className={s["app--locationBadge-icon"]} />

            <p translate='yes'>
                {location?.country}, {location?.city}
            </p>
        </AppButton>
    )
})

AppLocationBadge.displayName = "AppLocationBadge";