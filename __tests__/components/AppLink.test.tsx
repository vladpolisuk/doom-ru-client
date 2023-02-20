import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import AppLink from '../../components/AppLink/AppLink';

describe('AppLink', () => {
	const useRouter = jest.spyOn(require('next/router'), 'useRouter');

	useRouter.mockImplementation(() => ({
		push: jest.fn(),
		prefetch: jest.fn(),
		locale: 'en'
	}));

	it('should be rendered', () => {
		render(<AppLink href='#'>Link</AppLink>);
		const link = screen.getByTestId('app-link');
		expect(link).toBeInTheDocument();
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
