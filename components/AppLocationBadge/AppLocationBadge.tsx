import clsx from 'clsx';
import { FC, memo } from 'react';
import { FiNavigation } from 'react-icons/fi';
import { useAppSelector } from '../../hooks/store';
import { getAppLocation } from '../../store/app/selectors';
import { BaseAppComponent } from '../../types/components';
import resetStylesOrMerge from '../../utils/ui/resetStylesOrMerge';
import AppButton from '../AppButton/AppButton';
import AppSkeleton from '../AppSkeleton/AppSkeleton';
import s from './AppLocationBadge.module.scss';

type IAppNavigationBadge = BaseAppComponent<HTMLButtonElement>;

/** ## App Location Badge
 * The common navigation badge component in the application
 * @memo `true`
 * @returns `AppButton`
 */
const AppLocationBadge: FC<IAppNavigationBadge> = memo(({ className = '', resetStyles = false, ...props }) => {
	const location = useAppSelector(getAppLocation);

	const styles = resetStylesOrMerge(resetStyles, className, s.app_locationBadge, 'transition');
	const skeletonStyles = clsx(styles, s.app_locationBadgeSkeleton);

	return location ? (
		<AppButton
			{...props}
			color='reset'
			className={styles}
			data-testid='app-location-badge'
			aria-label={`${location?.country}, ${location?.city}`}>
			<FiNavigation className={s.app_locationBadge_icon} />

			<p translate='yes'>
				{location?.country}, {location?.city}
			</p>
		</AppButton>
	) : (
		<AppSkeleton className={skeletonStyles} />
	);
});

AppLocationBadge.displayName = 'AppLocationBadge';
export default AppLocationBadge;
