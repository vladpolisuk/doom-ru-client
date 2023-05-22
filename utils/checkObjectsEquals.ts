type CheckObjectsEquals = (obj1: any, obj2: any) => Boolean;

/** Check Objects Equals
 * Compares two objects for equality.
 * @param {Object} obj1 - The first object to compare.
 * @param {Object} obj2 - The second object to compare.
 * @returns {boolean} - Returns true if the two objects are equal, false otherwise.
 */
const checkObjectsEquals: CheckObjectsEquals = (obj1, obj2) => {
	if (!obj1 || !obj2) return false;

	const obj1Keys = Object.keys(obj1);
	const obj2Keys = Object.keys(obj2);
	if (obj1Keys.length !== obj2Keys.length) return false;

	for (let key of obj1Keys) {
		if (!obj2.hasOwnProperty(key)) return false;
		if (obj1[key] !== obj2[key]) return false;
	}

	return true;
};

export default checkObjectsEquals;
