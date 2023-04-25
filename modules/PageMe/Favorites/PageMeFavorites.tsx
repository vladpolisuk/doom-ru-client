import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import RealtyAPI from '../../../api/realty';
import AppRealty from '../../../components/AppRealty/AppRealty';
import { AppRealtySkeleton } from '../../../components/AppRealty/AppRealtySkeleton';
import { useTranslation } from '../../../hooks/useTranslation';
import { Locale } from '../../../store/app/types';
import { Realty } from '../../../store/realty/types';
import s from './PageMeFavorites.module.scss';

const PageMeFavorites = () => {
	const router = useRouter();
	const me = useTranslation('me');
	const [loading, setLoading] = useState(true);
	const [realties, setRealties] = useState<Realty[]>([]);

	useEffect(() => {
		const fetch = async () => {
			try {
				setLoading(true);
				setRealties([]);
				const locale = router.query.lang as Locale;
				if (!locale) return;
				const api = new RealtyAPI(locale);
				const response = await api.getAllFavoriteRealties();
				setRealties(response.data);
				localStorage.setItem('favorites', JSON.stringify(response.data));
				setLoading(false);
			} catch (err: any) {
				const favorites = localStorage.getItem('favorites');

				if (favorites) {
					const parsedFavorites = JSON.parse(favorites);
					setRealties(parsedFavorites);
				}

				setLoading(false);
			}
		};

		fetch();
	}, []);

	const styles = clsx(s.me_favorites_list, 'unlisted');
	const favoritesTitle = me.me_favorites.title;

	return (
		<main className={s.me_favorites}>
			<h3 className={s.me_favorites_title}>{favoritesTitle}</h3>

			<ul className={styles}>
				{loading &&
					[...Array(5).keys()].map(key => (
						<AppRealtySkeleton
							view='list'
							key={key}
						/>
					))}

				{!loading &&
					realties.map(realty => (
						<AppRealty
							view='list'
							key={realty.id}
							{...realty}
						/>
					))}
			</ul>
		</main>
	);
};

export default PageMeFavorites;
