import axios, { AxiosInstance } from 'axios';
import { Locale } from '../store/app/types';
import type { IAuthAPI, SendSignInFields, SendSignUpFields, SendVerifyFields } from './../types/api/auth';

/** ## Auth API
 * The common auth api of the application
 */
class AuthAPI implements IAuthAPI {
	private api: AxiosInstance;

	constructor(lang: Locale) {
		this.api = axios.create({
			baseURL: process.env.NEXT_PUBLIC_API_URL,
			headers: { 'accept-language': lang }
		});
	}

	public async signUp(data: SendSignUpFields) {
		return await this.api.post('/api/auth/signup', data);
	}

	public async verify(data: SendVerifyFields) {
		return await this.api.post('/api/auth/verify', data);
	}

	public async signIn(data: SendSignInFields) {
		return await this.api.post('/api/auth/signin', data);
	}

	public async me(jwt: string) {
		const config = { headers: { authorization: `Bearer ${jwt}` } };
		return await this.api.get('/api/auth/me', config);
	}
}

export default AuthAPI;
