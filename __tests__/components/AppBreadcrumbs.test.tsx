import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AppBreadcrumbs from '../../components/AppBreadcrumbs/AppBreadcrumbs';

describe('AppBreadcrumbs', () => {
	it('should be rendered', () => {
		render(<AppBreadcrumbs />);
		const breadcrumbs = screen.getByTestId('app-breadcrumbs');
		expect(breadcrumbs).toBeInTheDocument();
	});

	it('should be rendered with 3 items', () => {
		render(
			<AppBreadcrumbs>
				<a href='#'>Home</a>
				<a href='#'>About</a>
				<a href='#'>Contact</a>
			</AppBreadcrumbs>
		);
		const breadcrumbs = screen.getByTestId('app-breadcrumbs');
		expect(breadcrumbs.children.length).toBe(3);
	});

	it('should be rendered with 0 items', () => {
		render(<AppBreadcrumbs />);
		const breadcrumbs = screen.getByTestId('app-breadcrumbs');
		expect(breadcrumbs.children.length).toBe(0);
	});

	it('should be rendered with another separator', () => {
		render(
			<AppBreadcrumbs separator='*'>
				<a href='#'>Home</a>
				<a href='#'>About</a>
				<a href='#'>Contact</a>
			</AppBreadcrumbs>
		);
		const breadcrumbs = screen.getByTestId('app-breadcrumbs');
		const separators = screen.getAllByTestId('app-breadcrumbs-separator');
		expect(breadcrumbs.children.length).toBe(3);
		expect(separators.length).toBe(3);
		separators.forEach(sp => expect(sp).toHaveTextContent('*'));
	});

	it('should not be rendered without separator', () => {
		render(
			<AppBreadcrumbs>
				<a href='#'>Home</a>
				<a href='#'>About</a>
				<a href='#'>Contact</a>
			</AppBreadcrumbs>
		);
		const breadcrumbs = screen.getByTestId('app-breadcrumbs');
		const separators = screen.queryAllByTestId('app-breadcrumbs-separator');
		expect(breadcrumbs.children.length).toBe(3);
		expect(separators.length).not.toBe(0);
	});
});
