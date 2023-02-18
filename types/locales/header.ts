import { Locale } from '.';

export interface LocaleHeader {
	locale: Locale;
	header_logo_link_label: string;
	header_nav_links: LocaleHeaderNavLink[];
	header_user_auth: LocaleHeaderUserAuth;
	header_user_profile: LocaleHeaderUserProfile;
}

export interface LocaleHeaderNavLink {
	name: string;
	url: string;
	title: string;
}

export interface LocaleHeaderUserAuth {
	signin: LocaleHeaderSignin;
}

export interface LocaleHeaderSignin {
	name: string;
	title: string;
}

export interface LocaleHeaderUserProfile {
	profile: LocaleHeaderProfile;
	favorites: LocaleHeaderFavorites;
	notifications: LocaleHeaderNotifications;
}

export interface LocaleHeaderProfile {
	title: string;
}

export interface LocaleHeaderFavorites {
	title: string;
}

export interface LocaleHeaderNotifications {
	title: string;
}
