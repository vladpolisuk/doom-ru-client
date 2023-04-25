import { useRouter } from 'next/router';
import locales from '../locales';
import { Locale } from '../store/app/types';

type LocalesMap = typeof locales;

export const useTranslation = <T extends keyof LocalesMap['en']>(page: T): LocalesMap['en'][T] => {
	const router = useRouter();
	const locale = router.asPath.split('/')[1] as Locale;
	const translation = locales[locale][page];
	return translation;
};
