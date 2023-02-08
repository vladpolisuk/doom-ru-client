import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appReducer } from './app/reducer';

const rootReducer = combineReducers({
	app: appReducer
});

/**
 * The application Redux store
 */
export const store = configureStore({
	reducer: rootReducer
});
