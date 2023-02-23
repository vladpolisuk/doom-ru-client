type GetNumberWithSpaces = (num: number | string | bigint) => string;

/** ## Get number with spaces
 * The function that gives the number and returns string that has number with spaces
 * @param num number
 * @returns string
 */
const getNumberWithSpaces: GetNumberWithSpaces = num => {
	return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export default getNumberWithSpaces;
