import { RootState } from '../types';

/**
 * The selector that returns the search take from redux store
 * @param state RootState
 * @returns `number`
 */
export const getSearchTake = (state: RootState) => state.search.take;

/**
 * The selector that returns the application user loading status from redux store
 * @param state RootState
 * @returns `boolean`
 */
export const getSearchLoading = (state: RootState) => state.search.loading;

/**
 * The selector that returns the search page from redux store
 * @param state RootState
 * @returns `number`
 */
export const getSearchPage = (state: RootState) => state.search.page;

/**
 * The selector that return the search total from redux store
 * @param state RootState
 * @returns `number`
 */
export const getSearchTotal = (state: RootState) => state.search.total;
