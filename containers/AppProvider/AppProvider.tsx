import { useTheme } from 'next-themes';
import { FC, PropsWithChildren, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { loadAppLocation, setAppTheme } from '../../store/app/actions';
import { getAppTheme } from '../../store/app/selectors';
import { AppTheme } from '../../store/app/types';

/**
 * The global application provider
 */
export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
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

    useEffect(() => {
        dispatch(loadAppLocation());
    }, [])

    return <>{children}</>
}
