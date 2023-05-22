import checkObjectsEquals from '../../utils/checkObjectsEquals';

describe('checkObjectsEquals', () => {
	test('returns true when comparing two identical objects', () => {
		const obj1 = { name: 'John', age: 25 };
		const obj2 = { name: 'John', age: 25 };
		expect(checkObjectsEquals(obj1, obj2)).toBe(true);
	});

	test('returns false when comparing two different objects', () => {
		const obj1 = { name: 'John', age: 25 };
		const obj2 = { name: 'Jane', age: 26 };
		expect(checkObjectsEquals(obj1, obj2)).toBe(false);
	});

	test('returns false when comparing an object with null', () => {
		const obj1 = { name: 'John', age: 25 };
		const obj2 = null;
		expect(checkObjectsEquals(obj1, obj2)).toBe(false);
	});

	test('returns false when comparing an object with undefined', () => {
		const obj1 = { name: 'John', age: 25 };
		const obj2 = undefined;
		expect(checkObjectsEquals(obj1, obj2)).toBe(false);
	});

	test('returns false when objects have different number of keys', () => {
		const obj1 = { name: 'John', age: 25, country: 'USA' };
		const obj2 = { name: 'John', age: 25 };
		expect(checkObjectsEquals(obj1, obj2)).toBe(false);
	});

	test('returns false when objects have different keys', () => {
		const obj1 = { name: 'John', age: 25 };
		const obj2 = { firstName: 'John', age: 25 };
		expect(checkObjectsEquals(obj1, obj2)).toBe(false);
	});

	test('returns true when comparing two empty objects', () => {
		const obj1 = {};
		const obj2 = {};
		expect(checkObjectsEquals(obj1, obj2)).toBe(true);
	});
});
