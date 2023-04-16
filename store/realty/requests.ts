import UserAPI from '../../api/user';
import { setAppUserFavorites } from '../app/actions';
import { Locale } from '../app/types';
import { AppDispatch, AppGetState } from '../types';
import { RealtyAPI } from './../../api/realty';
import { RealtySubmit } from './types';

/** ## Get Realty
 * The request to load realty data
 */
export const getRealty = async (lang: Locale, id: number) => {
	try {
		const api = new RealtyAPI(lang);
		const response = await api.getRealty(id);
		return {
			data: response.data,
			success: true
		};
	} catch (error: any) {
		return {
			message: error.message,
			success: false
		};
	}
};

/** ## Get Realty User
 * The request to load realty user data
 */
export const fetchRealtyUser = async (lang: Locale, id: number) => {
	try {
		const api = new UserAPI(lang);
		const response = await api.getOneUser(id);
		return {
			data: response.data,
			success: true
		};
	} catch (error: any) {
		return {
			message: error.message,
			success: false
		};
	}
};

/** ## Add Realty To Favorite
 * The request that add realty to favorites by id
 * @param id number
 */
export const addRealtyToFavorite = (id: number) => {
	return async (dispatch: AppDispatch, getState: AppGetState) => {
		try {
			const lang = getState().app.locale;
			const api = new RealtyAPI(lang);
			const response = await api.addToFavorite(id);
			await dispatch(setAppUserFavorites(response.data));
			return {
				data: response.data,
				success: true
			};
		} catch (error: any) {
			return {
				message: error.message,
				success: false
			};
		}
	};
};

/** ## Remove Realty From Favorite
 * The request that remove realty from favorites by id
 * @param id number
 */
export const removeRealtyFromFavorite = (id: number) => {
	return async (dispatch: AppDispatch, getState: AppGetState) => {
		try {
			const lang = getState().app.locale;
			const api = new RealtyAPI(lang);
			const response = await api.removeFromFavorite(id);
			await dispatch(setAppUserFavorites(response.data));
			return {
				data: response.data,
				success: true
			};
		} catch (error: any) {
			return {
				message: error.message,
				success: false
			};
		}
	};
};

/** ## Create Realty
 * The request that create realty
 * @param data RealtyForm
 */
export const createRealty = async (data: RealtySubmit, lang: Locale) => {
	try {
		const api = new RealtyAPI(lang);
		const response = await api.createRealty(data);
		return {
			data: response.data,
			success: true
		};
	} catch (error: any) {
		return {
			message: error.message,
			success: false
		};
	}
};
