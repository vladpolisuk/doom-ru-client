import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import AuthAPI from '../../../api/auth';
import { useTranslation } from '../../../hooks/useTranslation';
import PageNew from '../../../modules/PageNew/PageNew';
import { Locale } from '../../../store/app/types';

export default function New() {
	const common = useTranslation('common');
	const newT = useTranslation('new');

	const description = common.site_description;
	const keywords = common.site_keywords;
	const author = common.site_author;
	const title = newT.new_title;

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

			<PageNew />
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
