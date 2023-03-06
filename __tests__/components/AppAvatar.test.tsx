import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import AppAvatar from '../../components/AppAvatar/AppAvatar';

describe('AppAvatar', () => {
	it('should render avatar', () => {
		const wrapper = render(<AppAvatar />);
		const avatar = wrapper.getByTestId('app-avatar');
		expect(avatar).toBeInTheDocument();
		expect(avatar).toMatchSnapshot();
	});

	it('should render avatar with image', () => {
		const wrapper = render(<AppAvatar src='https://via.placeholder.com/150' />);
		const avatar = wrapper.getByTestId('app-avatar');
		expect(avatar).toBeInTheDocument();
		expect(avatar).toHaveAttribute('src', '/_next/image?url=https%3A%2F%2Fvia.placeholder.com%2F150&w=96&q=75');
	});

	it('should render avatar with image and alt', () => {
		const wrapper = render(
			<AppAvatar
				src='https://via.placeholder.com/150'
				alt='Test'
			/>
		);
		const avatar = wrapper.getByTestId('app-avatar');
		expect(avatar).toBeInTheDocument();
		expect(avatar).toHaveAttribute('src', '/_next/image?url=https%3A%2F%2Fvia.placeholder.com%2F150&w=96&q=75');
		expect(avatar).toHaveAttribute('alt', 'Test');
	});
});
