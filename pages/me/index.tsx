import { GetServerSidePropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { Fragment } from 'react';
import AuthAPI from '../../api/auth';
import PageMe from '../../modules/PageMe/PageMe';
import { Locale } from '../../store/app/types';

export default function Me() {
	const t = useTranslation('common').t;
	const t_me = useTranslation('me').t;

	const description = t('site_description');
	const keywords = t('site_keywords');
	const author = t('site_author');
	const title = t_me('me_title');

	console.log('END');

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

export async function getServerSideProps({ locale, req }: GetServerSidePropsContext) {
	const lang = locale as Locale;
	const translations = await serverSideTranslations(lang, ['common', 'header', 'auth', 'footer', 'me']);
	console.log('START');

	try {
		const api = new AuthAPI(lang, {
			cookie: req.headers.cookie ?? ''
		});

		await api.me();

		console.log('GETSERVERSIDEPROPS');

		return {
			props: {
				...translations
			}
		};
	} catch (error: any) {
		return {
			redirect: {
				permanent: false,
				destination: `/${locale}`
			}
		};
	}
}
