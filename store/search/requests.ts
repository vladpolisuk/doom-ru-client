import RealtyAPI from '../../api/realty';
import { GetRealtiesFilters } from '../../api/realty/types';
import { Locale } from '../app/types';

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
