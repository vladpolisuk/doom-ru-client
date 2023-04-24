import RealtyAPI, { GetRealtiesFilters } from '../../api/realty';
import { Locale } from '../app/types';
import { AppDispatch } from './../types';
import { setSearchPage, setSearchTotal } from './actions';

/** ## Search Loading Realties
 * The action that send verify request
 */
export const searchGetRealties = (lang: Locale, filters?: GetRealtiesFilters) => {
	return async (dispatch: AppDispatch) => {
		try {
			const api = new RealtyAPI(lang);
			const response = await api.getRealties(filters);
			dispatch(setSearchPage(response ? response.page : 1));
			dispatch(setSearchTotal(response ? response.count : 0));
			return { success: true, data: response.data };
		} catch (error: any) {
			return {
				success: false,
				message: error.message,
				data: []
			};
		}
	};
};
