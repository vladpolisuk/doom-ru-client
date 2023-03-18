import { FC, memo } from 'react';
import { FiNavigation } from 'react-icons/fi';
import { useAppSelector } from '../../hooks/store';
import { getAppLocation } from '../../store/app/selectors';
import { BaseAppComponent } from '../../types/components';
import resetStylesOrMerge from '../../utils/ui/resetStylesOrMerge';
import AppButton from '../AppButton/AppButton';
import s from './AppLocationBadge.module.scss';

type IAppNavigationBadge = BaseAppComponent<HTMLButtonElement>;

/** ## App Location Badge
 * The common navigation badge component in the application
 * @memo `true`
 * @returns `AppButton`
 */
const AppLocationBadge: FC<IAppNavigationBadge> = memo(
	({ Skeleton, className = '', resetStyles = false, ...props }) => {
		const location = useAppSelector(getAppLocation);

		const styles = resetStylesOrMerge(resetStyles, className, s.app_locationBadge, 'transition');

		if (!location && Skeleton) return Skeleton;

		return (
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
		);
	}
);

AppLocationBadge.displayName = 'AppLocationBadge';
export default AppLocationBadge;
