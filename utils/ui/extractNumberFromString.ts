type GetNumberFromString = (str: string | number) => number | null;

/** ## Get number from string
 * The function that gives the string and returns only number
 * @param str string
 * @returns number
 */
const extractNumberFromString: GetNumberFromString = str => {
	if (str === null) return null;
	if (typeof str === 'number') return str;
	const number = str.match(/\d+/g);
	if (number) return parseInt(number[0], 10);
	return null;
};

export default extractNumberFromString;
