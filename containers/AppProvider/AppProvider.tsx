import { useTheme } from 'next-themes';
import { FC, PropsWithChildren, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { appMe, loadAppLocation, setAppTheme, setAppUserLoading } from '../../store/app/actions';
import { getAppTheme } from '../../store/app/selectors';
import { AppTheme } from '../../store/app/types';

/**
 * The global application provider
 */
const AppProvider: FC<PropsWithChildren> = ({ children }) => {
	const dispatch = useAppDispatch();
	const appTheme = useAppSelector(getAppTheme);
	const { setTheme, theme } = useTheme();

	useEffect(() => {
		setTheme(appTheme);
	}, [appTheme]);

	useEffect(() => {
		if (appTheme !== theme && theme) {
			dispatch(setAppTheme(theme as AppTheme));
			setTheme(appTheme);
		}
	}, [appTheme, dispatch, setTheme, theme]);

	useEffect(() => {
		const fetchData = async () => {
			dispatch(setAppUserLoading(true));
			dispatch(loadAppLocation());
			await dispatch(appMe());
			dispatch(setAppUserLoading(false));
		};

		fetchData();
	}, [dispatch]);

	return <>{children}</>;
};

export default AppProvider;
