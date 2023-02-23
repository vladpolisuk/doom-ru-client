import getNumberWithSpaces from '../../utils/ui/getNumberWithSpaces';

describe('getNumberWithSpaces', () => {
	it('should return a string without spaces for a number less than 1000', () => {
		const result = getNumberWithSpaces(999);
		expect(result).toBe('999');
	});

	it('should return a string with spaces for a number with no decimal places', () => {
		const result = getNumberWithSpaces(123456789);
		expect(result).toBe('123 456 789');
	});

	it('should return a string with spaces for a number with decimal places', () => {
		const result = getNumberWithSpaces(1234567.89);
		expect(result).toBe('1 234 567.89');
	});

	it('should return a string with spaces for a big integer', () => {
		const result = getNumberWithSpaces(12345678901234567890n);
		expect(result).toBe('12 345 678 901 234 567 890');
	});

	it('should return a valid number for a string', () => {
		const result = getNumberWithSpaces('123456789');
		expect(result).toBe('123 456 789');
	});

	it('should return an empty string for an empty string', () => {
		const result = getNumberWithSpaces('');
		expect(result).toBe('');
	});
});
