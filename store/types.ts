import store from './store';

/**
 * The root state of the application
 */
export type RootState = ReturnType<typeof store.getState>;
/**
 * The app dispatch type
 */
export type AppDispatch = typeof store.dispatch;
