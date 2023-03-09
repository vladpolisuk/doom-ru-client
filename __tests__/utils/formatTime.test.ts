import formatTime from '../../utils/ui/formatTime';

describe('formatTime', () => {
	it('should return formatted time', () => {
		const seconds = 123;
		const format = 'mm:ss';
		const result = formatTime(seconds, format);
		expect(result).toEqual('02:03');
	});

	it('should return formatted time', () => {
		const seconds = 123;
		const format = 'hh:mm:ss';
		const result = formatTime(seconds, format);
		expect(result).toEqual('00:02:03');
	});
});
