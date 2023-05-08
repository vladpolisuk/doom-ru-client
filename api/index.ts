import { Locale } from '../store/app/types';

abstract class BaseAPI {
	protected baseURL: string;
	protected headers?: HeadersInit;

	constructor(endpoint: string, lang?: Locale, headers?: HeadersInit) {
		this.baseURL = endpoint;
		this.headers = {
			...headers,
			'Content-Type': 'application/json'
		};

		if (lang)
			this.headers = {
				...this.headers,
				'accept-language': lang
			};
	}

	protected fetch = (method: RequestInit['method']) => {
		return async (url: string, data?: any, config?: RequestInit) => {
			const response = await fetch(`${this.baseURL}${url}`, {
				headers: this.headers,
				body: data && JSON.stringify(data),
				method: method,
				credentials: 'include',
				...config
			});

			if (response.status >= 200 && response.status <= 299) {
				const contentType = response.headers.get('content-type');
				if (contentType && contentType.includes('text/plain')) return await response.text();
				if (contentType && contentType.includes('image/webp')) return await response.blob();
				if (!contentType) return {};
				return await response.json();
			}

			const error = await response.json();
			throw new Error(error.message);
		};
	};
}

export default BaseAPI;
