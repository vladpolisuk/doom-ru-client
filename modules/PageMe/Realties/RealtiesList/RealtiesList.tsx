import clsx from 'clsx';
import { FC } from 'react';
import { useTranslation } from '../../../../hooks/useTranslation';
import { Realty } from '../../../../store/realty/types';
import s from './RealtiesList.module.scss';
import { RealtyItem } from './RealtyItem/RealtyItem';

interface Props {
	realties: Realty[];
	selectedIds: number[];
	toggleSelectRealty: (id: number) => void;
}

export const RealtiesList: FC<Props> = ({ realties, toggleSelectRealty, selectedIds }) => {
	const me = useTranslation('me');

	const styles = clsx(s.me_realties_list, 'unlisted');
	const realtiesNotFoundTitle = me.me_realties.not_found.title;

	return (
		<ul className={styles}>
			{realties.map(realty => (
				<RealtyItem
					key={realty.id}
					realty={realty}
					selectedIds={selectedIds}
					toggleSelectRealty={toggleSelectRealty}
				/>
			))}

			{realties.length === 0 && <p className={s.me_realties_list_notFound}>{realtiesNotFoundTitle}</p>}
		</ul>
	);
};
