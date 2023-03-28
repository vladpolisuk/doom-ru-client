import { GetServerSidePropsContext } from 'next';

export default function Home() {
	return null;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const string = context.req.headers['accept-language'];
	const lang = string?.split(';')[0].split(',')[0];

	return {
		redirect: {
			permanent: false,
			destination: `/${lang}`
		}
	};
}
