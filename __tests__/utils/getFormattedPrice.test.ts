import getFormattedPrice from '../../utils/ui/getFormattedPrice';

describe('getFormattedPrice', () => {
	const price = 100;

	it('should return formatted price', () => {
		const formattedPrice = getFormattedPrice(price);
		expect(String(formattedPrice)).toStrictEqual('$100 / month');
	});

	it('should return formatted price with RUB currency', () => {
		const formattedPrice = getFormattedPrice(price, 'RUB');
		expect(formattedPrice.replace(/\s/, ' ')).toStrictEqual('RUB 100 / month');
	});

	it('should return formatted price with day term', () => {
		const formattedPrice = getFormattedPrice(price, 'USD', 'day');
		expect(String(formattedPrice)).toStrictEqual('$100 / day');
	});

	it('should return formatted price with ru locale', () => {
		const formattedPrice = getFormattedPrice(price, 'USD', 'month', 'ru');
		expect(formattedPrice.replace(/\s/, ' ')).toStrictEqual('100 $ / мес.');
	});

	it('should return formatted price with ru locale and RUB currency', () => {
		const formattedPrice = getFormattedPrice(price, 'RUB', 'month', 'ru');
		expect(formattedPrice.replace(/\s/, ' ')).toStrictEqual('100 ₽ / мес.');
	});
});
