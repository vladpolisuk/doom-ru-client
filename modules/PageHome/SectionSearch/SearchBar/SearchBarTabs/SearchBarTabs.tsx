import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import AppButton from '../../../../../components/AppButton/AppButton';
import { LocaleHomeSearchTab } from '../../../../../types/locales/home';
import s from './SearchBarTabs.module.scss';

export const SearchBarTabs = () => {
	const [tab, setTab] = useState(0);
	const { t } = useTranslation('home');

	const tabs: LocaleHomeSearchTab[] = t('home_section_search.search_tabs', {
		returnObjects: true
	});

	const components = tabs.map(({ title, text }, i) => (
		<li key={text}>
			<AppButton
				title={title}
				color='none'
				onClick={() => setTab(i)}
				className={s.sectionSearch_searchBar_tabs_item}>
				{text}
			</AppButton>
		</li>
	));

	const styles = clsx(s.sectionSearch_searchBar_tabs, 'unlisted');
	const dynamicStyles = { left: `${80 * tab}px` };

	return (
		<div className={s.sectionSearch_searchBar_nav}>
			<ul className={styles}>{components}</ul>

			<div
				style={dynamicStyles}
				className={s.sectionSearch_searchBar_tabs_line}></div>
		</div>
	);
};
