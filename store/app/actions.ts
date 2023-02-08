import { getLocationAPI } from '../../api/location';
import { AppDispatch } from './../types';
import { appActions } from './reducer';
import { AppLocation, AppTheme, AppUser } from './types';

/**
 * The action that sets the application user to redux store
 * @param user AppUser
 * @returns void
 */
export const setAppUser = (user: AppUser) => {
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

/**
 * The action that load the user's location by IP
 * @returns void
 */
export const loadAppLocation = () => {
	return async (dispatch: AppDispatch) => {
		const { getCityAndCountry } = getLocationAPI();
		const data = await getCityAndCountry();
		dispatch(setAppLocation(data));
	};
};
