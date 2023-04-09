import clsx from 'clsx';
import AppSkeleton from '../../../components/AppSkeleton/AppSkeleton';
import { useTranslation } from '../../../hooks/useTranslation';
import s from './RealtyDetail.module.scss';

export const RealtyDetailSkeleton = () => {
	const realtyT = useTranslation('realty');

	const styles = clsx(s.realty_detail, 'unlisted');
	const detailItemStyles = clsx(s.realty_detail_badge, s.realty_detail_badgeSkeleton);

	return (
		<ul className={styles}>
			<AppSkeleton className={detailItemStyles} />
		</ul>
	);
};
