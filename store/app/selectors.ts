import { RootState } from '../types';

/** ## Get App User
 * The selector that returns the application user from redux store
 * @param state RootState
 * @returns `AppUser`
 */
export const getAppUser = (state: RootState) => state.app.user;

/** ## Get App User Loading
 * The selector that returns the application user loading status from redux store
 * @param state RootState
 * @returns `boolean`
 */
export const getAppUserLoading = (state: RootState) => state.app.userLoading;

/** ## Get App Theme
 * The selector that returns the application theme from redux store
 * @param state RootState
 * @returns `AppTheme`
 */
export const getAppTheme = (state: RootState) => state.app.theme;

/** ## Get App Loading
 * The selector that returns the application location from redux store
 * @param state RootState
 * @returns `AppLocation`
 */
export const getAppLocation = (state: RootState) => state.app.location;

/** ## Get App Locale
 * The selector that returns the application locale from redux store
 * @param state RootState
 * @returns `AppLocale`
 */
export const getAppLocale = (state: RootState) => state.app.locale;

/** ## Get App User Favorites
 * The selector that returns the application user favorites from redux store
 * @param state RootState
 * @returns `AppUser['favorites']`
 */
export const getAppUserFavorites = (state: RootState) => state.app.user?.favorites || [];
