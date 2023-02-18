import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import { useTranslation } from 'next-i18next';

const DynamicPage = dynamic(() => import('../../modules/PageLegal/LicenseAgreement/LicenseAgreement'));

export default function LicenseAgreement() {
	const t = useTranslation('common').t;
	const t_legal = useTranslation('legal').t;

	const description = t('site_description');
	const keywords = t('site_keywords');
	const title = t_legal('legal_licenseAgreement_title');
	const author = t('site_author');

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

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			...(await serverSideTranslations(locale as string, ['common', 'header', 'legal', 'footer']))
		}
	};
}
