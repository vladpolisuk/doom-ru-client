export interface Realty {
	id: number;
	action: RealtyAction;
	type: RealtyType;
	title: string;
	description: string;
	primeImage: string;
	images: string[];
	address: string;
	rooms: number;
	term: RealtyTerm;
	price: number;
	currency: RealtyCurrency;
	area: number;
	floor: number;
	houseType: RealtyHouseType;
	repair: RealtyRepair;
	elevator: boolean;
	bedrooms: number;
	createdAt: number;
	updatedAt: number;
}

export type RealtyAction = 'rent' | 'buy';

export type RealtyType = 'apartment' | 'room' | 'studio' | 'house' | 'cottage' | 'hostel';

export type RealtyTerm = 'day' | 'month';

export type RealtyCurrency = 'USD' | 'RUB';

export type RealtyHouseType = 'brick' | 'panel' | 'monolith' | 'wood' | 'other';

export type RealtyRepair = 'design' | 'euro' | 'cosmetic' | 'without';

export interface HomeRealtySearch {
	address: string;
	rooms: number;
	term: RealtyTerm;
	price_from: number;
	price_to: number;
}

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

export type RealtySort = {
	sort_by: RealtySortBy;
};

export type RealtySortBy = 'default' | 'price_up' | 'price_down' | 'date_up' | 'date_down';

export type RealtySorts = 'sort_by';
