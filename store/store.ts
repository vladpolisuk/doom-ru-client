import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appReducer } from './app/reducer';
import { searchReducer } from './search/reducer';

const rootReducer = combineReducers({
	app: appReducer,
	search: searchReducer
});

/**
 * The application Redux store
 */
const store = configureStore({
	reducer: rootReducer
});

export default store;
