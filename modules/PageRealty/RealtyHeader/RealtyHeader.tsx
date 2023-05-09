import clsx from 'clsx';
import { useRouter } from 'next/router';
import { FaChevronLeft } from 'react-icons/fa';
import AppButton from '../../../components/AppButton/AppButton';
import useAppSelector from '../../../hooks/useAppSelector';
import { getRealty, getRealtyLoading } from '../../../store/realty/selectors';
import s from './RealtyHeader.module.scss';
import { RealtyHeaderSkeleton } from './RealtyHeaderSkeleton';

export const RealtyHeader = () => {
	const router = useRouter();
	const realty = useAppSelector(getRealty);
	const loading = useAppSelector(getRealtyLoading);

	const back = () => router.back();

	const styles = clsx(s.realty_back, 'active--scale', 'transition');

	return !loading ? (
		<div className={s.realty_header}>
			<div className={s.realty_headerInfo}>
				<AppButton
					onClick={back}
					color='reset'
					className={styles}>
					<FaChevronLeft size={20} />
				</AppButton>
				<h1 className={s.realty_title}>{realty.title}</h1>
			</div>

			<p className={s.realty_id}>ID {realty.id}</p>
		</div>
	) : (
		<RealtyHeaderSkeleton />
	);
};
