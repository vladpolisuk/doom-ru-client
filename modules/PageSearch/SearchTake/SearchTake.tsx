import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AppSelect from '../../../components/AppSelect/AppSelect';
import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import { useTranslation } from '../../../hooks/useTranslation';
import { setSearchTake } from '../../../store/search/actions';
import { getSearchTake } from '../../../store/search/selectors';
import s from './SearchTake.module.scss';

type Fields = {
	take: number;
};

const SearchTake = () => {
	const dispatch = useAppDispatch();
	const search = useTranslation('search');
	const take = useAppSelector(getSearchTake);
	const { handleSubmit, register, setValue } = useForm<Fields>({
		defaultValues: { take: take }
	});

	useEffect(() => {
		const localStorageTake = localStorage.getItem('search_take');
		if (!localStorageTake) return;
		const takeNumber = Number(localStorageTake);
		if (takeNumber === take) return;
		setValue('take', takeNumber);
	}, []);

	const onSubmit = async (data: Fields) => {
		if (!data.take) return;
		if (data.take === take) return;
		await dispatch(setSearchTake(+data.take));
		localStorage.setItem('search_take', String(data.take));
	};

	const takeSelectName = search.search_take.select.name;
	const takeSelectLabel = search.search_take.select.name;
	const takeSelectOptions = search.search_take.select.options;

	return (
		<form
			className={s.search_take}
			onChange={handleSubmit(onSubmit)}>
			<AppSelect
				className={s.search_take_select}
				aria-label={takeSelectLabel}
				{...register(takeSelectName as any)}>
				{takeSelectOptions.map(option => (
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

export default SearchTake;
