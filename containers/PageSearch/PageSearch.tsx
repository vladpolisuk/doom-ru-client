import clsx from 'clsx';
import { useRouter } from 'next/router';
import { AppBreadcrumbs } from '../../components/AppBreadcrumbs/AppBreadcrumbs';
import { AppLink } from '../../components/AppLink/AppLink';
import { useAppSelector } from '../../hooks/store';
import { getAppLocation } from '../../store/app/selectors';
import { getStringWithUppercase } from '../../utils/ui/getStringWithUppercase';
import s from './PageSearch.module.scss';
import { SearchFilters } from './SearchFilters/SearchFilters';
import { SearchResult } from './SearchResult/SearchResult';

type Query = { key: string; value: string, href: string };

export const PageSearch = () => {
    const location = useAppSelector(getAppLocation);
    const router = useRouter();
    const queries: Query[] = [];

    for (const key in router.query) {
        queries.push({
            key,
            value: router.query[key] as string,
            href: `/s?${key}=${router.query[key]}`
        })
    }

    for (let i = 1; i < queries.length; i++) {
        queries[i].href = `${queries[i - 1].href}&${queries[i].key}=${queries[i].value}`
    }

    const components = queries.map(({ href, value }) => {
        const name = getStringWithUppercase(value, 0);

        return (
            <AppLink
                onlyARIA
                resetStyles
                href={href}
                key={value}>
                {name}
            </AppLink>
        )
    })

    const styles = clsx(s.search_container, "container");
    const area = getStringWithUppercase(location?.city || location?.country || "", 0);

    return (
        <main className={s.search}>
            <div className={styles}>
                <AppBreadcrumbs>
                    {area}
                    {components}
                </AppBreadcrumbs>

                <div className={s.search_title}>
                    <h1>Results</h1>
                    <span className={s.search_resultsCount}>600</span>
                </div>

                <div>
                    <SearchFilters />
                    <SearchResult />
                </div>
            </div>
        </main>
    )
}
