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

export interface RealtyFilter
	extends Pick<Realty, 'type' | 'address' | 'rooms' | 'term' | 'houseType' | 'repair' | 'elevator' | 'bedrooms'> {
	price_from?: number;
	price_to?: number;
	area_from?: number;
	area_to?: number;
	floor_from?: number;
	floor_to?: number;
}

export type RealtyFilters =
	| 'type'
	| 'address'
	| 'rooms'
	| 'term'
	| 'houseType'
	| 'repair'
	| 'elevator'
	| 'bedrooms'
	| 'price_from'
	| 'price_to'
	| 'area_from'
	| 'area_to'
	| 'floor_from'
	| 'floor_to';

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

export type RealtySort = {
	sort_by: RealtySortBy;
};

export type RealtySortBy = 'DEFAULT' | 'PRICE_ASC' | 'PRICE_DESC' | 'DATE_ASC' | 'DATE_DESC';

export type RealtySorts = 'sort_by';
