import s from './SearchBar.module.scss';
import { SearchBarForm } from './SearchBarForm/SearchBarForm';
import { SearchBarTabs } from './SearchBarTabs/SearchBarTabs';

export const SearchBar = () => {
	return (
		<div className={s.sectionSearch_searchBar}>
			<SearchBarTabs />
			<SearchBarForm />
		</div>
	);
};
