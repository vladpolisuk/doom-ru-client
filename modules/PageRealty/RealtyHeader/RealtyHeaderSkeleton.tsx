import clsx from 'clsx';
import AppSkeleton from '../../../components/AppSkeleton/AppSkeleton';
import s from './RealtyHeader.module.scss';

export const RealtyHeaderSkeleton = () => {
	const idStyles = clsx(s.realty_id, s.realty_idSkeleton);
	const titleStyles = clsx(s.realty_title, s.realty_titleSkeleton);
	const backStyles = clsx(s.realty_backSkeleton);

	return (
		<div className={s.realty_header}>
			<div className={s.realty_headerInfo}>
				<AppSkeleton className={backStyles} />
				<AppSkeleton className={titleStyles} />
			</div>

			<AppSkeleton className={idStyles} />
		</div>
	);
};
