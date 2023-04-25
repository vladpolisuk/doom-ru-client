import { ErrorProps } from 'next/error';
import Head from 'next/head';
import { Fragment } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import PageError from '../modules/PageError/PageError';

function Error({ statusCode }: ErrorProps) {
	const common = useTranslation('common');
	const error = useTranslation('error');

	const description = common.site_description;
	const keywords = common.site_keywords;
	const author = common.site_author;
	const title = error.error_title.replace('{{code}}', String(statusCode));

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

			<PageError statusCode={statusCode} />
		</Fragment>
	);
}

Error.getInitialProps = ({ res, err }: any) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 400;
	return { statusCode };
};

export default Error;
