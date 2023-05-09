import clsx from 'clsx';
import { FC, memo } from 'react';
import AppSkeleton from '../AppSkeleton/AppSkeleton';
import { AppRealtyView } from './AppRealty';
import s from './AppRealty.module.scss';

interface IAppRealtySkeleton {
	view: AppRealtyView;
}

export const AppRealtySkeleton: FC<IAppRealtySkeleton> = memo(({ view, ...extra }) => {
	const stylesSkeleton = clsx(s.realtySkeleton, s[`realtySkeleton--${view}`]);
	const stylesSkeletonImage = clsx(s.realtySkeleton_image, s[`realtySkeleton_image--${view}`]);
	const stylesSkeletonContent = clsx(s.realtySkeleton_content, s[`realtySkeleton_content--${view}`]);

	return (
		<AppSkeleton
			className={stylesSkeleton}
			{...extra}>
			<AppSkeleton className={stylesSkeletonImage} />
			<div className={stylesSkeletonContent}>
				<AppSkeleton className={s.realtySkeleton_text} />
				<AppSkeleton className={s.realtySkeleton_text} />
				<AppSkeleton className={s.realtySkeleton_text} />
				<AppSkeleton className={s.realtySkeleton_text} />
			</div>
		</AppSkeleton>
	);
});

AppRealtySkeleton.displayName = 'AppRealtySkeleton';
