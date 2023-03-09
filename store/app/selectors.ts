import { RootState } from '../types';

/**
 * The selector that returns the application user from redux store
 * @param state RootState
 * @returns `AppUser`
 */
export const getAppUser = (state: RootState) => state.app.user;

/**
 * The selector that returns the application user loading status from redux store
 * @param state RootState
 * @returns `boolean`
 */
export const getAppUserLoading = (state: RootState) => state.app.userLoading;

/**
 * The selector that returns the application theme from redux store
 * @param state RootState
 * @returns `AppTheme`
 */
export const getAppTheme = (state: RootState) => state.app.theme;

/**
 * The selector that returns the application location from redux store
 * @param state RootState
 * @returns `AppLocation`
 */
export const getAppLocation = (state: RootState) => state.app.location;

/**
 * The selector that returns the application locale from redux store
 * @param state RootState
 * @returns `AppLocale`
 */
export const getAppLocale = (state: RootState) => state.app.locale;
