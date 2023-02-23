import clsx from 'clsx';

type ResetStyles = (condition: boolean, defaultStyles: string, ...addedStyles: string[]) => string;

/** ## Reset styles or merge
 * The function that returns the new string that has concatenated styles or default styles if condition is true
 * @param condition check condition
 * @param defaultStyles styles if true
 * @param addedStyles styles if false + defaultStyles
 * @returns string
 */
const resetStylesOrMerge: ResetStyles = (condition, defaultStyles, ...addedStyles) => {
	return condition ? defaultStyles : clsx(...addedStyles, defaultStyles);
};

export default resetStylesOrMerge;
