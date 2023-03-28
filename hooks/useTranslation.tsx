import { useRouter } from 'next/router';
import locales from '../locales';
import { Locale } from '../store/app/types';

export const useTranslation = (page: 'home' | 'search' | 'header' | 'auth' | 'me' | 'common' | 'legal' | 'footer') => {
	const router = useRouter();
	const locale = router.query.lang as Locale;
	const translation = locales[locale][page];
	return translation;
};
