import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { useTranslation } from '../../hooks/useTranslation';
import { Locale } from '../../store/app/types';
import { setRealty, setRealtyAuthor, setRealtyLoading } from '../../store/realty/actions';
import { fetchRealtyUser, getRealty, updateRealtyViews } from '../../store/realty/requests';
import { getRealty as getRealtySelector } from '../../store/realty/selectors';
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
	const realty = useAppSelector(getRealtySelector);
	const t = useTranslation('realty');

	useEffect(() => {
		const fetch = async () => {
			if (!realty.id) return;
			const locale = router.query.lang as Locale;
			await updateRealtyViews(realty.id, locale);
		};

		fetch();
	}, [realty, router]);

	useEffect(() => {
		const fetch = async () => {
			dispatch(setRealtyLoading(true));
			const locale = router.query.lang as Locale;
			const id = Number(router.query.id);
			const response = await getRealty(id, locale);
			dispatch(setRealty(response.data));
			const author = await fetchRealtyUser(response.data.user.id, locale);
			dispatch(setRealtyAuthor(author.data));
			dispatch(setRealtyLoading(false));
		};

		fetch();
	}, [router, dispatch]);

	const detail = t.realty_detail.title;
	const author = t.realty_author.title;

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
