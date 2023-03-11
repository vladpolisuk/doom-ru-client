import BaseAPI from '.';
import { Locale } from '../store/app/types';

export class RealtyAPI extends BaseAPI {
	constructor(lang: Locale, headers?: HeadersInit) {
		super(`${process.env.NEXT_PUBLIC_API_URL}/realty`, lang, headers);
	}

	public async getRealties(take?: number, page?: number) {
		return await this.fetch('GET')(`?take=${take}&page=${page}`);
	}
}

export default RealtyAPI;
