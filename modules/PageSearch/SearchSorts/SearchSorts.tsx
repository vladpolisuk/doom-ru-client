import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import AppLabel from '../../../components/AppLabel/AppLabel';
import AppSelect from '../../../components/AppSelect/AppSelect';
import { RealtySort } from '../../../types';
import { LocaleSearchSortsSortBy } from '../../../types/locales/search';
import s from './SearchSorts.module.scss';

export const SearchSorts = () => {
	const router = useRouter();
	const t = useTranslation('search').t;
	const { handleSubmit, register, setValue, watch } = useForm<RealtySort>({
		defaultValues: { sort_by: 'DEFAULT' }
	});

	useEffect(() => {
		if (!router.isReady) return;
		if (!router.query.sort_by) return;
		setValue('sort_by', router.query.sort_by)
	}, [router])

	const onSubmit = (data: RealtySort) => {
		const action = router.route.split('/')[2];

		router.push({
			pathname: `/s/${action}`,
			query: {
				...router.query, 
				sort_by: watch('sort_by')
			}
		});
	};

	const sort = t('search_sorts.sort_by', { returnObjects: true }) as LocaleSearchSortsSortBy;

	return (
		<form
			className={s.search_sorts}
			onChange={handleSubmit(onSubmit)}>
			<AppLabel htmlFor={sort.name}>
				<AppSelect
					className={s.search_sorts_sortBy}
					aria-label={sort.label}
					{...register(sort.name)}>
					{sort.options.map(option => (
						<AppSelect.Option
							key={option.value}
							aria-label={option.title}
							value={option.value}>
							{option.title}
						</AppSelect.Option>
					))}
				</AppSelect>
			</AppLabel>
		</form>
	);
};