import clsx from 'clsx';
import { useRouter } from 'next/router';
import { FC, memo, useEffect, useState } from 'react';
import AppPagination from '../../../components/AppPagination/AppPagination';
import AppRealty, { AppRealtyView } from '../../../components/AppRealty/AppRealty';
import { AppRealtySkeleton } from '../../../components/AppRealty/AppRealtySkeleton';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { useTranslation } from '../../../hooks/useTranslation';
import { Locale } from '../../../store/app/types';
import { Realty } from '../../../store/realty/types';
import { setSearchLoading, setSearchPage, setSearchTotal } from '../../../store/search/actions';
import { searchGetRealties } from '../../../store/search/requests';
import { getSearchLoading, getSearchPage, getSearchTake, getSearchTotal } from '../../../store/search/selectors';
import { RealtyAction } from '../../../types';
import removeProperty from '../../../utils/removeProperty';
import parseQueries from '../../../utils/ui/parseQueries';
import s from './SearchResult.module.scss';

type Props = {
	view: AppRealtyView;
};

export const SearchResult: FC<Props> = memo(({ view }) => {
	const router = useRouter();
	const take = useAppSelector(getSearchTake);
	const page = useAppSelector(getSearchPage);
	const total = useAppSelector(getSearchTotal);
	const loading = useAppSelector(getSearchLoading);
	const searchT = useTranslation('search');
	const dispatch = useAppDispatch();
	const [realties, setRealties] = useState<Realty[]>([]);

	const changePage = (page: number) => {
		if (page === Number(router.query.page)) return;
		const action = router.route.split('/')[3];

		router.push({
			pathname: `/[lang]/s/${action}`,
			query: { ...router.query, page: page }
		});
	};

	useEffect(() => {
		const fetch = async () => {
			await dispatch(setSearchLoading(true));
			const queryPage = Number(router.query.page || 1);
			const action = router.route.split('/')[3] as RealtyAction;
			const locale = router.query.lang as Locale;
			const queries = parseQueries(removeProperty(router.query, 'lang'));
			setRealties([]);
			const response = await searchGetRealties(locale, {
				take,
				action,
				page: queryPage,
				...queries
			});
			setRealties(response.data.data || []);
			await dispatch(setSearchPage(response ? response.data.page : 1));
			await dispatch(setSearchTotal(response ? response.data.count : 0));
			await dispatch(setSearchLoading(false));
		};

		fetch();
	}, [router, take]);

	const styles = clsx(s[`search_result_list--${view}`], 'unlisted');
	const notFoundTitle = searchT.search_result.no_results.title;
	const notFoundLabel = searchT.search_result.no_results.label;

	return (
		<div className={s.search_result}>
			<ul className={styles}>
				{loading &&
					[...Array(take).keys()].map(key => (
						<AppRealtySkeleton
							view={view}
							key={key}
						/>
					))}

				{!loading &&
					realties.map(realty => (
						<AppRealty
							view={view}
							key={realty.id}
							{...realty}
						/>
					))}
			</ul>

			{realties.length > 0 && (
				<AppPagination
					siblingCount={1}
					currentPage={page}
					totalPages={total}
					pageSize={take}
					onPageChange={changePage}
				/>
			)}

			{realties.length === 0 && !loading && (
				<div className={s.search_result_notFound}>
					<p className={s.search_result_notFound_404}>404</p>
					<strong className={s.search_result_notFound_title}>{notFoundTitle}</strong>
					<p className={s.search_result_notFound_label}>{notFoundLabel}</p>
				</div>
			)}
		</div>
	);
});

SearchResult.displayName = 'SearchResult';
