import clsx from 'clsx';
import { useRouter } from 'next/router';
import { FC, memo, useEffect, useState } from 'react';
import AppPagination from '../../../components/AppPagination/AppPagination';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { Locale } from '../../../store/app/types';
import { setSearchLoading } from '../../../store/search/actions';
import { searchGetRealties } from '../../../store/search/requests';
import { getSearchLoading, getSearchPage, getSearchTake, getSearchTotal } from '../../../store/search/selectors';
import { Realty } from '../../../types';
import { View } from '../PageSearch';
import RealtyItem from './RealtyItem/RealtyItem';
import { RealtyItemSkeleton } from './RealtyItem/RealtyItemSkeleton';
import s from './SearchResult.module.scss';

type Props = {
	view: View;
};

export const SearchResult: FC<Props> = memo(({ view }) => {
	const router = useRouter();
	const take = useAppSelector(getSearchTake);
	const page = useAppSelector(getSearchPage);
	const total = useAppSelector(getSearchTotal);
	const loading = useAppSelector(getSearchLoading);
	const dispatch = useAppDispatch();
	const [realties, setRealties] = useState<Realty[]>([]);

	const changePage = (page: number) => {
		if (page === Number(router.query.page)) return;
		const action = router.route.split('/')[2];

		router.push({
			pathname: `/${router.locale}/s/${action}`,
			query: { ...router.query, page: page }
		});
	};

	useEffect(() => {
		const fetch = async () => {
			dispatch(setSearchLoading(true));
			const queryPage = Number(router.query.page || 1);
			const locale = router.locale as Locale;
			if (!locale) return;
			const response = await dispatch(searchGetRealties(locale, take, queryPage));
			setRealties(response.data);
			dispatch(setSearchLoading(false));
		};

		if (!realties || Number(router.query.page) !== page) fetch();
	}, [router.query.page]);

	const toggleFavorite = (id: number) => alert(id);

	const styles = clsx(s[`search_result_list--${view}`], 'unlisted');

	return (
		<div className={s.search_result}>
			<ul className={styles}>
				{loading &&
					[...Array(take).keys()].map(key => (
						<RealtyItemSkeleton
							view={view}
							key={key}
						/>
					))}

				{!loading &&
					realties.map(realty => (
						<RealtyItem
							view={view}
							key={realty.id}
							toggleFavorite={toggleFavorite}
							{...realty}
						/>
					))}
			</ul>

			<AppPagination
				siblingCount={1}
				currentPage={page}
				totalPages={total}
				pageSize={take}
				onPageChange={changePage}
			/>
		</div>
	);
});

SearchResult.displayName = 'SearchResult';
