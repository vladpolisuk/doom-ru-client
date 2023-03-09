import { AxiosError } from 'axios';
import AuthAPI from '../../api/auth';
import LocationAPI from '../../api/location';
import { SendSignInFields, SendSignUpFields, SendVerifyFields } from '../../types/api/auth';
import { AppDispatch, RootState } from './../types';
import { appActions } from './reducer';
import { AppLocation, AppTheme, AppUser, Locale } from './types';

/**
 * The action that sets the application user to redux store
 * @param user AppUser
 * @returns void
 */
const setAppUser = (user: AppUser) => {
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
		const api = new LocationAPI();
		const data = await api.getCityAndCountry();
		dispatch(setAppLocation(data));
	};
};

/** ## App Verify User
 * The action that send verify request
 */
export const appVerify = async (data: SendVerifyFields, lang: Locale) => {
	try {
		const api = new AuthAPI(lang);
		await api.verify(data);
		return { success: true };
	} catch (error) {
		const axiosError: any = error as AxiosError;

		return {
			success: false,
			message: axiosError.response.data.message
		};
	}
};

/** ## App Sign Up
 * The action that send signup request
 */
export const appSignUp = (data: SendSignUpFields) => {
	return async (dispatch: AppDispatch, getState: () => RootState) => {
		try {
			const lang = getState().app.locale;
			const api = new AuthAPI(lang);
			const response = await api.signUp(data);
			const user = response.data.data.user;
			const token = response.data.data.token;
			localStorage.setItem('token', token);
			dispatch(setAppUser(user));
			return { success: true };
		} catch (error) {
			const axiosError: any = error as AxiosError;

			return {
				success: false,
				message: axiosError.response.data.message
			};
		}
	};
};

/** ## App Sign In
 * The action that send signin request
 */
export const appSignIn = (data: SendSignInFields) => {
	return async (dispatch: AppDispatch, getState: () => RootState) => {
		try {
			const lang = getState().app.locale;
			const api = new AuthAPI(lang);
			const response = await api.signIn(data);
			const user = response.data.data.user;
			const token = response.data.data.token;
			localStorage.setItem('token', token);
			dispatch(setAppUser(user));
			return { success: true };
		} catch (error) {
			const axiosError: any = error as AxiosError;

			return {
				success: false,
				message: axiosError.response.data.message
			};
		}
	};
};

/** ## App Me
 * The action that send me request
 */
export const appMe = () => {
	return async (dispatch: AppDispatch, getState: () => RootState) => {
		try {
			const lang = getState().app.locale;
			const api = new AuthAPI(lang);
			const jwtToken = localStorage.getItem('token');
			if (!jwtToken) return { success: false, message: '' };
			const response = await api.me(jwtToken);
			const user = response.data.data.user;
			dispatch(setAppUser(user));
			return { success: true };
		} catch (error: any) {
			const axiosError: any = error as AxiosError;

			localStorage.removeItem('token');

			return {
				success: false,
				message: axiosError.response.data.message
			};
		}
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

export const appSignOut = () => {
	return async (dispatch: AppDispatch) => {
		dispatch(appActions.setAppUser(null));
		localStorage.removeItem('token');
	};
};
