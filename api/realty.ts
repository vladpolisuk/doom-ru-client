import BaseAPI from '.';
import { Locale } from '../store/app/types';
import { RealtySubmit } from '../store/realty/types';
import { Realty, RealtyFilter } from '../types';

export type GetRealtiesFilters = Partial<
	RealtyFilter &
		Pick<Realty, 'action'> & {
			page: number;
			take: number;
		}
>;

export class RealtyAPI extends BaseAPI {
	constructor(lang: Locale, headers?: HeadersInit) {
		super(`${process.env.NEXT_PUBLIC_API_URL}/realty`, lang, headers);
	}

	public async getRealties(filters?: GetRealtiesFilters) {
		const params = new URLSearchParams(filters as URLSearchParams);
		return await this.fetch('GET')(`?${params}`);
	}

	public async getRealty(id: number) {
		return await this.fetch('GET')(`/${id}`);
	}

	public async createRealty(realty: RealtySubmit) {
		return await this.fetch('POST')('/', realty);
	}

	public async getMyRealties() {
		return await this.fetch('GET')('/me');
	}

	public async getFavoriteRealties() {
		return await this.fetch('GET')(`/favorite`);
	}

	public async updateRealtyViews(id: number) {
		return await this.fetch('POST')(`/view/${id}`);
	}

	public async addToFavorite(realtyId: number) {
		return await this.fetch('POST')(`/favorite/${realtyId}`);
	}

	public async removeFromFavorite(realtyId: number) {
		return await this.fetch('DELETE')(`/favorite/${realtyId}`);
	}

	public async updateRealty(id: number, realty: RealtySubmit) {
		return await this.fetch('PUT')(`/${id}`, realty);
	}

	public async removeRealty(realtyId: number) {
		return await this.fetch('DELETE')(`/${realtyId}`);
	}
}

export default RealtyAPI;
