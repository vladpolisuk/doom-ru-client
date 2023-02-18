import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { AppButton } from '../../../components/AppButton/AppButton';
import { AppCheckbox } from '../../../components/AppCheckbox/AppCheckbox';
import { AppInput } from '../../../components/AppInput/AppInput';
import { AppLabel } from '../../../components/AppLabel/AppLabel';
import { AppSelect } from '../../../components/AppSelect/AppSelect';
import { RealtyFilter } from '../../../types';
import { LocaleSearchFilter } from '../../../types/locales/search';
import s from './SearchFilters.module.scss';

export const SearchFilters = () => {
	const router = useRouter();
	const { t } = useTranslation('search');
	const {
		handleSubmit,
		register,
		reset,
		control: { _defaultValues }
	} = useForm<RealtyFilter>({
		defaultValues: router.query
	});

	const onSubmit: SubmitHandler<RealtyFilter> = data =>
		console.log({
			...data,
			action: router.query.action
		});

	const resetFields = (event: MouseEvent<HTMLButtonElement>) => {
		// @ts-ignore
		for (let i in _defaultValues) _defaultValues[i] = undefined;
		reset();
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
								title={filter.from?.label}
								className={s.search_filters_input}
								placeholder={filter.from?.title}
								{...register(filter.from?.name as any)}
							/>
							<AppInput
								onlyARIA
								title={filter.to?.label}
								className={s.search_filters_input}
								placeholder={filter.to?.title}
								{...register(filter.to?.name as any)}
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
