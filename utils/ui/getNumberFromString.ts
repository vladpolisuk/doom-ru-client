/** ## Get number from string
 * The function that gives the string and returns only number
 * @param str string
 * @returns number
 */
export const getNumberFromString = (str: string) => {
	return +str.replace(/\D/g, '');
};
