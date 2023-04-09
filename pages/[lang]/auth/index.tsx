import Head from 'next/head';
import { Fragment } from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import PageAuth from '../../../modules/PageAuth/PageAuth';

export default function Auth() {
	const common = useTranslation('common');
	const auth = useTranslation('auth');

	const description = common.site_description;
	const keywords = common.site_keywords;
	const author = common.site_author;
	const title = auth.auth_title;

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

			<PageAuth />
		</Fragment>
	);
}

export async function getServerSideProps() {
	return {
		props: {}
	};
}
