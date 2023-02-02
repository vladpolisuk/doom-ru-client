type getStringWithUppercase = (string: string, index: number) => string;

/**
 * The function that returns the new string that has uppercase letter 
 * @param string initial string
 * @param index index of letter
 * @returns string
 */
export const getStringWithUppercase: getStringWithUppercase = (string, index) => {
    if (!string) return "";
    return string[index].toUpperCase() + string.slice(index + 1, string.length);
}