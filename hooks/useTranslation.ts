import { useRouter } from 'next/router';
import locales from '../locales';
import { Locale } from '../store/app/types';

type LocalesMap = typeof locales;

export const useTranslation = <T extends keyof LocalesMap['en']>(page: T): LocalesMap['en'][T] => {
	const router = useRouter();
	const queryLocale = router.query.lang as Locale;
	const locale = (router.asPath && (router.asPath.split('/')[1] as Locale)) || '';
	const translation = locales[queryLocale || locale][page];
	return translation;
};
