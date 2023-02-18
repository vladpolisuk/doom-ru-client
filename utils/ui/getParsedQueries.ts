/** ## Get parsed queries
 * The function that gives an query object and returns it parsed
 * @param values initial Object: T
 * @returns Object: T
 */
export const getParsedQueries = <T>(values: T): T => {
	const result: any = {};

	for (const key in values) {
		const value = values[key];

		if (typeof value === 'string' && value) {
			if (value === 'true') {
				result[key] = true;
			} else if (value === 'false') {
				result[key] = false;
			} else if (!isNaN(Number(value))) {
				result[key] = Number(value);
			} else {
				result[key] = value;
			}
		} else {
			result[key] = value;
		}
	}

	return result;
};
