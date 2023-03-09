import { Locale } from '../../store/app/types';

export interface LocaleMe {
	locale: Locale;
	me_title: string;
	aside: LocaleMeAside;
}

export interface LocaleMeAside {
	tabs: LocaleMeAsideTab[];
	logout: LocaleMeAsideLogOut;
}

export interface LocaleMeAsideTab {
	id: number;
	name: string;
	url: string;
	title: string;
	icon: LocaleMeAsideTabIcon;
}

export type LocaleMeAsideTabIcon =
	| 'FaRegUserCircle'
	| 'FaRegBell'
	| 'FaRegHeart'
	| 'FaRegListAlt'
	| 'FaHistory'
	| 'FaRegSun';

export interface LocaleMeAsideLogOut {
	text: string;
	title: string;
}
