import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HomeState } from './types';

const initialState: HomeState = {
	loading: false
};

const slice = createSlice({
	name: 'home',
	initialState,
	reducers: {
		/**
		 * The home reducer that sets the loading state to redux store
		 * @param state HomeState
		 * @param action boolean
		 */
		setHomeLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		}
	}
});

/**
 * The home reducer
 */
export const homeReducer = slice.reducer;
/**
 * The home actions
 */
export const homeActions = slice.actions;
