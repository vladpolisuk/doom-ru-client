import { FC, memo } from 'react';
import resetStylesOrMerge from '../../utils/ui/resetStylesOrMerge';
import { BaseAppComponent } from '../types';
import s from './AppSkeleton.module.scss';

type IAppSkeleton = BaseAppComponent<HTMLDivElement>;

/** ## App Skeleton
 * The common component that renders a temporary stub
 * @returns `html:div`
 */
const AppSkeleton: FC<IAppSkeleton> = memo(({ children, className = s.app_skeleton, resetStyles = false }) => {
	const styles = resetStylesOrMerge(resetStyles, className, s.app_skeleton, 'transition');

	return (
		<div
			data-testid='app-skeleton'
			className={styles}>
			{children}
		</div>
	);
});

AppSkeleton.displayName = 'AppSkeleton';
export default AppSkeleton;
