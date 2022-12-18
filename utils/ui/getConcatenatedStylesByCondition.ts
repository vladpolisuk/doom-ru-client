import clsx from 'clsx';

type ResetStyles = (condition: boolean, defaultStyles: string, ...addedStyles: string[]) => string;

/**
 * The function that returns the new string that has concatenated styles or default styles if condition is true 
 * @param condition check condition
 * @param defaultStyles styles if true
 * @param addedStyles styles if false + defaultStyles
 * @returns string
 */
export const getConcatenatedStylesByCondition: ResetStyles = (condition, defaultStyles, ...addedStyles) => {
    const styles = condition
        ? defaultStyles
        : clsx(...addedStyles, defaultStyles);
    
    return styles;
}