import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../hooks/store';
import { setHomeLoading } from '../../../../store/home/actions';
import { RealtyAction, RealtyTerm, RealtyType } from '../../../../types';
import s from './SearchBar.module.scss';
import { SearchBarForm } from './SearchBarForm/SearchBarForm';
import { SearchBarTabs } from './SearchBarTabs/SearchBarTabs';

export type SearchBarFields = {
	type?: RealtyType;
	term?: RealtyTerm;
	price_from?: number;
	price_to?: number;
	rooms?: number;
	address: string;
};

export type SearchBarAddressFields = Pick<SearchBarFields, 'address'>;
export type SearchBarFiltersFields = Omit<SearchBarFields, 'address'>;

export const SearchBar = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const [form, setForm] = useState<SearchBarFields>({ address: '' });
	const [tab, setTab] = useState<RealtyAction>('rent');

	const clearFilters = () => {
		setForm({ address: form.address });
	};

	useEffect(() => {
		const submit = async () => {
			if (!form?.address) return;
			await dispatch(setHomeLoading(true));
			await router.push({
				pathname: `/${router.locale}/s/${tab}`,
				query: { ...form }
			});
			await dispatch(setHomeLoading(false));
		};

		submit();
	}, [form]);

	return (
		<div className={s.sectionSearch_searchBar}>
			<SearchBarTabs
				clearFilters={clearFilters}
				withFilters={Object.keys(form).length > 1}
				tab={tab}
				setTab={setTab}
			/>
			<SearchBarForm
				form={form}
				setForm={setForm}
			/>
		</div>
	);
};
