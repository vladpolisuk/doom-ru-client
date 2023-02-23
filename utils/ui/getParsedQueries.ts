type GetParsedQueries = <T>(values: T) => T;

const parseString = (value: string) => {
	if (value === 'true') return true;
	if (value === 'false') return false;
	if (!isNaN(+value)) return Number(value);
	return value;
};

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
			result[key] = parseString(value);
		} else if (Array.isArray(value) && value) {
			result[key] = value.map(item => parseString(item));
		} else {
			result[key] = value;
		}
	}

	return result;
};

export default getParsedQueries;
