import resetStylesOrMerge from '../../utils/ui/resetStylesOrMerge';

describe('resetStylesOrMerge', () => {
	const defaultStyles = 'defaultStyles';
	const addedStyles = 'addedStyles';

	it('should return default styles if condition is true', () => {
		const condition = true;
		const result = resetStylesOrMerge(condition, defaultStyles, addedStyles);
		expect(result).toStrictEqual(defaultStyles);
	});

	it('should return default styles + added styles if condition is false', () => {
		const condition = false;
		const result = resetStylesOrMerge(condition, defaultStyles, addedStyles);
		expect(result).toStrictEqual(`${addedStyles} ${defaultStyles}`);
	});
});
