import clsx from 'clsx';
import AppSkeleton from '../../../components/AppSkeleton/AppSkeleton';
import s from './RealtyDetail.module.scss';

export const RealtyDetailSkeleton = () => {
	const styles = clsx(s.realty_detail, 'unlisted');
	const detailItemStyles = clsx(s.realty_detail_badge, s.realty_detail_badgeSkeleton);

	return (
		<ul className={styles}>
			<AppSkeleton className={detailItemStyles} />
		</ul>
	);
};
