import clsx from 'clsx';
import { useRouter } from 'next/router';
import { FC, memo, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { Locale } from '../../../store/app/types';
import { setSearchLoading } from '../../../store/search/actions';
import { searchGetRealties } from '../../../store/search/requests';
import { getSearchLoading, getSearchPage, getSearchTake } from '../../../store/search/selectors';
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
	const loading = useAppSelector(getSearchLoading);
	const dispatch = useAppDispatch();
	const [realties, setRealties] = useState<Realty[]>([]);

	useEffect(() => {
		const fetch = async () => {
			await dispatch(setSearchLoading(true));
			const locale = router.locale as Locale;
			if (!locale) return;
			const response = await searchGetRealties(locale, take, page);
			await dispatch(setSearchLoading(false));
			setRealties(response.data);
		};

		fetch();
	}, [page, take, router.locale, dispatch]);

	const toggleFavorite = (id: number) => alert(id);

	const styles = clsx(s[`search_result--${view}`], 'unlisted');

	return (
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
	);
});

SearchResult.displayName = 'SearchResult';
