type FormatPhone = (phone: string) => string;

/** Format Phone Number
 * The function that format phone number
 * @param phone string, e.g. +79998887766
 * @param locale Locale
 * @return string
 */
export const formatPhone: FormatPhone = phone => {
	if (!phone) return phone;

	const countryCode = phone.slice(0, 2);
	const remaining = phone.slice(2);

	if (countryCode === '+7') {
		const pattern = /(\d{3})(\d{3})(\d{2})(\d{2})/;
		const formatted = remaining.replace(pattern, '($1) $2-$3-$4');
		return `${countryCode} ${formatted}`;
	} else if (countryCode === '+1') {
		const pattern = /(\d{3})(\d{3})(\d{4})/;
		const formatted = remaining.replace(pattern, '($1) $2-$3');
		return `${countryCode} ${formatted}`;
	} else {
		// If the phone number doesn't match any known format, return it unchanged
		return phone;
	}
};
