import { Locale } from '../store/app/types';
import type { IAuthAPI, SendSignInFields, SendSignUpFields, SendVerifyFields } from './../types/api/auth';

/** ## Auth API
 * The common auth api of the application
 */
class AuthAPI implements IAuthAPI {
	private baseURL: string;
	private headers: HeadersInit;

	constructor(lang: Locale, jwt?: string) {
		this.baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api/auth`;
		this.headers = {
			'accept-language': lang,
			'Content-Type': 'application/json',
			authorization: `Bearer ${jwt}`
		};
	}

	public async signUp(data: SendSignUpFields) {
		return await this.fetch('/signup', 'POST', data);
	}

	public async verify(data: SendVerifyFields) {
		return await this.fetch('/verify', 'POST', data);
	}

	public async signIn(data: SendSignInFields) {
		return await this.fetch('/signin', 'POST', data);
	}

	public async me() {
		return await this.fetch('/me');
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

export default AuthAPI;
