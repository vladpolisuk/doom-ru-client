import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import AuthAPI from '../../../api/auth';
import { useAppDispatch } from '../../../hooks/store';
import { useTranslation } from '../../../hooks/useTranslation';
import PageMe from '../../../modules/PageMe/PageMe';
import { setAppUser } from '../../../store/app/actions';
import { Locale } from '../../../store/app/types';

export default function Me(props: any) {
	const dispatch = useAppDispatch();
	dispatch(setAppUser(props.user));

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

			<PageMe />
		</Fragment>
	);
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	try {
		const api = new AuthAPI(context.query.lang as Locale, {
			cookie: context.req.headers.cookie || ''
		});
		const response = await api.me();
		return {
			props: {
				user: response.data
			}
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
