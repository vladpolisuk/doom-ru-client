import removeProperty from '../../utils/removeProperty';

describe('removeProperty', () => {
	it('should remove property from object', () => {
		const obj = { a: 1, b: 2, c: 3 };
		const result = removeProperty(obj, 'b');
		expect(result).toEqual({ a: 1, c: 3 });
	});

	it('should remove several properties from object', () => {
		const obj = { a: 1, b: 2, c: 3 };
		const result = removeProperty(obj, 'b', 'c');
		expect(result).toEqual({ a: 1 });
	});

	it('should return the same object if property does not exist', () => {
		const obj = { a: 1, b: 2, c: 3 };
		const result = removeProperty(obj, 'd');
		expect(result).toEqual({ a: 1, b: 2, c: 3 });
	});

	it('should return the same object if property is not a string', () => {
		const obj = { a: 1, b: 2, c: 3 };
		// @ts-ignore
		const result = removeProperty(obj, 1);
		expect(result).toEqual({ a: 1, b: 2, c: 3 });
	});

	it('should not mutate the original object', () => {
		const obj = { a: 1, b: 2, c: 3 };
		const result = removeProperty(obj, 'b');
		expect(obj).toEqual({ a: 1, b: 2, c: 3 });
	});

	it('should not remove property if property does not provided', () => {
		const obj = { a: 1, b: 2, c: 3 };
		const result = removeProperty(obj);
		expect(result).toEqual({ a: 1, b: 2, c: 3 });
	});
});
