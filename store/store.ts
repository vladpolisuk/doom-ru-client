import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appReducer } from './app/reducer';
import { homeReducer } from './home/reducer';
import { searchReducer } from './search/reducer';

const rootReducer = combineReducers({
	app: appReducer,
	search: searchReducer,
	home: homeReducer
});

/** ## App Store
 * The application Redux store
 */
const store = configureStore({
	reducer: rootReducer
});

export default store;
