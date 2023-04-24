import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchState } from './types';

const initialState: SearchState = {
	page: 1,
	take: 10,
	total: 0,
	loading: true
};

const slice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		/**
		 * The search reducer that sets the search page to redux store
		 * @param state SearchState
		 * @param action number
		 */
		setSearchPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
		/**
		 * The search reducer that sets the total pages to redux store
		 * @param state number
		 * @param action number
		 */
		setSearchTotal: (state, action: PayloadAction<number>) => {
			state.total = action.payload;
		},
		/**
		 * The search reducer that sets the search take to redux store
		 * @param state SearchState
		 * @param action number
		 */
		setSearchTake: (state, action: PayloadAction<number>) => {
			state.take = action.payload;
		},
		/**
		 * The search reducer that sets the search loading to redux store
		 * @param state SearchState
		 * @param action boolean
		 */
		setSearchLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		}
	}
});

/**
 * The search reducer
 */
export const searchReducer = slice.reducer;
/**
 * The search actions
 */
export const searchActions = slice.actions;
