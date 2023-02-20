import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appReducer } from './app/reducer';

const rootReducer = combineReducers({
	app: appReducer
});

/**
 * The application Redux store
 */
const store = configureStore({
	reducer: rootReducer
});

export default store;
