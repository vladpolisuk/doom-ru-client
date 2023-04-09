import { RootState } from '../types';

/** ## Get Realty
 * The selector that returns the realty from redux store
 * @param state RootState
 * @returns `RealtyState`
 */
export const getRealty = (state: RootState) => state.realty.realty;

/** ## Get Realty
 * The selector that returns the realty from redux store
 * @param state RootState
 * @returns `RealtyState`
 */
export const getRealtyImages = (state: RootState) => state.realty.realty.images;

/** ## Get Realty
 * The selector that returns the realty from redux store
 * @param state RootState
 * @returns `RealtyState`
 */
export const getRealtyUser = (state: RootState) => state.realty.realty.user;

/** ## Get Realty Loading
 * The selector that returns the realty loading from redux store
 * @param state RootState
 * @returns `boolean`
 */
export const getRealtyLoading = (state: RootState) => state.realty.loading;

/** ## Get Realty Favorites Loading
 * The selector that returns the realty favorites loading from redux store
 * @param state RootState
 * @returns `boolean`
 */
export const getRealtyFavoritesLoading = (state: RootState) => state.realty.favoritesLoading;
