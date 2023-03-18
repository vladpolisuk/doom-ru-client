import { RootState } from './../types';

/** ## Get Home Loading
 * The selector that returns the home loading status from redux store
 * @param state RootState
 * @returns boolean
 */
export const getHomeLoading = (state: RootState) => state.home.loading;
