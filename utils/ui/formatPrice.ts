import { Locale } from '../../store/app/types';
import { RealtyTerm } from '../../store/realty/types';
import { RealtyCurrency } from '../../types';

type FormatPrice = (price: number, currency?: RealtyCurrency, term?: RealtyTerm, locale?: Locale) => string;

const localesSource = {
	en: { day: 'day', month: 'month', forever: '' },
	ru: { day: 'день', month: 'мес.', forever: '' }
};

/** ## Format price
 * The function that format the price by locale, currency and term
 * @param price price
 * @param currency currency
 * @param term term
 * @param locale available locales
 * @returns string
 * */
const formatPrice: FormatPrice = (price, currency = 'USD', term = 'month', locale = 'en') => {
	const formatter = new Intl.NumberFormat(locale, { style: 'currency', currency, minimumFractionDigits: 0 });
	const priceFormatted = formatter.format(price);
	const termFormatted = localesSource[locale][term];
	if (term === 'forever') return priceFormatted;
	return `${priceFormatted} / ${termFormatted}`;
};

export default formatPrice;
