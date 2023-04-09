import clsx from 'clsx';
import { FC, FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import AppButton from '../../../../../components/AppButton/AppButton';
import AppInput from '../../../../../components/AppInput/AppInput';
import AppLabel from '../../../../../components/AppLabel/AppLabel';
import AppModal from '../../../../../components/AppModal/AppModal';
import AppSelect from '../../../../../components/AppSelect/AppSelect';
import { useTranslation } from '../../../../../hooks/useTranslation';
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
	const home = useTranslation('home');
	const search = useTranslation('search');

	const filters = search.search_filters;
	const buttonStyles = clsx(s.sectionSearch_searchBar_form_filtersForm_button, 'active--scale', 'transition');
	const resetButtonName = home.home_section_search.search_btn.reset.name;
	const resetButtonLabel = home.home_section_search.search_btn.reset.label;
	const submitButtonName = home.home_section_search.search_btn.submit.name;
	const submitButtonLabel = home.home_section_search.search_btn.submit.label;
	const modalName = home.home_section_search.search_modal.name;

	const onReset = () => {
		reset();
		onSubmit({});
		setView(false);
	};

	const submit = (data: SearchBarFiltersFields) => {
		data.price_from = data.price_from ? (extractNumberFromString(data.price_from) as number) : undefined;
		data.price_to = data.price_to ? (extractNumberFromString(data.price_to) as number) : undefined;
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
													title={filter.from?.label}
													className={s.sectionSearch_searchBar_form_filtersForm_input}
													placeholder={filter.from?.title}
													onInput={inputNumber(filter.from?.name as any)}
													{...register(filter.from?.name as any)}
												/>
												<AppInput
													onlyARIA
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
