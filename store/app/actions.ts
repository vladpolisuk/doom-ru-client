import { appActions } from './reducer';
import { AppDispatch } from './../types';
import { AppTheme, AppUser } from './types';

/**
 * The action that sets the application user to redux store
 * @param user AppUser
 */
export const setAppUser = (user: AppUser) => {
    return async (dispatch: AppDispatch) => {
        dispatch(appActions.setAppUser(user));
    };
};

/**
 * The action that sets the application theme to redux store
 * @param theme AppTheme
 */
export const setAppTheme = (theme: AppTheme) => {
    return async (dispatch: AppDispatch) => {
        dispatch(appActions.setAppTheme(theme));
    };
};