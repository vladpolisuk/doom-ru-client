import BaseAPI from '.';
import { Locale } from '../store/app/types';
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

	public async addToFavorite(realtyId: number) {
		return await this.fetch('POST')(`/favorite/${realtyId}`);
	} 

	public async removeFromFavorite(realtyId: number) {
		return await this.fetch('DELETE')(`/favorite/${realtyId}`);
	}	

	public async getAllFavoriteRealties(realtyId: number) {
		return await this.fetch('GET')(`/favorite`);
	}
}

export default RealtyAPI;
