import { ThemeProvider } from 'next-themes';
import { FC, PropsWithChildren } from 'react';

type Props = FC<PropsWithChildren>;

/** ## App Theme Provider
 * The global application theme provider
 */
const AppThemeProvider: Props = ({ children }) => {
	return <ThemeProvider disableTransitionOnChange>{children}</ThemeProvider>;
};

export default AppThemeProvider;
