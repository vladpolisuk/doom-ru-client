import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import AppLink from '../../components/AppLink/AppLink';

describe('AppLink', () => {
	const useRouter = jest.spyOn(require('next/router'), 'useRouter');

	useRouter.mockImplementation(() => ({
		push: jest.fn(),
		prefetch: jest.fn(),
		query: {
			lang: 'en'
		}
	}));

	it('should be rendered', () => {
		const wrapper = render(<AppLink href='#'>Link</AppLink>);
		const link = screen.getByTestId('app-link');
		expect(link).toBeInTheDocument();
		expect(wrapper).toMatchSnapshot();
	});

	it('should be rendered with href', () => {
		render(<AppLink href='#'>Link</AppLink>);
		const link = screen.getByTestId('app-link');
		expect(link).toHaveAttribute('href', '/en#');
	});

	it('should be rendered with target', () => {
		render(
			<AppLink
				href='#'
				target='_blank'>
				Link
			</AppLink>
		);
		const link = screen.getByTestId('app-link');
		expect(link).toHaveAttribute('target', '_blank');
	});

	it('should be rendered with rel', () => {
		render(
			<AppLink
				href='#'
				rel='noopener noreferrer'>
				Link
			</AppLink>
		);
		const link = screen.getByTestId('app-link');
		expect(link).toHaveAttribute('rel', 'noopener noreferrer');
	});

	it('should be rendered with onClick', () => {
		const onClick = jest.fn();
		render(
			<AppLink
				href='#'
				onClick={onClick}>
				Link
			</AppLink>
		);
		const link = screen.getByTestId('app-link');
		fireEvent.click(link);
		expect(onClick).toHaveBeenCalledTimes(1);
	});
});
