import { GetServerSidePropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Fragment } from 'react';
import AuthAPI from '../../api/auth';
import { Locale } from '../../store/app/types';

const PageMe = dynamic(() => import('../../modules/PageMe/PageMe'));

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

			<PageMe />
		</Fragment>
	);
}

export async function getServerSideProps({ locale, req }: GetServerSidePropsContext) {
	const lang = locale as Locale;
	const translations = await serverSideTranslations(locale as string, ['common', 'header', 'auth', 'footer', 'me']);

	try {
		const api = new AuthAPI(lang, {
			cookie: req.headers.cookie ?? ''
		});

		await api.me();

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
