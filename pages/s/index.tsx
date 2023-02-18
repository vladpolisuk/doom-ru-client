import { GetServerSidePropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { Fragment } from 'react';
import { PageSearch } from '../../modules/PageSearch/PageSearch';

export default function Search() {
	const t = useTranslation('common').t;
	const t_search = useTranslation('search').t;

	const description = t('site_description');
	const keywords = t('site_keywords');
	const author = t('site_author');
	const title = t_search('search_title');

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

			<PageSearch />
		</Fragment>
	);
}

<<<<<<< HEAD
export async function getStaticProps({ locale }: GetStaticPropsContext) {
=======
export async function getServerSideProps({ locale }: GetServerSidePropsContext) {
>>>>>>> 689d0938f39b297364f9c8b48e15ef7d70b84ae3
	return {
		props: {
			...(await serverSideTranslations(locale as string, ['common', 'header', 'search', 'footer']))
		}
	};
}
