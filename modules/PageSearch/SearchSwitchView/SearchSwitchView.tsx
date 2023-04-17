import clsx from 'clsx';
import { FC } from 'react';
import { FaListUl, FaThLarge } from 'react-icons/fa';
import AppButton from '../../../components/AppButton/AppButton';
import { useTranslation } from '../../../hooks/useTranslation';
import { View } from '../PageSearch';
import s from './SearchSwitchView.module.scss';

type Props = {
	view: View;
	setView: (view: View) => void;
};

export const SearchSwitchView: FC<Props> = ({ view, setView }) => {
	const search = useTranslation('search');

	const listHandler = () => setView('list');
	const gridHandler = () => setView('grid');

	const list_label = search.search_result.btn.list.label;
	const grid_label = search.search_result.btn.grid.label;
	const styles_grid = clsx(s.search_switchView_button, view === 'grid' ? s['search_switchView_button--active'] : '');
	const styles_list = clsx(s.search_switchView_button, view === 'list' ? s['search_switchView_button--active'] : '');

	return (
		<div className={s.search_switchView}>
			<AppButton
				onlyARIA
				resetStyles
				aria-label={grid_label}
				className={styles_grid}
				onClick={gridHandler}>
				<FaThLarge size={20} />
			</AppButton>

			<AppButton
				onlyARIA
				resetStyles
				aria-label={list_label}
				className={styles_list}
				onClick={listHandler}>
				<FaListUl size={20} />
			</AppButton>
		</div>
	);
};
