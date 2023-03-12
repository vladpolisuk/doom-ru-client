import { AppDispatch } from './../types';
import { appActions } from './reducer';
import { AppLocation, AppTheme, AppUser, Locale } from './types';

/**
 * The action that sets the application user to redux store
 * @param user AppUser
 * @returns void
 */
export const setAppUser = (user: AppUser | null) => {
	return async (dispatch: AppDispatch) => {
		dispatch(appActions.setAppUser(user));
	};
};

/**
 * The action that sets the application theme to redux store
 * @param theme AppTheme
 * @returns void
 */
export const setAppTheme = (theme: AppTheme) => {
	return async (dispatch: AppDispatch) => {
		dispatch(appActions.setAppTheme(theme));
	};
};

/**
 * The action that sets the application location to redux store
 * @param location AppLocation
 * @returns void
 */
export const setAppLocation = (location: AppLocation) => {
	return async (dispatch: AppDispatch) => {
		dispatch(appActions.setAppLocation(location));
	};
};

/** ## App User Loading
 * The action that set user loading status
 */
export const setAppUserLoading = (loading: boolean) => {
	return async (dispatch: AppDispatch) => {
		dispatch(appActions.setAppUserLoading(loading));
	};
};

/** ## App Locale
 * The action that set app locale
 */
export const setAppLocale = (locale: Locale) => {
	return async (dispatch: AppDispatch) => {
		dispatch(appActions.setAppLocale(locale));
	};
};
