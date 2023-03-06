import axios, { AxiosInstance } from 'axios';
import { ILocationAPI } from '../types/api/location';

/** ## Location API
 * The common location api of the application
 */
class LocationAPI implements ILocationAPI {
	private api: AxiosInstance;

	constructor() {
		this.api = axios.create({ baseURL: process.env.NEXT_PUBLIC_LOCATION_API_URL });
	}

	async getCityAndCountry() {
		const {
			data: { city, country_name }
		} = await this.api.get('/json');
		return { city, country: country_name };
	}

	async getIP() {
		const { data } = await this.api.get('/ip');
		return data;
	}
}

export default LocationAPI;
