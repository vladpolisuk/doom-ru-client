import clsx from 'clsx';
import { useAppSelector } from '../../../hooks/store';
import { useTranslation } from '../../../hooks/useTranslation';
import { getRealty, getRealtyLoading } from '../../../store/realty/selectors';
import { RealtyHouseType, RealtyRepair, RealtyType } from '../../../types';
import s from './RealtyDetail.module.scss';
import { RealtyDetailSkeleton } from './RealtyDetailSkeleton';

export const RealtyDetail = () => {
	const realty = useAppSelector(getRealty);
	const loading = useAppSelector(getRealtyLoading);
	const realtyT = useTranslation('realty');

	const styles = clsx(s.realty_detail, 'unlisted');

	return !loading ? (
		<div className={styles}>
			<div className={s.realty_detail_badges}>
				{realty.elevator && <p className={s.realty_detail_badge}>{realtyT.realty_detail.bool.elevator}</p>}
				{realty.mortgage && <p className={s.realty_detail_badge}>{realtyT.realty_detail.bool.mortgage}</p>}
			</div>

			<div className={s.realty_detail_items}>
				<div className={s.realty_detail_item}>
					<p className={s.realty_detail_item_label}>{realtyT.realty_detail.text.type.title}:</p>
					<p className={s.realty_detail_item_value}>
						{realtyT.realty_detail.text.type.value[realty.type as RealtyType]}
					</p>
				</div>
				<div className={s.realty_detail_item}>
					<p className={s.realty_detail_item_label}>{realtyT.realty_detail.text.houseType.title}:</p>
					<p className={s.realty_detail_item_value}>
						{realtyT.realty_detail.text.houseType.value[realty.houseType as RealtyHouseType]}
					</p>
				</div>
				<div className={s.realty_detail_item}>
					<p className={s.realty_detail_item_label}>{realtyT.realty_detail.text.repair.title}:</p>
					<p className={s.realty_detail_item_value}>
						{realtyT.realty_detail.text.repair.value[realty.repair as RealtyRepair]}
					</p>
				</div>
				<div className={s.realty_detail_item}>
					<p className={s.realty_detail_item_label}>{realtyT.realty_detail.text.area.title}:</p>
					<p className={s.realty_detail_item_value}>{realty.area}</p>
				</div>
				<div className={s.realty_detail_item}>
					<p className={s.realty_detail_item_label}>{realtyT.realty_detail.text.bedrooms.title}:</p>
					<p className={s.realty_detail_item_value}>{realty.bedrooms}</p>
				</div>
				<div className={s.realty_detail_item}>
					<p className={s.realty_detail_item_label}>{realtyT.realty_detail.text.floor.title}:</p>
					<p className={s.realty_detail_item_value}>{realty.floor}</p>
				</div>
				<div className={s.realty_detail_item}>
					<p className={s.realty_detail_item_label}>{realtyT.realty_detail.text.rooms.title}:</p>
					<p className={s.realty_detail_item_value}>{realty.rooms}</p>
				</div>
			</div>
		</div>
	) : (
		<RealtyDetailSkeleton />
	);
};
