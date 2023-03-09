import formatPrice from '../../utils/ui/formatPrice';

describe('formatPrice', () => {
	const price = 100;

	it('should return formatted price', () => {
		const formattedPrice = formatPrice(price);
		expect(String(formattedPrice)).toStrictEqual('$100 / month');
	});

	it('should return formatted price with RUB currency', () => {
		const formattedPrice = formatPrice(price, 'RUB');
		expect(formattedPrice.replace(/\s/, ' ')).toStrictEqual('RUB 100 / month');
	});

	it('should return formatted price with day term', () => {
		const formattedPrice = formatPrice(price, 'USD', 'day');
		expect(String(formattedPrice)).toStrictEqual('$100 / day');
	});

	it('should return formatted price with ru locale', () => {
		const formattedPrice = formatPrice(price, 'USD', 'month', 'ru');
		expect(formattedPrice.replace(/\s/, ' ')).toStrictEqual('100 $ / мес.');
	});

	it('should return formatted price with ru locale and RUB currency', () => {
		const formattedPrice = formatPrice(price, 'RUB', 'month', 'ru');
		expect(formattedPrice.replace(/\s/, ' ')).toStrictEqual('100 ₽ / мес.');
	});
});
