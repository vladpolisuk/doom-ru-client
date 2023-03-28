import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useState } from 'react';
import AppBreadcrumbs from '../../components/AppBreadcrumbs/AppBreadcrumbs';
import AppLink from '../../components/AppLink/AppLink';
import { useAppSelector } from '../../hooks/store';
import { getAppLocation } from '../../store/app/selectors';
import getStringWithUppercase from '../../utils/ui/getStringWithUppercase';
import s from './PageSearch.module.scss';
import { SearchFilters } from './SearchFilters/SearchFilters';
import { SearchResult } from './SearchResult/SearchResult';
import { SearchSorts } from './SearchSorts/SearchSorts';
import { SearchSwitchView } from './SearchSwitchView/SearchSwitchView';

export type View = 'list' | 'grid';

export const PageSearch = () => {
	const location = useAppSelector(getAppLocation);
	const [view, setView] = useState<View>('list');
	const router = useRouter();

	const styles = clsx(s.search_container, 'container');
	const area = getStringWithUppercase(location?.city || location?.country || '', 0);
	const action = router.route.split('/')[3];
	const typeText = getStringWithUppercase(action, 0);

	return (
		<div className={s.search}>
			<div className={styles}>
				<AppBreadcrumbs>
					{area}
					<AppLink
						onlyARIA
						resetStyles
						href={`/s/${action}`}
						key={action}>
						{typeText}
					</AppLink>
				</AppBreadcrumbs>

				<div className={s.search_title}>
					<h1>Results</h1>
					<span className={s.search_resultsCount}>600</span>
				</div>

				<main
					id='main'
					className={s.search_main}>
					<SearchFilters />

					<div className={s.search_resultBox}>
						<div className={s.search_resultBox_control}>
							<SearchSwitchView
								view={view}
								handler={setView}
							/>
							<SearchSorts />
						</div>
						<SearchResult view={view} />
					</div>
				</main>
			</div>
		</div>
	);
};
