import { AppDispatch, AppGetState } from '../types';
import { realtyActions } from './reducer';
import { Realty } from './types';

/** ## Set Realty
 * The action that sets the realty to redux store
 * @param realty RealtyState
 */
export const setRealty = (realty: Realty) => {
	return (dispatch: AppDispatch) => {
		dispatch(realtyActions.setRealty(realty));
	};
};

/** ## Set Realty Loading
 * The action that sets the realty loading to redux store
 * @param loading boolean
 */
export const setRealtyLoading = (loading: boolean) => {
	return (dispatch: AppDispatch) => {
		dispatch(realtyActions.setRealtyLoading(loading));
	};
};

/** ## Set Realty Favorites Loading
 * The action that sets the realty favorites loading to redux store
 * @param loading boolean
 */
export const setRealtyFavoritesLoading = (loading: boolean) => {
	return (dispatch: AppDispatch) => {
		dispatch(realtyActions.setRealtyFavoritesLoading(loading));
	};
};