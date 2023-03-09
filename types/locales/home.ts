import { Locale } from '../../store/app/types';

export interface LocaleHome {
	locale: Locale;
	home_title: string;
	home_section_search: LocaleHomeSectionSearch;
	home_section_quickLinks: LocaleHomeSectionQuickLinks;
}

export interface LocaleHomeSectionSearch {
	section_title: string;
	search_input: LocaleHomeSearchInput;
	search_button: LocaleHomeSearchButton;
	search_filters: LocaleHomeSearchFilters;
	search_tabs: LocaleHomeSearchTab[];
}

export interface LocaleHomeSearchInput {
	placeholder: string;
	title: string;
}

export interface LocaleHomeSearchButton {
	title: string;
	text: string;
}

export interface LocaleHomeSearchFilters {
	title: string;
	text: string;
}

export interface LocaleHomeSearchTab {
	title: string;
	text: string;
}

export interface LocaleHomeSectionQuickLinks {
	section_title: string;
	links_board: LocaleHomeLinksBoard[];
}

export interface LocaleHomeLinksBoard {
	title: string;
	content: LocaleHomeContent;
	image?: LocaleHomeImage;
}

export interface LocaleHomeContent {
	links?: LocaleHomeLink[];
	map?: string;
}

export interface LocaleHomeLink {
	title: string;
	text: string;
	url: string;
}

export interface LocaleHomeImage {
	src: string;
	alt: string;
}
