import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { PageHome } from '../../modules/PageHome/PageHome';

export default function Home() {
	const common = useTranslation('common');
	const home = useTranslation('home');

	const description = common.site_description;
	const keywords = common.site_keywords;
	const author = common.site_author;
	const title = home.home_title;

	return (
		<Fragment>
			<Head>
				<meta
					name='description'
					content={description}
				/>
				<meta
					name='keywords'
					content={keywords}
				/>
				<meta
					name='author'
					content={author}
				/>
				<title>{title}</title>
			</Head>

			<PageHome />
		</Fragment>
	);
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	if (context.query.lang === 'en' || context.query.lang === 'ru') {
		return {
			props: {}
		};
	}

	const string = context.req.headers['accept-language'];
	const locale = string?.split(';')[0].split(',')[0];

	return {
		redirect: {
			permanent: false,
			destination: `/${locale}`
		}
	};
}
