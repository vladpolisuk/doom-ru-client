import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { Fragment } from 'react';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';

const DynamicPage = dynamic(() => import('../../modules/PageMe/PageMe'));

export default function Me() {
	const t = useTranslation('common').t;
	const t_me = useTranslation('me').t;

	const description = t('site_description');
	const keywords = t('site_keywords');
	const author = t('site_author');
	const title = t_me('me_title');

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
			...(await serverSideTranslations(locale as string, ['common', 'header', 'footer', 'me']))
		}
	};
}
