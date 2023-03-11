import RealtyAPI from '../../api/realty';
import { Locale } from '../app/types';

/** ## Search Loading Realties
 * The action that send verify request
 */
export const searchGetRealties = async (lang: Locale, take?: number, page?: number) => {
	try {
		const api = new RealtyAPI(lang);
		const response = await api.getRealties(take, page);
		return { success: true, data: response.data };
	} catch (error: any) {
		return {
			success: false,
			message: error.message
		};
	}
};
