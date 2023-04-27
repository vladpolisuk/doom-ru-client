import { AppUser } from '../app/types';

export type RealtyState = {
	realty: Partial<Realty>;
	loading: boolean;
	favoritesLoading: boolean;
	author?: AppUser;
};

export type Realty = {
	id: number;
	action: RealtyAction;
	type: RealtyType;
	title: string;
	description: string;
	images: RealtyImage[];
	address: string;
	user: RealtyUser;
	rooms: number;
	term: RealtyTerm;
	price: number;
	currency: RealtyCurrency;
	area: number;
	floor: number;
	views: number;
	houseType: RealtyHouseType;
	repair: RealtyRepair;
	elevator: boolean;
	bedrooms: number;
	mortgage: boolean;
	createdAt: string;
	updatedAt: string;
};

export type RealtyAction = 'rent' | 'buy';

export type RealtyType = 'apartment' | 'room' | 'studio' | 'house' | 'cottage' | 'hostel';

export type RealtyTerm = 'day' | 'month' | 'forever';

export type RealtyCurrency = 'USD' | 'RUB';

export type RealtyHouseType = 'brick' | 'panel' | 'monolith' | 'wood' | 'other';

export type RealtyRepair = 'design' | 'euro' | 'cosmetic' | 'without';

export interface RealtyImage {
	id: string;
}

export type RealtyUser = {
	id: number;
};

export type RealtyForm = Omit<Realty, 'id' | 'updatedAt' | 'images' | 'user' | 'createdAt' | 'views'>;

export type RealtySubmit = RealtyForm & {
	images: Buffer[];
};
