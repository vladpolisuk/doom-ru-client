import clsx from 'clsx';
import { useRouter } from 'next/router';
import { FormEvent, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import AppButton from '../../../components/AppButton/AppButton';
import AppCheckbox from '../../../components/AppCheckbox/AppCheckbox';
import AppInput from '../../../components/AppInput/AppInput';
import AppLabel from '../../../components/AppLabel/AppLabel';
import AppSelect from '../../../components/AppSelect/AppSelect';
import { useTranslation } from '../../../hooks/useTranslation';
import { RealtyFilter, RealtyFilters } from '../../../types';
import removeProperty from '../../../utils/removeProperty';
import extractNumberFromString from '../../../utils/ui/extractNumberFromString';
import getNumberWithSpaces from '../../../utils/ui/getNumberWithSpaces';
import parseQueries from '../../../utils/ui/parseQueries';
import s from './SearchFilters.module.scss';

export const SearchFilters = () => {
	const router = useRouter();
	const search = useTranslation('search');
	const { handleSubmit, register, reset, setValue, getValues } = useForm<RealtyFilter>();
	const action = router.route.split('/')[3];

	useEffect(() => {
		const urlQueries = removeProperty(router.query, 'page', 'sort_by', 'lang');
		if (!router.query) return;
		const parsedQueries = parseQueries(urlQueries) as any;
		const values = getValues();
		for (const key in values) {
			if (typeof parsedQueries[key] === 'number') {
				setValue(key as any, getNumberWithSpaces(parsedQueries[key]));
			} else setValue(key as any, parsedQueries[key]);
		}
	}, [router.query, getValues, setValue]);

	const onSubmit: SubmitHandler<RealtyFilter> = data => {
		const queries: any = parseQueries(data);
		const query: any = {};
		for (let i in queries) {
			if (queries[i]) {
				if (typeof queries[i] === 'string') {
					const num = extractNumberFromString(queries[i]);
					if (num) query[i] = num;
					else query[i] = queries[i];
				} else query[i] = queries[i];
			}
		}
		router.push({
			pathname: `/[lang]/s/${action}`,
			query: {
				...query,
				lang: router.query.lang
			}
		});
	};

	const onReset = () => {
		reset();
		router.push({
			pathname: `/[lang]/s/${action}`,
			query: {
				lang: router.query.lang
			}
		});
	};

	const inputNumber = (name: RealtyFilters) => (event: FormEvent<HTMLInputElement>) => {
		const value = extractNumberFromString((event.target as HTMLInputElement).value);
		if (!value) return;
		const result = getNumberWithSpaces(value);
		setValue(name, result || value);
	};

	const resetButtonStyles = clsx(s.search_filters_resetButton, 'active--scale', 'transition');
	const submitButtonStyles = clsx(s.search_filters_submitButton, 'active--scale');
	const resetButtonName = search.search_filters_btn.reset.name;
	const resetButtonLabel = search.search_filters_btn.reset.label;
	const submitButtonName = search.search_filters_btn.submit.name;
	const submitButtonLabel = search.search_filters_btn.submit.label;
	const filters = search.search_filters;

	return (
		<aside>
			<form
				onReset={onReset}
				onSubmit={handleSubmit(onSubmit)}
				className={s.search_filters}>
				{filters?.map(filter => {
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
										{...register(filter.name as RealtyFilters)}
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
										{...register(filter.name as RealtyFilters)}>
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
											title={filter.from?.label}
											className={s.search_filters_input}
											placeholder={filter.from?.title}
											onInput={inputNumber(filter.from?.name as RealtyFilters)}
											{...register(filter.from?.name as RealtyFilters)}
										/>
										<AppInput
											onlyARIA
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
										{...register(filter.name as RealtyFilters)}
									/>
									<p>{filter.title}</p>
								</AppLabel>
							);
					}
				})}

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
