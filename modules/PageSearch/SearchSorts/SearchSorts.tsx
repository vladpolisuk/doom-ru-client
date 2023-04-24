import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AppSelect from '../../../components/AppSelect/AppSelect';
import { useTranslation } from '../../../hooks/useTranslation';
import { RealtySort, RealtySortBy, RealtySorts } from '../../../types';
import s from './SearchSorts.module.scss';

export const SearchSorts = () => {
	const router = useRouter();
	const search = useTranslation('search');
	const { handleSubmit, register, setValue } = useForm<RealtySort>({
		defaultValues: { sort_by: 'DEFAULT' }
	});

	useEffect(() => {
		if (!router.isReady) return;
		setValue('sort_by', router.query.sort_by as RealtySortBy);
	}, [router]);

	const onSubmit = (data: RealtySort) => {
		if (!data.sort_by) return;

		const action = router.route.split('/')[3];

		router.push({
			pathname: `/[lang]/s/${action}`,
			query: {
				...router.query,
				page: 1,
				sort_by: data.sort_by
			}
		});
	};

	const sort = search.search_sorts.sort_by;

	return (
		<form
			className={s.search_sorts}
			onChange={handleSubmit(onSubmit)}>
			<AppSelect
				className={s.search_sorts_sortBy}
				aria-label={sort.label}
				{...register(sort.name as RealtySorts)}>
				{sort.options.map(option => (
					<AppSelect.Option
						key={option.value}
						aria-label={option.title}
						value={option.value}>
						{option.title}
					</AppSelect.Option>
				))}
			</AppSelect>
		</form>
	);
};
