import clsx from 'clsx';
import { FC, memo, useEffect } from 'react';
import { FaListUl, FaThLarge } from 'react-icons/fa';
import AppButton from '../../../components/AppButton/AppButton';
import { AppRealtyView } from '../../../components/AppRealty/AppRealty';
import { useTranslation } from '../../../hooks/useTranslation';
import s from './SearchSwitchView.module.scss';

type Props = {
	view: AppRealtyView;
	setView: (view: AppRealtyView) => void;
};

export const SearchSwitchView: FC<Props> = memo(({ view, setView }) => {
	const search = useTranslation('search');

	useEffect(() => {
		const localStorageView = localStorage.getItem('search_view');
		if (!localStorageView) return;
		else setView(localStorageView as AppRealtyView);
	}, []);

	const listHandler = () => {
		localStorage.setItem('search_view', 'list');
		setView('list');
	};

	const gridHandler = () => {
		localStorage.setItem('search_view', 'grid');
		setView('grid');
	};

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
});

SearchSwitchView.displayName = 'SearchSwitchView';
