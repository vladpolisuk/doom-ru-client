import { useTheme } from 'next-themes';
import { FC, Fragment, PropsWithChildren, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useSelector';
import { loadAppLocation, setAppTheme } from '../../store/app/actions';
import { getAppLocation, getAppTheme } from '../../store/app/selectors';
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

    return (
        <Fragment>
            {children}
        </Fragment>
    )
}
