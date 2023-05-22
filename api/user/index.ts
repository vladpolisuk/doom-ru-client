import BaseAPI from '..';
import { Locale } from '../../store/app/types';
import { AppUpdateUser } from './types';

export class UserAPI extends BaseAPI {
	constructor(lang: Locale, headers?: HeadersInit) {
		super(`${process.env.NEXT_PUBLIC_API_URL}/user`, lang, headers);
	}

	public async getOneUser(id: number) {
		return await this.fetch('GET')(`/${id}`);
	}

	public async updateOneUser(user: AppUpdateUser) {
		return await this.fetch('PUT')(`/${user.id}`, user);
	}

	public async verifyUser(code: number) {
		return await this.fetch('POST')('/verify', { code });
	}

	public async resendVerify() {
		return await this.fetch('POST')('/resend-verify');
	}
}

export default UserAPI;
