import clsx from 'clsx';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiSearch, FiSliders } from 'react-icons/fi';
import AppButton from '../../../../../components/AppButton/AppButton';
import AppInput from '../../../../../components/AppInput/AppInput';
import useAppSelector from '../../../../../hooks/useAppSelector';
import { useTranslation } from '../../../../../hooks/useTranslation';
import { getHomeLoading } from '../../../../../store/home/selectors';
import { SearchBarAddressFields, SearchBarFields, SearchBarFiltersFields } from '../SearchBar';
import s from './SearchBarForm.module.scss';
import { SearchBarModal } from './SearchBarModal';

type Props = {
	setForm: (data: SearchBarFields) => void;
	form: SearchBarFields;
};

export const SearchBarForm: FC<Props> = ({ setForm, form }) => {
	const loading = useAppSelector(getHomeLoading);
	const [viewModal, setViewModal] = useState(false);
	const [filters, setFilters] = useState<SearchBarFiltersFields>();
	const { register, handleSubmit } = useForm<SearchBarFields>();
	const home = useTranslation('home');

	const submit = (data: SearchBarAddressFields) => {
		if (!data) return;
		const formData = { ...data, ...filters };
		setForm(formData);
	};

	const filtersSubmit = (data: SearchBarFiltersFields) => {
		setFilters(data);
		const formData = { ...data, address: form?.address };
		setForm(formData);
	};

	const inputTitle = home.home_section_search.search_input.title;
	const inputPlaceholder = home.home_section_search.search_input.placeholder;
	const filtersTitle = home.home_section_search.search_filters.title;
	const filtersText = home.home_section_search.search_filters.text;
	const submitName = home.home_section_search.search_btn.search.name;
	const submitLabel = home.home_section_search.search_btn.search.label;
	const submitStyles = clsx(s.sectionSearch_searchBar_form_submit, 'active--scale', 'transition');
	const filtersStyles = clsx(s.sectionSearch_searchBar_form_filters, 'active--scale', 'transition');

	return (
		<form
			onSubmit={handleSubmit(submit)}
			className={s.sectionSearch_searchBar_form}>
			<AppInput
				type='search'
				title={inputTitle}
				placeholder={inputPlaceholder}
				data-testid='home-search-input'
				iconLeft={<FiSearch className={s.sectionSearch_searchBar_form_inputIcon} />}
				className={s.sectionSearch_searchBar_form_input}
				{...register('address', { required: true })}
			/>

			<AppButton
				type='button'
				title={filtersTitle}
				color='transparent'
				onClick={() => setViewModal(true)}
				className={filtersStyles}>
				<FiSliders className={s.sectionSearch_searchBar_form_filtersIcon} />
				{filtersText}
			</AppButton>

			<SearchBarModal
				onSubmit={filtersSubmit}
				view={viewModal}
				setView={setViewModal}
			/>

			<AppButton
				disabled={loading}
				title={submitLabel}
				className={submitStyles}
				type='submit'>
				{submitName}
			</AppButton>
		</form>
	);
};
