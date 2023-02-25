import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AppSkeleton from '../../components/AppSkeleton/AppSkeleton';

describe('AppSkeleton', () => {
	it('should render the component', () => {
		const wrapper = render(<AppSkeleton />);
		const skeleton = screen.getByTestId('app-skeleton');
		expect(wrapper).toMatchSnapshot();
		expect(skeleton).toBeInTheDocument();
	});

	it('should render the component with children', () => {
		render(
			<AppSkeleton>
				<div data-testid='app-skeleton-child' />
			</AppSkeleton>
		);
		const skeleton = screen.getByTestId('app-skeleton');
		const child = screen.getByTestId('app-skeleton-child');
		expect(skeleton).toBeInTheDocument();
		expect(child).toBeInTheDocument();
	});

	it('should render the component with children and custom class', () => {
		render(
			<AppSkeleton className='custom-class'>
				<div data-testid='app-skeleton-child' />
			</AppSkeleton>
		);
		const skeleton = screen.getByTestId('app-skeleton');
		const child = screen.getByTestId('app-skeleton-child');
		expect(skeleton).toBeInTheDocument();
		expect(child).toBeInTheDocument();
		expect(skeleton).toHaveClass('custom-class');
	});
});
