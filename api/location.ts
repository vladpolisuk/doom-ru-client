import { ILocationAPI } from '../types/api/location';

/** ## Location API
 * The common location api of the application
 */
class LocationAPI implements ILocationAPI {
	private baseURL: string;
	private headers: HeadersInit;

	constructor() {
		this.baseURL = process.env.NEXT_PUBLIC_LOCATION_API_URL as string;
		this.headers = {
			'Content-Type': 'application/json'
		};
	}

	public async getCityAndCountry() {
		const promises = await Promise.all([await this.fetch('/city'), await this.fetch('/country_name')]);

		return {
			city: promises[0].data,
			country: promises[1].data
		};
	}

	private async fetch(url: string, method?: 'GET' | 'POST' | 'PUT' | 'DELETE', data?: any) {
		const response = await fetch(`${this.baseURL}${url}`, {
			body: JSON.stringify(data),
			headers: this.headers,
			method: method || 'GET'
		});

		if (response.status >= 200 && response.status <= 299) {
			return {
				type: 'success',
				data: await response.text()
			};
		}

		const error = await response.json();
		throw new Error(error.message);
	}
}

export default LocationAPI;
