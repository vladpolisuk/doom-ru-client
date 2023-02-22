import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import React, { FC, use } from 'react';
import { FaListUl, FaThLarge } from 'react-icons/fa';
import AppButton from '../../../components/AppButton/AppButton';
import { View } from '../PageSearch';
import s from './SearchSwitchView.module.scss';

type Props = {
	view: View;
	handler: (view: View) => void;
};

export const SearchSwitchView: FC<Props> = ({ view, handler }) => {
	const t = useTranslation('search').t;

	const listHandler = () => handler('list');
	const gridHandler = () => handler('grid');

	const list_label = t('search_result_btn.list.label');
	const grid_label = t('search_result_btn.grid.label');

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
