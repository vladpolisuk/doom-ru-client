import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import AuthAPI from '../../../api/auth';
import RealtyAPI from '../../../api/realty';
import { useTranslation } from '../../../hooks/useTranslation';
import PageMeFavorites from '../../../modules/PageMe/Favorites/PageMeFavorites';
import PageMeLayout from '../../../modules/PageMe/PageMeLayout';
import { Locale } from '../../../store/app/types';
import { Realty } from '../../../store/realty/types';

interface Props {
	favorites: Realty[];
}

export default function MeFavorites(props: Props) {
	const common = useTranslation('common');
	const me = useTranslation('me');

	const description = common.site_description;
	const keywords = common.site_keywords;
	const author = common.site_author;
	const title = me.me_favorites_title;

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
				<PageMeFavorites realties={props.favorites} />
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
		const response = await realtyApi.getFavoriteRealties();
		return {
			props: {
				favorites: response.data
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
