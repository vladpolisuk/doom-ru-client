import { useTheme } from 'next-themes';
import React, { FC, Fragment, PropsWithChildren, Suspense, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useSelector';
import { setAppTheme } from '../../store/app/actions';
import { getAppTheme } from '../../store/app/selectors';
import { AppTheme } from '../../store/app/types';

type Props = FC<PropsWithChildren>;

/**
 * The global application provider
 */
export const AppProvider: Props = ({ children }) => {
    const dispatch = useAppDispatch();
    const appTheme = useAppSelector(getAppTheme);
    const { setTheme, theme } = useTheme();

    useEffect(() => {
        setTheme(appTheme);
    }, [appTheme])

    useEffect(() => {
        if (appTheme !== theme && theme) {
            dispatch(setAppTheme(theme as AppTheme));
            setTheme(appTheme);
        }
    }, [])

    return (
        <Fragment>
            {children}
        </Fragment>
    )
}
