import clsx from 'clsx';
import { Fragment } from 'react';
import AppSkeleton from '../../../components/AppSkeleton/AppSkeleton';
import s from './RealtyInfo.module.scss';

export const RealtyInfoSkeleton = () => {
	const infoBaseStyles = clsx(s.realty_infoBase, s.realty_infoBaseSkeleton);
	const priceStyles = clsx(s.realty_price, s.realty_priceSkeleton);
	const addressStyles = clsx(s.realty_address, s.realty_addressSkeleton);
	const descriptionStyles = clsx(s.realty_description, s.realty_descriptionSkeleton);
	const dateStyles = clsx(s.realty_date, s.realty_dateSkeleton);
	const actionStylesStyles = clsx(s.realty_action, s.realty_actionSkeleton, 'active--scale', 'transition');

	return (
		<Fragment>
			<div className={infoBaseStyles}>
				<AppSkeleton className={priceStyles} />
				<div className={s.realty_addressBox}>
					<AppSkeleton className={addressStyles} />
				</div>
				<AppSkeleton className={descriptionStyles} />
				<div className={s.realty_dateBox}>
					<AppSkeleton className={dateStyles} />
				</div>
			</div>

			<div className={s.realty_infoActions}>
				<AppSkeleton className={actionStylesStyles} />

				<AppSkeleton
					color='transparent'
					className={actionStylesStyles}
				/>
			</div>
		</Fragment>
	);
};
