type GetNumberFromString = (str: string) => number;

/** ## Get number from string
 * The function that gives the string and returns only number
 * @param str string
 * @returns number
 */
const getNumberFromString: GetNumberFromString = str => {
	return +str.replace(/\D/g, '');
};

export default getNumberFromString;
