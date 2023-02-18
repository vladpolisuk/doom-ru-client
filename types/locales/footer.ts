import { Locale } from '.';

export interface LocaleFooter {
	locale: Locale;
	title: string;
	disclaimer: string;
	links: {
		github: LocaleFooterGitHub;
		linkedin: LocaleFooterLinkedIn;
	};
}

export interface LocaleFooterGitHub {
	title: string;
	url: string;
}

export interface LocaleFooterLinkedIn {
	title: string;
	url: string;
}
