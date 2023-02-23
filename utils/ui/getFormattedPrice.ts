import { RealtyCurrency, RealtyTerm } from '../../types';
import { Locale } from '../../types/locales';

type GetFormattedPrice = (price: number, currency?: RealtyCurrency, term?: RealtyTerm, locale?: Locale) => string;

const localesSource = {
	en: { day: 'day', month: 'month' },
	ru: { day: 'день', month: 'мес.' }
};

/** Format price
 * The function that format the price by locale, currency and term
 * @param price price
 * @param currency currency
 * @param term term
 * @param locale available locales
 * @returns string
 * */
const formattedPrice: GetFormattedPrice = (price, currency = 'USD', term = 'month', locale = 'en') => {
	const formatter = new Intl.NumberFormat(locale, { style: 'currency', currency });
	const priceFormatted = formatter.format(price);
	const termFormatted = localesSource[locale][term];
	return `${priceFormatted} / ${termFormatted}`;
};

export default formattedPrice;
