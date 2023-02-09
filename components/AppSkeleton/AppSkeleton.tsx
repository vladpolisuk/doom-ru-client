import { FC, memo } from 'react';
import { getConcatenatedStylesByCondition } from '../../utils/ui/getConcatenatedStylesByCondition';
import { BaseAppComponent } from '../../types/components';
import s from './AppSkeleton.module.scss';

type IAppSkeleton = BaseAppComponent<HTMLDivElement>;

/**
 * The common component that renders a temporary stub
 * @returns `html:div`
 */
export const AppSkeleton: FC<IAppSkeleton> = memo(({ children, className = s.app_skeleton, resetStyles = false }) => {
	const styles = getConcatenatedStylesByCondition(resetStyles, className, s.app_skeleton, 'transition');

	return (
		<div
			data-testid='app-skeleton'
			className={styles}>
			{children}
		</div>
	);
});

AppSkeleton.displayName = 'AppSkeleton';
