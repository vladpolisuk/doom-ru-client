import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { Fragment } from 'react';
import { PageHAndP } from '../../containers/PageHAndP/PageHAndP';

export default function H_And_P() {
    const t = useTranslation("common").t;
    const t_home = useTranslation("home").t;

    return (
        <Fragment>
            <Head>
                <meta name="description" content={t("site_rent_description")} />
                <meta name="keywords" content={t("site_rent_keywords")} />
                <title>{t_home("home_title")}</title>
            </Head>

            <PageHAndP />
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