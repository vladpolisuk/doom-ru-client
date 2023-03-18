import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import { FaTimes } from 'react-icons/fa';
import AppButton from '../../../../../components/AppButton/AppButton';
import { RealtyAction } from '../../../../../types';
import { LocaleHomeSearchTab } from '../../../../../types/locales/home';
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
	const { t } = useTranslation('home');

	const filtersName = t('home_section_search.search_modal.name').toUpperCase();
	const tabs: LocaleHomeSearchTab[] = t('home_section_search.search_tabs', {
		returnObjects: true
	});

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
									onClick={() => setTab(type)}
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

					{filtersName}
				</div>
			)}
		</div>
	);
};
