import { AppDispatch } from '../types';
import { homeActions } from './reducer';

/** ## Set Home Loading
 * The function that sets the home loading
 */
export const setHomeLoading = (loading: boolean) => {
	return async (dispatch: AppDispatch) => {
		dispatch(homeActions.setHomeLoading(loading));
	};
};
