/** ## Get number with spaces
 * The function that gives the number and returns string that has number with spaces
 * @param num number
 * @returns string
 */
export const getNumberWithSpaces = (num: number) => {
	return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};
