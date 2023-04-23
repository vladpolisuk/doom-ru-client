import { useTheme } from 'next-themes';
import { FC, PropsWithChildren, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { setAppLocale, setAppTheme, setAppUserLoading } from '../../store/app/actions';
import { appMe, loadAppLocation } from '../../store/app/requests';
import { getAppTheme } from '../../store/app/selectors';
import { AppTheme, Locale } from '../../store/app/types';

/** ## App Provider
 * The global application provider
 */
const AppProvider: FC<PropsWithChildren> = ({ children }) => {
	const dispatch = useAppDispatch();
	const appTheme = useAppSelector(getAppTheme);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setTheme(appTheme);
	}, [appTheme]);

	useEffect(() => {
		dispatch(setAppTheme(theme as AppTheme));
	}, []);

	useEffect(() => {
		const lang = window.location.pathname.split('/')[1] as Locale;

		const fetchData = async () => {
			dispatch(setAppUserLoading(true));
			await dispatch(appMe());
			dispatch(setAppUserLoading(false));
			await dispatch(setAppLocale(lang));
			await dispatch(loadAppLocation());
		};

		fetchData();
	}, [dispatch]);

	return <>{children}</>;
};

export default AppProvider;
