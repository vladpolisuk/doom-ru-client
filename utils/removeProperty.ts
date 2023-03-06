/** ## Remove property from object
 * The function that removes object property
 * @param object initial object
 * @param property removable property
 * @returns new object without `property`
 */
const removeProperty = <T extends object>(object: any, ...property: string[]): T => {
	const result: any = {} as Omit<T, keyof typeof property>;

	for (const key in object) {
		if (!property.includes(key)) {
			result[key] = object[key];
		}
	}

	return result;
};

export default removeProperty;
