import axios from 'axios';
import { GetCityAndCountryType, GetIPType, GetLocationAPIType } from '../types/api/location';

const getCityAndCountry: GetCityAndCountryType = api => {
	return async () => {
		const {
			data: { city, country_name }
		} = await api.get('/json');
		return { city, country: country_name };
	};
};

const getIP: GetIPType = api => {
	return async () => {
		const { data } = await api.get('/ip');
		return data;
	};
};

/**
 * The common location api of the application
 * @method `getCityAndCountry` - Get city and country information by current location
 * @method `getIP` - Get IP by current location
 * @example
 * const api = getLocationAPI();
 * await api.getIP(); // 00.000.000.000
 */
export const getLocationAPI: GetLocationAPIType = () => {
	const api = axios.create({ baseURL: `https://ipapi.co` });

	return {
		getCityAndCountry: getCityAndCountry(api),
		getIP: getIP(api)
	};
};
