import { FC, useState } from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import { Realty } from '../../../store/realty/types';
import ControlSelectedRealties from './ControlSelectedRealties';
import s from './PageRealties.module.scss';
import { RealtiesList } from './RealtiesList/RealtiesList';

interface Props {
	realties: Realty[];
}

const PageMeRealties: FC<Props> = ({ realties }) => {
	const me = useTranslation('me');
	const [selectedIds, setSelectedIds] = useState<number[]>([]);

	const toggleSelectRealty = (id: number) => {
		if (selectedIds.includes(id)) {
			const filteredIds = selectedIds.filter(realtyId => realtyId !== id);
			setSelectedIds(filteredIds);
		} else {
			setSelectedIds([...selectedIds, id]);
		}
	};

	const realtiesTitle = me.me_realties.title;

	return (
		<main className={s.me_realties}>
			<div className={s.me_realties_header}>
				<div className={s.me_realties_header_info}>
					<h3 className={s.me_realties_title}>{realtiesTitle}</h3>
					{realties.length > 0 && <p className={s.me_realties_count}>{realties.length}</p>}
				</div>

				<ControlSelectedRealties
					selectedIds={selectedIds}
					setSelectedIds={setSelectedIds}
				/>
			</div>

			<RealtiesList
				selectedIds={selectedIds}
				toggleSelectRealty={toggleSelectRealty}
				realties={realties}
			/>
		</main>
	);
};

export default PageMeRealties;
