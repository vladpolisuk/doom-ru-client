import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AppLabel from '../../../components/AppLabel/AppLabel';
import AppSelect from '../../../components/AppSelect/AppSelect';
import { useTranslation } from '../../../hooks/useTranslation';
import locales from '../../../locales';
import { RealtySort, RealtySortBy, RealtySorts } from '../../../types';
import s from './SearchSorts.module.scss';

export const SearchSorts = () => {
	const router = useRouter();
	const search = useTranslation('search') as typeof locales.en.search;
	const { handleSubmit, register, setValue, watch } = useForm<RealtySort>({
		defaultValues: { sort_by: 'DEFAULT' }
	});

	useEffect(() => {
		if (!router.isReady) return;
		if (!router.query.sort_by) return;
		setValue('sort_by', router.query.sort_by as RealtySortBy);
	}, [router]);

	const onSubmit = (data: RealtySort) => {
		const action = router.route.split('/')[3];

		router.push({
			pathname: `/[lang]/s/${action}`,
			query: {
				...router.query,
				sort_by: watch('sort_by')
			}
		});
	};

	const sort = search.search_sorts.sort_by;

	return (
		<form
			className={s.search_sorts}
			onChange={handleSubmit(onSubmit)}>
			<AppLabel htmlFor={sort.name}>
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
			</AppLabel>
		</form>
	);
};
