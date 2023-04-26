import clsx from 'clsx';
import { FC, useState } from 'react';
import AppRealty from '../../../components/AppRealty/AppRealty';
import { useTranslation } from '../../../hooks/useTranslation';
import { Realty } from '../../../store/realty/types';
import ControlSelectedRealties from './ControlSelectedRealties';
import s from './PageRealties.module.scss';
import SelectRealtyBtn from './SelectRealtyBtn';

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

	const styles = clsx(s.me_realties_list, 'unlisted');
	const realtiesTitle = me.me_realties.title;
	const realtiesNotFoundTitle = me.me_realties.not_found.title;

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

			<ul className={styles}>
				{realties.map(realty => (
					<AppRealty
						MyRealtyButton={
							<SelectRealtyBtn
								id={realty.id}
								isSelected={selectedIds.includes(realty.id)}
								toggleSelectRealty={toggleSelectRealty}
							/>
						}
						view='list'
						key={realty.id}
						{...realty}
					/>
				))}

				{realties.length === 0 && <p className={s.me_realties_notFound}>{realtiesNotFoundTitle}</p>}
			</ul>
		</main>
	);
};

export default PageMeRealties;
