import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Fragment } from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import locales from '../../../locales';

const DynamicPage = dynamic(() => import('../../../modules/PageLegal/PrivacyPolicy/PrivacyPolicy'));

export default function PrivacyPolicy() {
	const common = useTranslation('common') as typeof locales.en.common;
	const legal = useTranslation('home') as typeof locales.en.legal;

	const description = common.site_description;
	const keywords = common.site_keywords;
	const author = common.site_author;
	const title = legal.legal_privacyPolicy_title;

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

			<DynamicPage />
		</Fragment>
	);
}

export async function getServerSideProps() {
	return {
		props: {}
	};
}
