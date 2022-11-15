import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { AppHeader } from '../containers/AppHeader/AppHeader';
import '../styles/global.scss';

function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider
			enableSystem
			disableTransitionOnChange
			defaultTheme="system">
			<AppHeader />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default appWithTranslation(App);
