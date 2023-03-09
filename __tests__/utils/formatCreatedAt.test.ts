import formatCreatedAt from '../../utils/ui/formatCreatedAt';

describe('formatCreatedAt', () => {
	it('should return formatted createdAt', () => {
		const createdAt = Date.now();
		const result = formatCreatedAt(createdAt);
		expect(result).toEqual('Now');
	});

	it('should return formatted createdAt', () => {
		const createdAt = Date.now() - 1000 * 60;
		const result = formatCreatedAt(createdAt);
		expect(result).toEqual('1 minute ago');
	});

	it('should return formatted createdAt', () => {
		const createdAt = Date.now() - 1000 * 60 * 60;
		const result = formatCreatedAt(createdAt);
		expect(result).toEqual('1 hour ago');
	});

	it('should return formatted createdAt', () => {
		const createdAt = Date.now() - 1000 * 60 * 60 * 24;
		const result = formatCreatedAt(createdAt);
		expect(result).toEqual('yesterday');
	});

	it('should return formatted createdAt', () => {
		const createdAt = Date.now() - 1000 * 60 * 60 * 24 * 2;
		const result = formatCreatedAt(createdAt);
		expect(result).toEqual('2 days ago');
	});

	it('should return formatted createdAt', () => {
		const createdAt = Date.now() - 1000 * 60 * 60 * 24 * 30;
		const result = formatCreatedAt(createdAt);
		expect(result).toEqual('last month');
	});

	it('should return formatted createdAt', () => {
		const createdAt = Date.now() - 1000 * 60 * 60 * 24 * 30 * 2;
		const result = formatCreatedAt(createdAt);
		expect(result).toEqual('2 months ago');
	});
});
