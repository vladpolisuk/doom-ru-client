import BaseAPI from '.';

/** ## Location API
 * The common location api of the application
 */
export class LocationAPI extends BaseAPI {
	constructor() {
		super(String(process.env.NEXT_PUBLIC_LOCATION_API_URL));
	}

	public async getCityAndCountry() {
		const requests = [
			this.fetch('GET')('/city', null, { credentials: undefined }),
			this.fetch('GET')('/country_name', null, { credentials: undefined })
		];

		const [city, country] = await Promise.all(requests);
		return { city, country };
	}
}

export default LocationAPI;
