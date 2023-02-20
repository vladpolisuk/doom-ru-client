import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import AppButton from '../../components/AppButton/AppButton';

describe('AppButton', () => {
	it('should be rendered', () => {
		render(<AppButton />);
		const button = screen.getByTestId('app-button');
		expect(button).toBeInTheDocument();
	});

	it('should be rendered with standard attributes', () => {
		render(<AppButton />);
		const button = screen.getByTestId('app-button');
		expect(button).toHaveClass('app_button');
		expect(button).not.toBeDisabled();
	});

	it('should be rendered with custom class', () => {
		render(<AppButton className='custom-class' />);
		const button = screen.getByTestId('app-button');
		expect(button).toHaveClass('custom-class');
	});

	it('should be rendered with disabled', () => {
		render(<AppButton disabled />);
		const button = screen.getByTestId('app-button');
		expect(button).toBeDisabled();
	});

	it('should be rendered with text', () => {
		render(<AppButton>text</AppButton>);
		const button = screen.getByTestId('app-button');
		expect(button).toHaveTextContent('text');
	});

	it('should be clicked', () => {
		const onClick = jest.fn();
		render(<AppButton onClick={onClick} />);
		const button = screen.getByTestId('app-button');
		fireEvent.click(button);
		expect(onClick).toBeCalled();
	});

	it('should be focused', () => {
		render(<AppButton />);
		const button = screen.getByTestId('app-button');
		button.focus();
		expect(button).toHaveFocus();
	});
});
