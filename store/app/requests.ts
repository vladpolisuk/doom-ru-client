import AuthAPI from '../../api/auth';
import { SendSignInFields, SendSignUpFields, SendVerifyFields } from '../../api/auth/types';
import LocationAPI from '../../api/location';
import UserAPI from '../../api/user';
import { AppUpdateUser } from '../../api/user/types';
import { AppDispatch, AppGetState } from '../types';
import { setAppLocation, setAppUser } from './actions';
import { AppUser, Locale } from './types';

/** ## App Verify User
 * The action that send verify request
 */
export const appVerify = async (data: SendVerifyFields, lang: Locale) => {
	try {
		const api = new AuthAPI(lang);
		await api.verify(data);
		return { success: true };
	} catch (error: any) {
		return {
			success: false,
			message: error.message
		};
	}
};

/** App Update User
 * The request that send the updated user data
 */
export const appUpdateUser = async (data: AppUpdateUser, lang: Locale) => {
	try {
		const api = new UserAPI(lang);
		const response = await api.updateOneUser(data);
		return {
			success: true,
			data: response?.data,
			message: response.message
		};
	} catch (error: any) {
		return {
			success: false,
			message: error.data ? error.data[0].msg : error.message
		};
	}
};

/** App Verify Code
 * The request that send the code to verify
 */
export const appVerifyUser = async (code: number, lang: Locale) => {
	try {
		const api = new UserAPI(lang);
		const response = await api.verifyUser(code);
		return {
			success: true,
			data: response?.data,
			message: response.message
		};
	} catch (error: any) {
		return {
			success: false,
			message: error.data ? error.data[0].msg : error.message
		};
	}
};

/** App Resend Verify
 * The request that resend verify code to email
 */
export const appResendVerify = async (lang: Locale) => {
	try {
		const api = new UserAPI(lang);
		const response = await api.resendVerify();
		return {
			success: true,
			message: response.message
		};
	} catch (error: any) {
		return {
			success: false,
			message: error.message
		};
	}
};

/** ## App Sign Up
 * The action that send signup request
 */
export const appSignUp = (data: SendSignUpFields) => {
	return async (dispatch: AppDispatch, getState: AppGetState) => {
		try {
			const lang = getState().app.locale;
			const api = new AuthAPI(lang);
			const response = await api.signUp(data);
			const user = response.data;
			await dispatch(setAppUser(user));
			return { success: true };
		} catch (error: any) {
			return {
				success: false,
				message: error.message
			};
		}
	};
};

/** ## App Sign In
 * The action that send signin request
 */
export const appSignIn = async (data: SendSignInFields, locale: Locale) => {
	try {
		const api = new AuthAPI(locale);
		const response = await api.signIn(data);
		const user = response.data;
		return { success: true };
	} catch (error: any) {
		return {
			success: false,
			message: error.message
		};
	}
};

/** ## App Me
 * The request that send get me
 */
export const appMe = () => {
	return async (dispatch: AppDispatch, getState: AppGetState) => {
		try {
			const lang = getState().app.locale;
			const api = new AuthAPI(lang);
			const response = await api.me();
			const user = response.data;
			await dispatch(setAppUser(user));
			return { success: true };
		} catch (error: any) {
			let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

			if (favorites) {
				const user: AppUser = {
					...getState().app.user,
					favorites
				};

				await dispatch(setAppUser(user));
			}

			return {
				success: false,
				message: error.message
			};
		}
	};
};

/** ## App Sign Out
 * The request that send sign out
 */
export const appSignOut = () => {
	return async (dispatch: AppDispatch, getState: AppGetState) => {
		try {
			const locale = getState().app.locale;
			const api = new AuthAPI(locale);
			await api.signOut();
			return { success: true };
		} catch (error: any) {
			return {
				success: false,
				message: error.message
			};
		}
	};
};

/** ## Load App Location
 * The action that load the user's location by IP
 */
export const loadAppLocation = () => {
	return async (dispatch: AppDispatch) => {
		const api = new LocationAPI();
		const data = await api.getCityAndCountry();
		await dispatch(setAppLocation(data));
	};
};
