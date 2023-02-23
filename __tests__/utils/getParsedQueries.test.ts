import getParsedQueries from '../../utils/ui/getParsedQueries';

describe('getParsedQueries', () => {
	it('should return parsed queries', () => {
		const values = {
			string: 'string',
			number: '123',
			boolean: 'true',
			empty: '',
			null: null,
			undefined: undefined
		};

		const result = getParsedQueries(values);

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

		const result = getParsedQueries(values);

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
		const result = getParsedQueries(values);
		expect(result).toEqual({});
	});
});
