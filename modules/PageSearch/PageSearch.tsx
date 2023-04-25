import clsx from 'clsx';
import { useState } from 'react';
import { AppRealtyView } from '../../components/AppRealty/AppRealty';
import AppSpinner from '../../components/AppSpinner/AppSpinner';
import { useAppSelector } from '../../hooks/store';
import { useTranslation } from '../../hooks/useTranslation';
import { getSearchLoading, getSearchTotal } from '../../store/search/selectors';
import s from './PageSearch.module.scss';
import { SearchFilters } from './SearchFilters/SearchFilters';
import { SearchResult } from './SearchResult/SearchResult';
import { SearchSorts } from './SearchSorts/SearchSorts';
import { SearchSwitchView } from './SearchSwitchView/SearchSwitchView';
import SearchTake from './SearchTake/SearchTake';

export const PageSearch = () => {
	const total = useAppSelector(getSearchTotal);
	const loading = useAppSelector(getSearchLoading);
	const [view, setView] = useState<AppRealtyView>('list');
	const search = useTranslation('search');

	const resultsTitle = search.search_result.title;
	const styles = clsx(s.search_container, 'container');

	return (
		<div className={s.search}>
			<div className={styles}>
				<div className={s.search_title}>
					<h1>{resultsTitle}</h1>
					{!loading && <span className={s.search_resultsCount}>{total}</span>}
					{loading && <AppSpinner className={s['search_resultsCount--spinner']} />}
				</div>

				<main
					id='main'
					className={s.search_main}>
					<SearchFilters />

					<div className={s.search_resultBox}>
						<div className={s.search_resultBox_control}>
							<SearchSwitchView
								view={view}
								setView={setView}
							/>
							<SearchSorts />
							<SearchTake />
						</div>
						<SearchResult view={view} />
					</div>
				</main>
			</div>
		</div>
	);
};
