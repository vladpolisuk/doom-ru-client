import RealtyAPI, { GetRealtiesFilters } from '../../api/realty';
import { Locale } from '../app/types';
import { AppDispatch } from './../types';
import { setSearchPage, setSearchTotal } from './actions';

/** ## Search Get Realties
 * The action that send get request
 */
export const searchGetRealties = async (lang: Locale, filters?: GetRealtiesFilters) => {
	try {
		const api = new RealtyAPI(lang);
		const response = await api.getRealties(filters);
		return { success: true, data: response };
	} catch (error: any) {
		return {
			success: false,
			message: error.message,
			data: []
		};
	}
};
