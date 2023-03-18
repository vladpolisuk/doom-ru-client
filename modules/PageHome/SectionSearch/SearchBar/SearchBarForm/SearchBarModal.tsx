import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { FC, FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import AppButton from '../../../../../components/AppButton/AppButton';
import AppInput from '../../../../../components/AppInput/AppInput';
import AppLabel from '../../../../../components/AppLabel/AppLabel';
import AppModal from '../../../../../components/AppModal/AppModal';
import AppSelect from '../../../../../components/AppSelect/AppSelect';
import { LocaleSearchFilter } from '../../../../../types/locales/search';
import removeUndefinedProperties from '../../../../../utils/removeUndefinedProperties';
import extractNumberFromString from '../../../../../utils/ui/extractNumberFromString';
import getNumberWithSpaces from '../../../../../utils/ui/getNumberWithSpaces';
import { SearchBarFiltersFields } from '../SearchBar';
import s from './SearchBarForm.module.scss';

type Props = {
	view: boolean;
	setView: (view: boolean) => void;
	onSubmit: (data: SearchBarFiltersFields) => void;
};

export const SearchBarModal: FC<Props> = ({ view, setView, onSubmit }) => {
	const { register, handleSubmit, reset, setValue } = useForm<SearchBarFiltersFields>();
	const t = useTranslation('search').t;
	const t_home = useTranslation('home').t;

	const filters = t('search_filters', { returnObjects: true }) as LocaleSearchFilter[];
	const buttonStyles = clsx(s.sectionSearch_searchBar_form_filtersForm_button, 'active--scale', 'transition');
	const resetButtonName = t_home('home_section_search.search_btn.reset.name');
	const resetButtonLabel = t_home('home_section_search.search_btn.reset.label');
	const submitButtonName = t_home('home_section_search.search_btn.submit.name');
	const submitButtonLabel = t_home('home_section_search.search_btn.submit.label');
	const modalName = t_home('home_section_search.search_modal.name');

	const onReset = () => {
		reset();
		onSubmit({});
		setView(false);
	};

	const submit = (data: SearchBarFiltersFields) => {
		const formData = removeUndefinedProperties(data);
		onSubmit(formData);
		setView(false);
	};

	const inputNumber = (name: 'price_from' | 'price_to') => (event: FormEvent<HTMLInputElement>) => {
		const value = extractNumberFromString((event.target as HTMLInputElement).value);
		if (!value) return;
		const result = getNumberWithSpaces(value);
		setValue(name, result || (value as any));
	};

	return (
		<AppModal
			view={view}
			setView={setView}>
			<AppModal.Header>
				<h2 className={s.sectionSearch_searchBar_form_filtersForm_name}>{modalName}</h2>
			</AppModal.Header>

			<AppModal.Content>
				<form className={s.sectionSearch_searchBar_form_filtersForm}>
					{filters
						.filter(field => ['term', 'type', 'price', 'rooms'].includes(field.name))
						.map(filter => {
							switch (filter.type) {
								case 'option':
									return (
										<AppLabel
											key={filter.name}
											htmlFor={filter.name}>
											<p>{filter.title}</p>
											<AppSelect
												aria-label={filter.label}
												{...register(filter.name as any)}>
												{filter.options?.map(({ value, title }) => (
													<AppSelect.Option
														key={title}
														aria-label={title}
														value={value}>
														{title}
													</AppSelect.Option>
												))}
											</AppSelect>
										</AppLabel>
									);

								case 'from_to':
									return (
										<AppLabel
											key={filter.name}
											htmlFor={filter.name}>
											<p>{filter.title}</p>
											<div className={s.sectionSearch_searchBar_form_filtersForm_pair}>
												<AppInput
													onlyARIA
													min={filter.from?.min}
													type={filter.from?.typeInput}
													title={filter.from?.label}
													className={s.sectionSearch_searchBar_form_filtersForm_input}
													placeholder={filter.from?.title}
													onInput={inputNumber(filter.from?.name as any)}
													{...register(filter.from?.name as any)}
												/>
												<AppInput
													onlyARIA
													min={filter.to?.min}
													type={filter.to?.typeInput}
													title={filter.to?.label}
													className={s.sectionSearch_searchBar_form_filtersForm_input}
													placeholder={filter.to?.title}
													onInput={inputNumber(filter.to?.name as any)}
													{...register(filter.to?.name as any)}
												/>
											</div>
										</AppLabel>
									);
							}
						})}
				</form>

				<div className={s.sectionSearch_searchBar_form_filtersForm_actions}>
					<AppButton
						onlyARIA
						type='submit'
						onClick={handleSubmit(submit)}
						title={submitButtonLabel}
						className={buttonStyles}>
						{submitButtonName}
					</AppButton>

					<AppButton
						onlyARIA
						type='reset'
						onClick={onReset}
						color='transparent'
						title={resetButtonLabel}
						className={buttonStyles}>
						{resetButtonName}
					</AppButton>
				</div>

				<AppModal.Close onClick={() => setView(false)} />
			</AppModal.Content>
		</AppModal>
	);
};
