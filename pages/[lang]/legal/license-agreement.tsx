import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Fragment } from 'react';
import { useTranslation } from '../../../hooks/useTranslation';

const DynamicPage = dynamic(() => import('../../../modules/PageLegal/LicenseAgreement/LicenseAgreement'));

export default function LicenseAgreement() {
	const common = useTranslation('common');
	const legal = useTranslation('legal');

	const description = common.site_description;
	const keywords = common.site_keywords;
	const author = common.site_author;
	const title = legal.legal_licenseAgreement_title;

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
