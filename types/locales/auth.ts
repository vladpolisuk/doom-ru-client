import { Locale } from '.';

export interface LocaleAuth {
	locale: Locale;
	auth_signin: LocaleAuthSignIn;
}

export interface LocaleAuthSignIn {
	name: string;
	title: string;
	logo: string;
	fields: LocaleAuthField[];
	btn: LocaleAuthBtn;
}

export interface LocaleAuthField {
	page: LocaleAuthFieldPage;
	name: LocaleAuthFieldName;
	fieldType: LocaleAuthFieldType;
	type: string;
	title: string;
	label: string;
	required?: boolean;
	minLength?: number;
}

export type LocaleAuthFieldPage = 'both' | 'signin' | 'signup';

export type LocaleAuthFieldName = 'email' | 'password' | 'remember';

export type LocaleAuthFieldType = 'input' | 'checkbox';

export interface LocaleAuthBtn {
	cancel: LocaleAuthCancel;
	submit: LocaleAuthSubmit;
}

export interface LocaleAuthCancel {
	title: string;
	type: string;
	label: string;
}

export interface LocaleAuthSubmit {
	title: string;
	type: string;
	label: string;
}
