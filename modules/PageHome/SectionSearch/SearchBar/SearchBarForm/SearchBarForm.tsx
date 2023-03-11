import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import { FiSearch, FiSliders } from 'react-icons/fi';
import AppButton from '../../../../../components/AppButton/AppButton';
import AppInput from '../../../../../components/AppInput/AppInput';
import { HomeRealtySearch } from '../../../../../types';
import s from './SearchBarForm.module.scss';

export const SearchBarForm = () => {
	const { t } = useTranslation('home');
	const { register, handleSubmit } = useForm<HomeRealtySearch>();

	const onSubmit = (data: HomeRealtySearch) => alert(JSON.stringify(data, null, 4));

	const inputTitle = t('home_section_search.search_input.title');
	const inputPlaceholder = t('home_section_search.search_input.placeholder');
	const filtersTitle = t('home_section_search.search_filters.title');
	const filtersStyles = clsx(s.sectionSearch_searchBar_form_filters, 'active--scale', 'transition');
	const filtersText = t('home_section_search.search_filters.text');
	const submitTitle = t('home_section_search.search_button.title');
	const submitStyles = clsx(s.sectionSearch_searchBar_form_button, 'active--scale', 'transition');
	const submitText = t('home_section_search.search_button.text');

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
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
				title={filtersTitle}
				color='transparent'
				className={filtersStyles}>
				<FiSliders className={s.sectionSearch_searchBar_form_filtersIcon} />
				{filtersText}
			</AppButton>

			<AppButton
				title={submitTitle}
				className={submitStyles}
				type='submit'>
				{submitText}
			</AppButton>
		</form>
	);
};
