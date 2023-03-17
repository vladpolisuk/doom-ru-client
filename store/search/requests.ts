import RealtyAPI from '../../api/realty';
import { Locale } from '../app/types';
import { AppDispatch } from './../types';
import { searchActions } from './reducer';

/** ## Search Loading Realties
 * The action that send verify request
 */
export const searchGetRealties = (lang: Locale, take?: number, page = 1) => {
	return async (dispatch: AppDispatch) => {
		try {
			const api = new RealtyAPI(lang);
			const response = await api.getRealties(take, page);
			dispatch(searchActions.setSearchPage(response.page));
			dispatch(searchActions.setSearchTotal(response.count));
			return { success: true, data: response.data };
		} catch (error: any) {
			return {
				success: false,
				message: error.message
			};
		}
	};
};
