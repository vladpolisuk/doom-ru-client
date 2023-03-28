import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import AppProgressbar from '../components/AppProgressbar/AppProgressbar';
import AppSkipLink from '../components/AppSkipLink/AppSkipLink';
import AppFooter from '../containers/AppFooter/AppFooter';
import AppHeader from '../containers/AppHeader/AppHeader';
import AppProvider from '../containers/AppProvider/AppProvider';
import AppThemeProvider from '../containers/AppThemeProvider/AppThemeProvider';
import store from '../store/store';
import '../styles/global.scss';

function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<AppThemeProvider>
				<AppProvider>
					<AppProgressbar />
					<AppSkipLink />
					<AppHeader />
					<Component {...pageProps} />
					<AppFooter />
				</AppProvider>
			</AppThemeProvider>
		</Provider>
	);
}

export default App;
