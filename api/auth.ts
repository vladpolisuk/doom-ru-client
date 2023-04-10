import BaseAPI from '.';
import { Locale } from '../store/app/types';
import type { SendSignInFields, SendSignUpFields, SendVerifyFields } from './../types/api/auth';

/** ## Auth API
 * The common auth api of the application
 */
export class AuthAPI extends BaseAPI {
	constructor(lang: Locale, headers?: HeadersInit) {
		super(`${process.env.NEXT_PUBLIC_API_URL}/auth`, lang, headers);
	}

	public async signUp(data: SendSignUpFields) {
		return await this.fetch('POST')('/signup', data);
	}

	public async verify(data: SendVerifyFields) {
		return await this.fetch('POST')('/verify', data);
	}

	public async signIn(data: SendSignInFields) {
		return await this.fetch('POST')('/signin', data);
	}

	public async signOut() {
		return await this.fetch('POST')('/signout');
	}

	public async me() {
		return await this.fetch('GET')('/me');
	}

	public async addPhone(phone: string) {
		return await this.fetch('GET')('/phone', { phone });
	}
}

export default AuthAPI;
