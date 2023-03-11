import { Locale } from '../store/app/types';

class RealtyAPI {
	private baseURL: string;
	private headers: HeadersInit;

	constructor(lang: Locale, jwt?: string) {
		this.baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api/realty`;
		this.headers = {
			'accept-language': lang,
			'Content-Type': 'application/json',
			authorization: `Bearer ${jwt}`
		};
	}

	public async getRealties(take?: number, page?: number) {
		return await this.fetch(`?take=${take}&page=${page}`);
	}

	private async fetch(url: string, method?: 'GET' | 'POST' | 'PUT' | 'DELETE', data?: any) {
		const response = await fetch(`${this.baseURL}${url}`, {
			headers: this.headers,
			mode: 'cors',
			body: JSON.stringify(data),
			method: method || 'GET'
		});

		if (response.status >= 200 && response.status <= 299) {
			return {
				type: 'success',
				...(await response.json())
			};
		}

		const error = await response.json();
		throw new Error(error.message);
	}
}

export default RealtyAPI;
