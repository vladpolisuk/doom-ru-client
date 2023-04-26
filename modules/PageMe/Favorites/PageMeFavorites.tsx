import clsx from 'clsx';
import { FC } from 'react';
import AppRealty from '../../../components/AppRealty/AppRealty';
import { useTranslation } from '../../../hooks/useTranslation';
import { Realty } from '../../../store/realty/types';
import s from './PageMeFavorites.module.scss';

interface Props {
	realties: Realty[];
}

const PageMeFavorites: FC<Props> = ({ realties }) => {
	const me = useTranslation('me');

	const styles = clsx(s.me_favorites_list, 'unlisted');
	const favoritesTitle = me.me_favorites.title;
	const favoriteNotFoundTitle = me.me_favorites.not_found.title;

	return (
		<main className={s.me_favorites}>
			<div className={s.me_favorites_header}>
				<h3 className={s.me_favorites_title}>{favoritesTitle}</h3>
				{realties.length > 0 && <p className={s.me_favorites_count}>{realties.length}</p>}
			</div>

			<ul className={styles}>
				{realties.map(realty => (
					<AppRealty
						view='list'
						key={realty.id}
						{...realty}
					/>
				))}

				{realties.length === 0 && <p className={s.me_favorites_notFound}>{favoriteNotFoundTitle}</p>}
			</ul>
		</main>
	);
};

export default PageMeFavorites;
