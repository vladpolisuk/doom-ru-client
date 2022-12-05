import s from './SearchBar.module.scss';
import { SearchBarForm } from './SearchBarForm/SearchBarForm';
import { SearchBarTabs } from './SearchBarTabs/SearchBarTabs';

export const SearchBar = () => {
    return (
        <div className={s.searchbar}>
            <SearchBarTabs />
            <SearchBarForm />
        </div>
    )
}
