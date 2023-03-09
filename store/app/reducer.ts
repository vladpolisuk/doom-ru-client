import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Locale } from '../../types/locales';
import { AppLocation, AppState, AppTheme, AppUser } from './types';

const initialState: AppState = {
	user: null,
	userLoading: true,
	theme: 'system',
	location: null,
	locale: 'en'
};

const slice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		/**
		 * The application reducer that sets the application user to redux store
		 * @param state AppState
		 * @param action AppUser
		 */
		setAppUser: (state, action: PayloadAction<AppUser | null>) => {
			state.user = action.payload;
		},
		/**
		 * The application reducer that sets the application user to redux store
		 * @param state AppState
		 * @param action boolean
		 */
		setAppUserLoading: (state, action: PayloadAction<boolean>) => {
			state.userLoading = action.payload;
		},
		/**
		 * The application reducer that sets the application theme to redux store
		 * @param state AppState
		 * @param action AppTheme
		 */
		setAppTheme: (state, action: PayloadAction<AppTheme>) => {
			state.theme = action.payload;
		},
		/**
		 * The application reducer that sets the application location to redux store
		 * @param state AppState
		 * @param action AppLocation
		 */
		setAppLocation: (state, action: PayloadAction<AppLocation>) => {
			state.location = action.payload;
		},
		/**
		 * The application reducer that sets the application locale to redux store
		 * @param state AppState
		 * @param action Locale
		 */
		setAppLocale: (state, action: PayloadAction<Locale>) => {
			state.locale = action.payload;
		}
	}
});

/**
 * The global application reducer
 */
export const appReducer = slice.reducer;
/**
 * The global application actions
 */
export const appActions = slice.actions;
