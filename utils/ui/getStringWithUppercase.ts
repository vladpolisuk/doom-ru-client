type getStringWithUppercase = (string: string | undefined, index: number) => string;

/** ## Get string with uppercase by index
 * The function that returns the new string that has uppercase letter by index
 * @param string initial string
 * @param index index of letter
 * @returns string
 */
export const getStringWithUppercase: getStringWithUppercase = (string, index) => {
	if (!string || !string.length) return '';
	const uppercaseLetter = string[index].toUpperCase();
	const newString = string.slice(0, index) + uppercaseLetter + string.slice(index + 1);
	return newString;
};
