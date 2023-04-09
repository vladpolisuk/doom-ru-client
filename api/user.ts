import BaseAPI from '.';
import { Locale } from '../store/app/types';

export class UserAPI extends BaseAPI {
	constructor(lang: Locale, headers?: HeadersInit) {
		super(`${process.env.NEXT_PUBLIC_API_URL}/user`, lang, headers);
	}

	public async getOneUser(id: number) {
		return await this.fetch('GET')(`/${id}`);
	}
}

export default UserAPI;
