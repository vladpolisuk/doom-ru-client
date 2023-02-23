import extractNumberFromString from '../../utils/ui/extractNumberFromString';

describe('extractNumberFromString', () => {
	it('should return a number from string', () => {
		const string = 'New 2023 year';
		const result = extractNumberFromString(string);
		expect(result).toEqual(2023);
	});

	it('should return a number from a number', () => {
		const number = 2023;
		const result = extractNumberFromString(number);
		expect(result).toEqual(2023);
	});

	it('should return a number from a string with only a number', () => {
		const string = '2023';
		const result = extractNumberFromString(string);
		expect(result).toEqual(2023);
	});

	it('should return null if no number was found', () => {
		const string = 'New year';
		const result = extractNumberFromString(string);
		expect(result).toEqual(null);
	});

	it('should return null if empty string was passed', () => {
		const result = extractNumberFromString('');
		expect(result).toEqual(null);
	});

	it('should return null if null was passed', () => {
		// @ts-ignore
		const result = extractNumberFromString(null);
		expect(result).toEqual(null);
	});
});
