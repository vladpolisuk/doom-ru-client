type GetParsedQueries = <T>(values: T) => T;

/** ## Get parsed queries
 * The function that gives an query object and returns it parsed
 * @param values initial Object: T
 * @returns Object: T
 */
const getParsedQueries: GetParsedQueries = values => {
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

export default getParsedQueries;
