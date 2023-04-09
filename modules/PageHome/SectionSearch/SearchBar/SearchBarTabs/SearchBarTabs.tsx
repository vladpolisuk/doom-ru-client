import clsx from 'clsx';
import { FC } from 'react';
import { FaTimes } from 'react-icons/fa';
import AppButton from '../../../../../components/AppButton/AppButton';
import { useTranslation } from '../../../../../hooks/useTranslation';
import { RealtyAction } from '../../../../../types';
import s from './SearchBarTabs.module.scss';

type Props = {
	tab: RealtyAction;
	setTab: (tab: RealtyAction) => void;
	withFilters?: boolean;
	clearFilters: () => void;
};

const searchActionIndex = {
	rent: 0,
	buy: 1
};

export const SearchBarTabs: FC<Props> = ({ tab, setTab, withFilters, clearFilters }) => {
	const home = useTranslation('home');
	const tabs = home.home_section_search.search_tabs;
	const title = home.home_section_search.search_filters.text;
	const styles = clsx(s.sectionSearch_searchBar_tabs, 'unlisted');
	const dynamicStyles = { left: `${80 * searchActionIndex[tab]}px` };

	return (
		<div className={s.sectionSearch_searchBar_nav}>
			<div>
				<ul className={styles}>
					{tabs &&
						tabs.map(({ title, text, type }) => (
							<li key={text}>
								<AppButton
									title={title}
									color='none'
									onClick={() => setTab(type as RealtyAction)}
									className={s.sectionSearch_searchBar_tabs_item}>
									{text}
								</AppButton>
							</li>
						))}
				</ul>

				<div
					style={dynamicStyles}
					className={s.sectionSearch_searchBar_tabs_line}></div>
			</div>

			{withFilters && (
				<div className={s.sectionSearch_searchBar_tabs_badge}>
					<AppButton
						onClick={clearFilters}
						className={s.sectionSearch_searchBar_tabs_filterButton}
						color='none'>
						<FaTimes
							color='white'
							size={14}
						/>
					</AppButton>
					{title}
				</div>
			)}
		</div>
	);
};
