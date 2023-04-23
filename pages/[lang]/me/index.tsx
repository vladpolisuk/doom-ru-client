import { GetServerSidePropsContext } from 'next';
import AuthAPI from '../../../api/auth';
import { Locale } from '../../../store/app/types';

export default function Me() {
	return null;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	try {
		const api = new AuthAPI(context.query.lang as Locale, {
			cookie: context.req.headers.cookie || ''
		});
		await api.me();
		return {
			redirect: {
				permanent: false,
				destination: `/${context.query.lang}/me/settings`
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
