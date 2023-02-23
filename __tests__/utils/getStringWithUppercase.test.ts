import getStringWithUppercase from '../../utils/ui/getStringWithUppercase';

describe('getStringWithUppercase', () => {
	it('should return string with uppercase first letter', () => {
		const result = getStringWithUppercase('string', 0);
		expect(result).toBe('String');
	});

	it('should return string with uppercase second letter', () => {
		const result = getStringWithUppercase('string', 1);
		expect(result).toBe('sTring');
	});

	it('should return string with uppercase last letter', () => {
		const result = getStringWithUppercase('string', 5);
		expect(result).toBe('strinG');
	});

	it('should not uppercase if index is out of range', () => {
		const result = getStringWithUppercase('string', 6);
		expect(result).toBe('string');
	});

	it('should return empty string if string is empty', () => {
		const result = getStringWithUppercase('', 0);
		expect(result).toBe('');
	});
});
