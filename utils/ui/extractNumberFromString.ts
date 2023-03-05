type GetNumberFromString = (str: string | number) => number | null;

/** ## Get number from string
 * The function that gives the string and returns only number
 * @param str string
 * @returns number
 */
const extractNumberFromString: GetNumberFromString = str => {
	if (str === null) return null;
	if (typeof str === 'number') return str;
	const numbers = str.match(/\d+/g);
	if (!numbers) return null;
	const numberString = numbers.join('');
	return parseInt(numberString, 10);
};

export default extractNumberFromString;
