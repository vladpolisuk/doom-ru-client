import { RealtyFilters, RealtySortBy, RealtySorts } from '..';

export interface LocaleSearch {
	locale: string;
	search_title: string;
	search_filters: LocaleSearchFilter[];
	search_sorts: LocaleSearchSorts;
	btn: LocalSearchBtn;
}

export interface LocaleSearchFilter {
	name: RealtyFilters;
	title: string;
	page: LocaleSearchFilterPage;
	type: string;
	typeInput?: string;
	label?: string;
	options?: LocaleSearchOption[];
	from?: LocaleSearchFilterFrom;
	to?: LocaleSearchFilterTo;
}

export type LocaleSearchFilterPage = 'both' | 'rent' | 'buy';

export interface LocaleSearchOption {
	value: RealtyFilters;
	title: string;
}

export interface LocaleSearchFilterFrom {
	name: RealtyFilters;
	label: string;
	title: string;
	min?: number;
	max?: number;
	typeInput?: string;
}

export interface LocaleSearchFilterTo {
	name: RealtyFilters;
	label: string;
	title: string;
	min?: number;
	max?: number;
	typeInput?: string;
}

export interface LocaleSearchSorts {
	sort_by: LocaleSearchSortsSortBy;
}

export interface LocaleSearchSortsSortBy {
	name: RealtySorts;
	type: string;
	label: string;
	title: string;
	options: LocaleSearchSortsSortByOption[];
}

export interface LocaleSearchSortsSortByOption {
	value: RealtySortBy;
	title: string;
}

export interface LocalSearchBtn {
	reset: LocalSearchBtnReset;
	submit: LocalSearchBtnSubmit;
}

export interface LocalSearchBtnReset {
	name: string;
	label: string;
}

export interface LocalSearchBtnSubmit {
	name: string;
	label: string;
}
