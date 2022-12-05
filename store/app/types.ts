/**
 * The application state type
 */
export type AppState = {
    /**
     * The application user
     */
    user: AppUser | null;
    /**
     * The application theme
     */
    theme: AppTheme | "";
    /**
     * The application location
     */
    location: AppLocation | null;
}

/**
 * The application user state type
 */
export type AppUser = {
    /**
     * The user's nickname
     */
    nickname: string;
    /**
     * The user's first name
     */
    name: string;
    /**
     * The user's last name
     */
    surname: string;
    /**
     * The user's email address
     */
    email: string;
} | null;

/**
 * The application theme type
 * @value system | light | dark
 */
export type AppTheme = "system" | "light" | "dark";

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
}