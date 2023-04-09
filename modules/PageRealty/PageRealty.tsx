import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/store';
import { useTranslation } from '../../hooks/useTranslation';
import { Locale } from '../../store/app/types';
import { setRealty, setRealtyLoading } from '../../store/realty/actions';
import { getRealty } from '../../store/realty/requests';
import s from './PageRealty.module.scss';
import { RealtyAuthor } from './RealtyAuthor/RealtyAuthor';
import { RealtyDetail } from './RealtyDetail/RealtyDetail';
import { RealtyHeader } from './RealtyHeader/RealtyHeader';
import { RealtyImages } from './RealtyImages/RealtyImages';
import { RealtyInfo } from './RealtyInfo/RealtyInfo';

const PageRealty = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const containerStyles = clsx(s.realty_container, 'container');
	const realty = useTranslation('realty');

	useEffect(() => {
		const fetch = async () => {
			dispatch(setRealtyLoading(true));
			const locale = router.query.lang as Locale;
			const id = Number(router.query.id);
			const response = await getRealty(locale, id);
			dispatch(setRealty(response.data));
			dispatch(setRealtyLoading(false));
		};

		fetch();
	}, [router, dispatch]);

	const detail = realty.realty_detail.title;
	const author = realty.realty_author.title;

	return (
		<div className={s.realty}>
			<div className={containerStyles}>
				<div className={s.realty_main}>
					<div className={s.realty_content}>
						<RealtyHeader />
						<RealtyImages />
						<h2>{detail}</h2>
						<RealtyDetail />
						<h2>{author}</h2>
						<RealtyAuthor />
					</div>

					<RealtyInfo />
				</div>
			</div>
		</div>
	);
};

export default PageRealty;
