import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import AppSkipLink from '../../components/AppSkipLink/AppSkipLink';

describe('AppSkipLink', () => {
	it('should render the component', () => {
		const wrapper = render(<AppSkipLink />);
		const link = screen.getByTestId('app-skip-link');
		expect(wrapper).toMatchSnapshot();
		expect(link).toBeInTheDocument();
	});

	it('should render the component with custom class', () => {
		render(<AppSkipLink className='custom-class' />);
		const link = screen.getByTestId('app-skip-link');
		expect(link).toBeInTheDocument();
		expect(link).toHaveClass('custom-class');
	});

	it('should changes the url when clicked', () => {
		render(<AppSkipLink />);
		const link = screen.getByTestId('app-skip-link');
		expect(link).toBeInTheDocument();
		fireEvent.click(link);
		expect(link).toHaveAttribute('href', '#main');
	});
});
