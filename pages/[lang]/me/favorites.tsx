import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import AuthAPI from '../../../api/auth';
import { useTranslation } from '../../../hooks/useTranslation';
import PageMeFavorites from '../../../modules/PageMe/Favorites/PageMeFavorites';
import PageMeLayout from '../../../modules/PageMe/PageMeLayout';
import { Locale } from '../../../store/app/types';

export default function Me() {
	const common = useTranslation('common');
	const me = useTranslation('me');

	const description = common.site_description;
	const keywords = common.site_keywords;
	const author = common.site_author;
	const title = me.me_title;

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

			<PageMeLayout>
				<PageMeFavorites />
			</PageMeLayout>
		</Fragment>
	);
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	try {
		const api = new AuthAPI(context.query.lang as Locale, {
			cookie: context.req.headers.cookie || ''
		});
		await api.me();
		return {
			props: {}
		};
	} catch (error: any) {
		return {
			redirect: {
				permanent: false,
				destination: `/${context.query.lang}`
			}
		};
	}
}
