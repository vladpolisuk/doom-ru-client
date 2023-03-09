import { Locale } from '../../store/app/types';

export interface LocaleAuth {
	locale: Locale;
	auth_signin: LocaleAuthSignIn;
}

export interface LocaleAuthSignIn {
	name: string;
	title: string;
	logo: string;
	fields: LocaleAuthSignInField[] | LocaleAuthSignUpField[];
	btn: LocaleAuthBtn;
}

export interface LocaleAuthSignInField {
	page: LocaleAuthFieldPage;
	name: LocaleAuthSignInFieldName;
	fieldType: LocaleAuthFieldType;
	type: string;
	title: string;
	label: string;
	showPasswordButton?: boolean;
	minLength?: LocaleAuthFieldMinLength;
	validate?: LocaleAuthFieldValidate;
	required?: LocaleAuthFieldRequired;
	pattern?: LocaleAuthFieldPattern;
}

export type LocaleAuthFieldValidate = {
	equalValueField: LocaleAuthSignUpFieldName;
	message: string;
};

export type LocaleAuthSignUpField = Omit<LocaleAuthSignInField, 'name'> & {
	name: LocaleAuthSignUpFieldName;
};

export interface LocaleAuthFieldMinLength {
	value: number;
	message: string;
}

export interface LocaleAuthFieldRequired {
	value: boolean;
	message: string;
}

export interface LocaleAuthFieldPattern {
	value: string;
	message: string;
}

export type LocaleAuthFieldPage = 'both' | 'signin' | 'signup';

export type LocaleAuthSignInFieldName = 'email' | 'password' | 'remember';

export type LocaleAuthSignUpFieldName = 'email' | 'password' | 'repeatPassword' | 'name' | 'secondName';

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
