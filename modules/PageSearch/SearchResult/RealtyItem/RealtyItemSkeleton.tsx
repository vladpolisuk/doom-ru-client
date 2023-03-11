import clsx from 'clsx';
import { FC } from 'react';
import AppSkeleton from '../../../../components/AppSkeleton/AppSkeleton';
import { View } from '../../PageSearch';
import s from './RealtyItem.module.scss';

type Props = {
	view: View;
};

export const RealtyItemSkeleton: FC<Props> = ({ view, ...extra }) => {
	const stylesSkeleton = clsx(s.realty_itemSkeleton, s[`realty_itemSkeleton--${view}`]);
	
	const stylesSkeletonImage = clsx(
		s.realty_itemSkeleton_image,
		s[`realty_itemSkeleton_image--${view}`]
	);

	const stylesSkeletonContent = clsx(
		s.realty_itemSkeleton_content,
		s[`realty_itemSkeleton_content--${view}`]
	);

	return (
		<AppSkeleton
			className={stylesSkeleton}
			{...extra}>
			<AppSkeleton className={stylesSkeletonImage} />
			<div className={stylesSkeletonContent}>
				<AppSkeleton className={s.realty_itemSkeleton_text} />
				<AppSkeleton className={s.realty_itemSkeleton_text} />
				<AppSkeleton className={s.realty_itemSkeleton_text} />
				<AppSkeleton className={s.realty_itemSkeleton_text} />
			</div>
		</AppSkeleton>
	);
};
