import parseQueries from '../../utils/ui/parseQueries';

describe('parseQueries', () => {
	it('should return parsed queries', () => {
		const values = {
			string: 'string',
			number: '123',
			boolean: 'true',
			empty: '',
			null: null,
			undefined: undefined
		};

		const result = parseQueries(values);

		expect(result).toEqual({
			string: 'string',
			number: 123,
			boolean: true,
			empty: '',
			null: null,
			undefined: undefined
		});
	});

	it('should return parsed queries', () => {
		const values = {
			string: 'string',
			number: '123',
			array: ['string', '123'],
			boolean: 'true',
			empty: ''
		};

		const result = parseQueries(values);

		expect(result).toEqual({
			string: 'string',
			number: 123,
			array: ['string', 123],
			boolean: true,
			empty: ''
		});
	});

	it('should return empty object', () => {
		const values = {};
		const result = parseQueries(values);
		expect(result).toEqual({});
	});
});
