import locales from '../../locales';

/** ## App State
 * The application state type
 */
export type AppState = {
	/**
	 * The application user
	 */
	user: AppUser | null;
	/**
	 * The user loading status
	 */
	userLoading: boolean;
	/**
	 * The application theme
	 */
	theme: AppTheme | '';
	/**
	 * The application location
	 */
	location: AppLocation | null;
	/**
	 * The applications locale
	 */
	locale: Locale;
	/**
	 * The application view modal
	 */
	signInView: boolean;
};

/**
 * The application user state type
 */
export type AppUser = {
	/**
	 * The user's id
	 */
	id: number;
	/**
	 * The user's first name
	 */
	name: string;
	/**
	 * The user's last name
	 */
	secondName: string;
	/**
	 * The user's email address
	 */
	email: string;
	/**
	 * The user's avatar url
	 */
	avatar?: string;
	/**
	 * The user's bio
	 */
	bio?: string;
	/**
	 * The user's city
	 */
	city?: string;
	/**
	 * The user's favorite realties
	 */
	favorites: number[];
	/**
	 * the user's phone
	 */
	phone: string;
};

/**
 * The application theme type
 * @value system | light | dark
 */
export type AppTheme = 'system' | 'light' | 'dark';

/**
 * The application location type
 */
export type AppLocation = {
	/**
	 * The user's city name
	 */
	city: string;
	/**
	 * The user's country name
	 */
	country: string;
};

/**
 * The application locale type
 */
export type Locale = 'ru' | 'en';

/**
 * The application locale pages type
 */
export type Locales = keyof typeof locales.en;
