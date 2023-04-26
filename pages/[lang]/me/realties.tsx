import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import AuthAPI from '../../../api/auth';
import { useTranslation } from '../../../hooks/useTranslation';
import PageMeLayout from '../../../modules/PageMe/PageMeLayout';
import PageMeRealties from '../../../modules/PageMe/Realties/PageRealties';
import { Locale } from '../../../store/app/types';
import RealtyAPI from '../../../api/realty';
import { Realty } from '../../../store/realty/types';

interface Props {
	realties: Realty[];
}

export default function MeRealties(props: Props) {
	const common = useTranslation('common');
	const me = useTranslation('me');

	const description = common.site_description;
	const keywords = common.site_keywords;
	const author = common.site_author;
	const title = me.me_realties_title;

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
				<PageMeRealties realties={props.realties} />
			</PageMeLayout>
		</Fragment>
	);
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	try {
		const locale = context.query.lang as Locale;
		const api = new AuthAPI(locale, {
			cookie: context.req.headers.cookie || ''
		});
		await api.me();
		const realtyApi = new RealtyAPI(locale, {
			cookie: context.req.headers.cookie || ''
		});
		const response = await realtyApi.getMyRealties();
		return {
			props: {
				realties: response.data
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
