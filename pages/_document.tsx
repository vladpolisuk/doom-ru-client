import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao+Looped:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
				<meta name="viewport'content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover" />
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}