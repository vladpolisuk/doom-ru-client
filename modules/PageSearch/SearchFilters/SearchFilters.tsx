import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { AppButton } from '../../../components/AppButton/AppButton';
import { AppCheckbox } from '../../../components/AppCheckbox/AppCheckbox';
import { AppInput } from '../../../components/AppInput/AppInput';
import { AppLabel } from '../../../components/AppLabel/AppLabel';
import { AppSelect } from '../../../components/AppSelect/AppSelect';
import { RealtyFilter, RealtyFilters } from '../../../types';
import { LocaleSearchFilter } from '../../../types/locales/search';
import { getNumberFromString } from '../../../utils/ui/getNumberFromString';
import { getNumberWithSpaces } from '../../../utils/ui/getNumberWithSpaces';
import { getParsedQueries } from '../../../utils/ui/getParsedQueries';
import s from './SearchFilters.module.scss';

export const SearchFilters = () => {
	const router = useRouter();
	const { t } = useTranslation('search');
	const {
		handleSubmit,
		register,
		reset,
		setValue,
		control: { _defaultValues }
	} = useForm<RealtyFilter>({
		defaultValues: getParsedQueries(router.query)
	});

	const onSubmit: SubmitHandler<RealtyFilter> = data => {
		const queries: any = getParsedQueries(data);
		const query: any = {};
		for (let i in queries) if (queries[i]) query[i] = queries[i];
		router.push({ pathname: `/${router.locale}/s`, query });
	};

	const resetFields = () => {
		// @ts-ignore
		for (let i in _defaultValues) _defaultValues[i] = undefined;
		reset();
	};

	const inputNumber = (name: RealtyFilters) => (event: FormEvent<HTMLInputElement>) => {
		const value = getNumberFromString((event.target as HTMLInputElement).value);
		const result = getNumberWithSpaces(value);
		setValue(name, result || value);
	};

	const resetButtonStyles = clsx(s.search_filters_resetButton, 'active--scale', 'transition');
	const submitButtonStyles = clsx(s.search_filters_submitButton, 'active--scale');
	const resetButtonName = t('btn.reset.name');
	const resetButtonLabel = t('btn.reset.label');
	const submitButtonName = t('btn.submit.name');
	const submitButtonLabel = t('btn.submit.label');

	const filters: LocaleSearchFilter[] = t('search_filters', { returnObjects: true });
	const components = filters?.map(filter => {
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
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={s.search_filters}>
			{components}

			<AppButton
				type='reset'
				onlyARIA
				onClick={resetFields}
				title={resetButtonLabel}
				className={resetButtonStyles}>
				{resetButtonName}
			</AppButton>

			<AppButton
				type='submit'
				onlyARIA
				title={submitButtonLabel}
				className={submitButtonStyles}>
				{submitButtonName}
			</AppButton>
		</form>
	);
};
