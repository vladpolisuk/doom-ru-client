import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppLocation, AppState, AppTheme, AppUser, Locale } from './types';

const initialState: AppState = {
	user: {
		email: '',
		favorites: [],
		id: 0,
		name: '',
		phone: '',
		secondName: '',
		avatar: '',
		bio: '',
		city: '',
		isActivated: false
	},
	userLoading: true,
	theme: 'system',
	location: null,
	locale: 'en',
	signInView: false
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
		setAppUser: (state, action: PayloadAction<AppUser>) => {
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
		},
		/**
		 * The application reducer that sets the application locale to redux store
		 * @param state AppState
		 * @param action Locale
		 */
		setAppUserFavorites: (state, action: PayloadAction<AppUser['favorites']>) => {
			if (!state.user) return;
			state.user.favorites = action.payload;
		},
		/**
		 * The application reducer that sets the application view modal to redux store
		 * @param state AppState
		 * @param action boolean
		 */
		setAppSignInView: (state, action: PayloadAction<boolean>) => {
			state.signInView = action.payload;
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
