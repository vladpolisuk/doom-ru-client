import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import AuthAPI from '../../../api/auth';
import { useTranslation } from '../../../hooks/useTranslation';
import PageMeLayout from '../../../modules/PageMe/PageMeLayout';
import PageMeProfile from '../../../modules/PageMe/Profile/PageMeProfile';
import { AppUser, Locale } from '../../../store/app/types';

interface Props {
	user: AppUser;
}

export default function MeProfile(props: Props) {
	const common = useTranslation('common');
	const me = useTranslation('me');

	const description = common.site_description;
	const keywords = common.site_keywords;
	const author = common.site_author;
	const title = me.me_profile_title;

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
				<PageMeProfile user={props.user} />
			</PageMeLayout>
		</Fragment>
	);
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	try {
		const api = new AuthAPI(context.query.lang as Locale, {
			cookie: context.req.headers.cookie || ''
		});
		const user = await api.me();
		return {
			props: {
				user: user.data
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
