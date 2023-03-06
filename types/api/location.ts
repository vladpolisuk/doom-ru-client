export interface ILocationAPI {
	/** ## Get city and country
	 * Get city and country information by current location
	 */
	getCityAndCountry: () => Promise<{ city: string; country: string }>;

	/** ## Get IP
	 * Get IP by current location
	 */
	getIP: () => Promise<string>;
}
