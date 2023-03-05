import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { FormEvent, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import AppButton from '../../../components/AppButton/AppButton';
import AppCheckbox from '../../../components/AppCheckbox/AppCheckbox';
import AppInput from '../../../components/AppInput/AppInput';
import AppLabel from '../../../components/AppLabel/AppLabel';
import AppSelect from '../../../components/AppSelect/AppSelect';
import { RealtyFilter, RealtyFilters } from '../../../types';
import { LocaleSearchFilter } from '../../../types/locales/search';
import extractNumberFromString from '../../../utils/ui/extractNumberFromString';
import getNumberWithSpaces from '../../../utils/ui/getNumberWithSpaces';
import getParsedQueries from '../../../utils/ui/getParsedQueries';
import s from './SearchFilters.module.scss';

export const SearchFilters = () => {
	const router = useRouter();
	const { t } = useTranslation('search');
	const { handleSubmit, register, reset, setValue, getValues } = useForm<RealtyFilter>();
	const action = router.route.split('/')[2];

	useEffect(() => {
		if (!router.query) return;
		const queries = getParsedQueries(router.query);
		const values = getValues();
		// @ts-ignore
		for (const key in values) setValue(key, queries[key]);
	}, [router.query]);

	const onSubmit: SubmitHandler<RealtyFilter> = data => {
		console.log(data);
		const queries: any = getParsedQueries(data);
		const query: any = {};
		for (let i in queries) if (queries[i]) query[i] = queries[i];
		router.push({ pathname: `/s/${action}`, query });
	};

	const onReset = () => {
		reset();
		router.push({ pathname: `/s/${action}` });
	};

	const inputNumber = (name: RealtyFilters) => (event: FormEvent<HTMLInputElement>) => {
		const value = extractNumberFromString((event.target as HTMLInputElement).value);
		if (!value) return;
		const result = getNumberWithSpaces(value);
		setValue(name, result || value);
	};

	const resetButtonStyles = clsx(s.search_filters_resetButton, 'active--scale', 'transition');
	const submitButtonStyles = clsx(s.search_filters_submitButton, 'active--scale');
	const resetButtonName = t('search_filters_btn.reset.name');
	const resetButtonLabel = t('search_filters_btn.reset.label');
	const submitButtonName = t('search_filters_btn.submit.name');
	const submitButtonLabel = t('search_filters_btn.submit.label');

	const filters: LocaleSearchFilter[] = t('search_filters', { returnObjects: true });
	const components = filters?.map(filter => {
		if (action !== filter.page && filter.page !== 'both') return;

		switch (filter.type) {
			case 'text':
				return (
					<AppLabel
						key={filter.name}
						htmlFor={filter.name}>
						<p>{filter.title}</p>
						<AppInput
							onlyARIA
							type={filter.typeInput}
							title={filter.label}
							className={s.search_filters_input}
							placeholder={filter.label}
							{...register(filter.name)}
						/>
					</AppLabel>
				);

			case 'option':
				return (
					<AppLabel
						key={filter.name}
						htmlFor={filter.name}>
						<p>{filter.title}</p>
						<AppSelect
							aria-label={filter.label}
							{...register(filter.name)}>
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
						<div className={s.search_filters_pair}>
							<AppInput
								onlyARIA
								min={filter.from?.min}
								type={filter.from?.typeInput}
								title={filter.from?.label}
								className={s.search_filters_input}
								placeholder={filter.from?.title}
								onInput={inputNumber(filter.from?.name as RealtyFilters)}
								{...register(filter.from?.name as RealtyFilters)}
							/>
							<AppInput
								onlyARIA
								min={filter.to?.min}
								type={filter.to?.typeInput}
								title={filter.to?.label}
								className={s.search_filters_input}
								placeholder={filter.to?.title}
								onInput={inputNumber(filter.to?.name as RealtyFilters)}
								{...register(filter.to?.name as RealtyFilters)}
							/>
						</div>
					</AppLabel>
				);

			case 'checkbox':
				return (
					<AppLabel
						row
						key={filter.name}>
						<AppCheckbox
							onlyARIA
							title={filter.label}
							{...register(filter.name)}
						/>
						<p>{filter.title}</p>
					</AppLabel>
				);
		}
	});

	return (
		<aside>
			<form
				onReset={onReset}
				onSubmit={handleSubmit(onSubmit)}
				className={s.search_filters}>
				{components}

				<AppButton
					onlyARIA
					type='reset'
					color='transparent'
					title={resetButtonLabel}
					className={resetButtonStyles}>
					{resetButtonName}
				</AppButton>

				<AppButton
					onlyARIA
					type='submit'
					title={submitButtonLabel}
					className={submitButtonStyles}>
					{submitButtonName}
				</AppButton>
			</form>
		</aside>
	);
};
