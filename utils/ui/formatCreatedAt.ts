import { Locale } from '../../store/app/types';

type FormatCreatedAt = (createdAt: string, locale?: Locale) => string;

const localesSource = {
	en: {
		now: 'Now',
		min: 'minute',
		ago: 'ago',
		hour: 'hour',
		day: 'day'
	},
	ru: {
		now: 'Только что',
		min: 'минуту',
		ago: 'назад',
		hour: 'час',
		day: 'дней'
	}
};

/** ## Get formatted created date
 * The function that returns relative time depending on createdAt time
 * @param createdAt created time
 * @param locale available locale
 * @return string
 * */
const formatCreatedAt: FormatCreatedAt = (createdAt, locale = 'en') => {
	const now = new Date();
	const created = new Date(createdAt);
	const timeDiff = now.getTime() - created.getTime();
	const secondsDiff = Math.floor(timeDiff / 1000);
	const minutesDiff = Math.floor(secondsDiff / 60);
	const hoursDiff = Math.floor(minutesDiff / 60);
	const daysDiff = Math.floor(hoursDiff / 24);
	const monthsDiff = Math.floor(daysDiff / 30);

	const formatter = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

	if (secondsDiff < 10) return localesSource[locale].now;
	if (minutesDiff < 1) return formatter.format(-secondsDiff, 'second');
	if (minutesDiff < 60) return formatter.format(-minutesDiff, 'minute');
	if (hoursDiff < 24) return formatter.format(-hoursDiff, 'hour');
	if (daysDiff < 30) return formatter.format(-daysDiff, 'day');
	return formatter.format(-monthsDiff, 'month');
};

export default formatCreatedAt;
