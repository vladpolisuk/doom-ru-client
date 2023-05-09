import BaseAPI from '..';
import { Locale } from '../../store/app/types';

export class ImageAPI extends BaseAPI {
	constructor(lang: Locale, headers: HeadersInit = {}) {
		super(`${process.env.NEXT_PUBLIC_API_URL}/image`, lang, headers);
	}

	public async getOneImage(id: string) {
		return await this.fetch('GET')(`/${id}`);
	}
}

export default ImageAPI;
