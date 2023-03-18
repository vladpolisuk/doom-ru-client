/** ## Remove Undefined Properties
 * The function that removes undefined object properties
 * @param object initial object
 * @returns new clear object
 */
const removeUndefinedProperties = (object: Record<string, any>): Record<string, any> => {
	Object.keys(object).forEach(key => {
		if (object[key] === undefined || object[key] === '') {
			delete object[key];
		}
	});
	return object;
};

export default removeUndefinedProperties;
