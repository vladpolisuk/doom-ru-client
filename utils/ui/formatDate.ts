type FormatDate = (createdAt: string, locale: string) => string;

/** ## Format Date
 * The function formats the date to the format of the locale.
 * @param createdAt string
 * @param locale string (e.g. 'en-US')
 * @returns string
 */
export const formatDate: FormatDate = (createdAt, locale) => {
	const date = new Date(createdAt);

	const formatter = new Intl.DateTimeFormat(locale, {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	return formatter.format(date);
};
