import AuthAPI from '../../api/auth';
import { SendSignInFields, SendSignUpFields, SendVerifyFields } from '../../types/api/auth';
import { AppDispatch, RootState } from '../types';
import { setAppUser } from './actions';
import { Locale } from './types';

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

/** ## App Sign Up
 * The action that send signup request
 */
export const appSignUp = (data: SendSignUpFields) => {
	return async (dispatch: AppDispatch, getState: () => RootState) => {
		try {
			const lang = getState().app.locale;
			const api = new AuthAPI(lang);
			const response = await api.signUp(data);
			const user = response.data.user;
			const token = response.data.token;
			localStorage.setItem('token', token);
			dispatch(setAppUser(user));
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
export const appSignIn = (data: SendSignInFields) => {
	return async (dispatch: AppDispatch, getState: () => RootState) => {
		try {
			const lang = getState().app.locale;
			const api = new AuthAPI(lang);
			const response = await api.signIn(data);
			const user = response.data.user;
			const token = response.data.token;
			localStorage.setItem('token', token);
			dispatch(setAppUser(user));
			return { success: true };
		} catch (error: any) {
			return {
				success: false,
				message: error.message
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
			const jwtToken = localStorage.getItem('token');
			if (!jwtToken) return { success: false, message: '' };
			const lang = getState().app.locale;
			const api = new AuthAPI(lang, jwtToken);
			const response = await api.me();
			const user = response.data.user;
			dispatch(setAppUser(user));
			return { success: true };
		} catch (error: any) {
			localStorage.removeItem('token');

			return {
				success: false,
				message: error.message
			};
		}
	};
};
