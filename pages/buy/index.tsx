import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { Fragment } from 'react';
import { useTranslation } from 'next-i18next'
import { PageBuy } from '../../containers/PageBuy/PageBuy';

export default function Buy() {
    const t = useTranslation("common").t;
    const t_home = useTranslation("home").t;

    return (
        <Fragment>
            <Head>
                <meta name="description" content={t("site_rent_description")} />
                <meta name="keywords" content={t("site_rent_keywords")} />
                <title>{t_home("home_title")}</title>
            </Head>

            <PageBuy />
        </Fragment>
    )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            ...(await serverSideTranslations(
                locale as string,
                ["common", "header", "home"],
            )),
        },
    };
}