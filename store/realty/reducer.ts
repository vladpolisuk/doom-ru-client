import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Realty, RealtyState } from './types';

const initialState: RealtyState = {
	realty: {
		id: 0,
		action: undefined,
		type: undefined,
		title: '',
		description: '',
		images: [],
		user: undefined,
		address: '',
		rooms: 0,
		term: undefined,
		price: 0,
		currency: undefined,
		area: 0,
		floor: 0,
		houseType: undefined,
		repair: undefined,
		elevator: false,
		bedrooms: 0,
		createdAt: '',
		updatedAt: ''
	},
	loading: true,
	favoritesLoading: false
};

const slice = createSlice({
	name: 'realty',
	initialState,
	reducers: {
		/** ## Set Realty
		 * Set Realty state
		 * @param state RealtyState
		 * @param action RealtyState
		 */
		setRealty: (state, action: PayloadAction<Realty>) => {
			state.realty = action.payload;
		},
		/** ## Set Realty Loading
		 * Set Realty loading state
		 * @param state RealtyState
		 * @param action boolean
		 */
		setRealtyLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
		/** ## Set Realty Favorites Loading
		 * Set Realty Favorites loading state
		 * @param state RealtyState
		 * @param action boolean
		 */
		setRealtyFavoritesLoading: (state, action: PayloadAction<boolean>) => {
			state.favoritesLoading = action.payload;
		}
	}
});

/**
 * The global realty reducer
 */
export const realtyReducer = slice.reducer;
/**
 * The global realty actions
 */
export const realtyActions = slice.actions;
