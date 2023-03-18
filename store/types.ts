import store from './store';

/** ## App RootState
 * The root state of the application
 */
export type RootState = ReturnType<typeof store.getState>;

/** ## App Dispatch
 * The app dispatch type
 */
export type AppDispatch = typeof store.dispatch;

/** ## App GetState
 * The app get state
 */
export type AppGetState = () => RootState;
