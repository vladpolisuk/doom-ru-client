import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<meta charSet='utf-8' />
				<meta
					httpEquiv='X-UA-Compatible'
					content='IE=edge'
				/>
				<meta name="viewport'content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover" />
				<meta
					name='theme-color'
					media='(prefers-color-scheme: light)'
					content='white'
				/>
				<meta
					name='theme-color'
					media='(prefers-color-scheme: dark)'
					content='#141414'
				/>
				<link
					rel='preconnect'
					href='https://fonts.googleapis.com'
				/>
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin=''
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Noto+Sans+Lao+Looped:wght@100;200;300;400;500;600;700;800;900&display=swap'
					rel='stylesheet'
				/>
				<link
					href='/assets/favicon-16x16.png'
					rel='icon'
					type='image/png'
					sizes='16x16'
				/>
				<link
					href='/assets/favicon-32x32.png'
					rel='icon'
					type='image/png'
					sizes='32x32'
				/>
				<link
					rel='apple-touch-icon'
					href='assets/apple-touch-icon.png'
				/>
				<link
					rel='manifest'
					href='/manifest.json'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
