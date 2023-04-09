import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import PageRealty from '../../../modules/PageRealty/PageRealty';

export default function Rent() {
	const common = useTranslation('common');
	const search = useTranslation('search');

	const description = common.site_description;
	const keywords = common.site_keywords;
	const author = common.site_author;
	const title = search.search_title;

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

			<PageRealty />
		</Fragment>
	);
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	return {
		props: {}
	};
}
