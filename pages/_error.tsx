import { ErrorProps } from 'next/error';

function Error({ statusCode }: ErrorProps) {
	const component = statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client';

	return <p>{component}</p>;
}

Error.getInitialProps = ({ res, err }: any) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
