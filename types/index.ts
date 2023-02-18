export interface Realty {
	id: number;
	action: 'rent' | 'buy';
	type: 'apartment' | 'room' | 'studio' | 'house' | 'cottage' | 'hostel';
	title: string;
	description: string;
	primeImage: string;
	images: string[];
	address: string;
	rooms: number;
	term: 'day' | 'month';
	price: number;
	currency: 'USD' | 'RUB' | 'UAH';
	area: number;
	floor: number;
	houseType: 'brick' | 'panel' | 'monolith' | 'wood' | 'other';
	repair: 'design' | 'euro' | 'cosmetic' | 'without';
	elevator: boolean;
	bedrooms: number;
}

export interface HomeRealtySearch {
	address: string;
	rooms: number;
	term: 'day' | 'month';
	price_from: number;
	price_to: number;
}

export interface RealtyFilter
	extends Pick<Realty, 'type' | 'address' | 'rooms' | 'term' | 'houseType' | 'repair' | 'elevator' | 'bedrooms'> {
	price_from?: string;
	price_to?: string;
	area_from?: string;
	area_to?: string;
	floor_from?: string;
	floor_to?: string;
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
