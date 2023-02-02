import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { Fragment } from 'react';
import { PageHome } from '../modules/PageHome/PageHome';
import { useTranslation } from 'next-i18next'

export default function Home() {
	const t = useTranslation("common").t;
	const t_home = useTranslation("home").t;

	const description = t("site_description");
	const keywords = t("site_keywords");
	const title = t_home("home_title");
	const author = t("site_author");

	return (
		<Fragment>
			<Head>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
				<meta name="author" content={author} />
				<title>{title}</title>
			</Head>

			<PageHome />
		</Fragment>
	)
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			...(await serverSideTranslations(
				locale as string,
				["common", "header", "home", "footer"],
			)),
		},
	};
}