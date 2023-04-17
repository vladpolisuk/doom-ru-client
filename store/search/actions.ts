import { AppDispatch } from '../types';
import { searchActions } from './reducer';
/** ## Set Search Take
 * The function that sets the search take
 */
export const setSearchTake = (take: number) => {
	return async (dispatch: AppDispatch) => {
		dispatch(searchActions.setSearchTake(take));
	};
};

/** ## Set Search Page
 * The function that sets the search page
 */
export const setSearchPage = (page: number) => {
	return async (dispatch: AppDispatch) => {
		dispatch(searchActions.setSearchPage(page));
	};
};

/** ## Set Search Loading
 * The function that sets the search loading
 */
export const setSearchLoading = (loading: boolean) => {
	return async (dispatch: AppDispatch) => {
		dispatch(searchActions.setSearchLoading(loading));
	};
};

/** ## Set Search Total
 * The function that sets the search total
 */
export const setSearchTotal = (total: number) => {
	return async (dispatch: AppDispatch) => {
		dispatch(searchActions.setSearchTotal(total));
	};
};
