import { ThemeProvider } from 'next-themes';
import { FC, PropsWithChildren } from 'react';

type Props = FC<PropsWithChildren>;

/**
 * The global application theme provider
 */
export const AppThemeProvider: Props = ({ children }) => {
	return <ThemeProvider disableTransitionOnChange>{children}</ThemeProvider>;
};
