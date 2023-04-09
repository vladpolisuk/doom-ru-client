import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { AppImageSlider } from '../../components/AppImageSlider/AppImageSlider';

const images = [
	{
		url: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
	},
	{
		url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
	},
	{
		url: 'https://images.unsplash.com/photo-1538944570562-2c9cb7857097?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
	},
	{
		url: 'https://images.unsplash.com/photo-1571843439991-dd2b8e051966?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
	},
	{
		url: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
	}
];

describe('AppImageSlider', () => {
	it('should render', () => {
		const wrapper = render(<AppImageSlider images={images} />);
		const slider = wrapper.getByTestId('app-image-slider');
		expect(slider).toBeInTheDocument();
		expect(wrapper).toMatchSnapshot();
	});

	it('should render with carousel', () => {
		const wrapper = render(
			<AppImageSlider
				withCarousel
				images={images}
			/>
		);
		const carousel = wrapper.getByTestId('app-image-slider-carousel');
		expect(carousel.children.length).toBe(5);
		expect(carousel).toBeInTheDocument();
	});

	it('should change image on click', async () => {
		const wrapper = render(
			<AppImageSlider
				withCarousel
				images={images}
			/>
		);
		const next = wrapper.getByTestId('app-image-slider-next');
		const prev = wrapper.getByTestId('app-image-slider-prev');
		let image = wrapper.getByTestId('app-image-slider-image');
		expect(image.getAttribute('src')).toMatch(new RegExp(encodeURIComponent(images[0].url)));
		fireEvent.click(next);
		setTimeout(() => {
			image = wrapper.getByTestId('app-image-slider-image');
			expect(image.getAttribute('src')).toMatch(new RegExp(encodeURIComponent(images[1].url)));
			fireEvent.click(prev);
			setTimeout(() => {
				image = wrapper.getByTestId('app-image-slider-image');
				expect(image.getAttribute('src')).toMatch(new RegExp(encodeURIComponent(images[0].url)));
			}, 1000);
		}, 1000);
	});

	it('should change image on carousel click', async () => {
		const wrapper = render(
			<AppImageSlider
				withCarousel
				images={images}
			/>
		);
		const carousel = wrapper.getByTestId('app-image-slider-carousel');
		let image = wrapper.getByTestId('app-image-slider-image');
		expect(image.getAttribute('src')).toMatch(new RegExp(encodeURIComponent(images[0].url)));
		fireEvent.click(carousel.children[1]);
		setTimeout(() => {
			image = wrapper.getByTestId('app-image-slider-image');
			expect(image.getAttribute('src')).toMatch(new RegExp(encodeURIComponent(images[1].url)));
		}, 1000);
	});
});
