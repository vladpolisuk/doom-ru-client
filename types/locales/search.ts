import { RealtyFilters } from '..';

export interface LocaleSearch {
	locale: string;
	search_title: string;
	search_filters: LocaleSearchFilter[];
	btn: LocalSearchBtn;
}

export interface LocaleSearchFilter {
	name: RealtyFilters;
	title: string;
	type: string;
	label?: string;
	options?: LocaleSearchOption[];
	from?: LocaleSearchOptionFrom;
	to?: LocaleSearchOptionTo;
}

export interface LocaleSearchOption {
	value: RealtyFilters;
	title: string;
}

export interface LocaleSearchOptionFrom {
	name: RealtyFilters;
	label: string;
	title: string;
}

export interface LocaleSearchOptionTo {
	name: RealtyFilters;
	label: string;
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
