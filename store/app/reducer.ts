import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppLocation, AppState, AppTheme, AppUser } from './types';

const initialState: AppState = {
	user: {
		id: 94146172,
		name: 'Vladislav',
		email: 'vladpolisuk159@gmail.com',
		nickname: 'vladislav124352',
		surname: 'Polishchuk',
		avatar: 'https://lh3.googleusercontent.com/a/ALm5wu3vk30A3Lu2ZOEvl7GWqZvP98Q1ABFBUWJKAawYmA=s360-p-rw-no'
	},
	// user: null,
	theme: 'system',
	location: null
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
