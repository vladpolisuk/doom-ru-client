import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { AppInput } from '../../components/AppInput/AppInput';

describe('AppInput', () => {
	it('should be rendered', () => {
		render(<AppInput />);
		const input = screen.getByTestId('app-input');
		expect(input).toBeInTheDocument();
	});

	it('should be rendered with standard attributes', () => {
		render(<AppInput />);
		const input = screen.getByTestId('app-input');
		expect(input).toHaveClass('app_input');
		expect(input).not.toHaveAttribute('value');
		expect(input).not.toHaveAttribute('type');
		expect(input).not.toHaveAttribute('placeholder');
		expect(input).not.toBeDisabled();
	});

	it('should be rendered with placeholder', () => {
		render(<AppInput placeholder='test' />);
		const input = screen.getByTestId('app-input');
		expect(input).toHaveAttribute('placeholder', 'test');
	});

	it('should be rendered with value', () => {
		render(
			<AppInput
				readOnly
				value='test'
			/>
		);
		const input = screen.getByTestId('app-input');
		expect(input).toHaveAttribute('value', 'test');
	});

	it('should be rendered with type', () => {
		render(<AppInput type='password' />);
		const input = screen.getByTestId('app-input');
		expect(input).toHaveAttribute('type', 'password');
	});

	it('should be rendered with disabled', () => {
		render(<AppInput disabled />);
		const input = screen.getByTestId('app-input');
		expect(input).toBeDisabled();
	});

	it('should be rendered with custom class', () => {
		render(<AppInput className='custom-class' />);
		const input = screen.getByTestId('app-input');
		expect(input).toHaveClass('custom-class');
	});

	it('should be rendered with iconLeft', () => {
		render(<AppInput iconLeft={<div>test</div>} />);
		const iconLeft = screen.getByText('test');
		expect(iconLeft).toBeInTheDocument();
	});

	it('should be rendered with iconRight', () => {
		render(<AppInput iconRight={<div>test</div>} />);
		const iconRight = screen.getByText('test');
		expect(iconRight).toBeInTheDocument();
	});

	it('should has input value', () => {
		render(<AppInput />);
		const input = screen.getByTestId('app-input');
		fireEvent.input(input, { target: { value: 'test' } });
		expect(input).toHaveValue('test');
	});

	it('should be called onChange', () => {
		const onChange = jest.fn();
		render(<AppInput onChange={onChange} />);
		const input = screen.getByTestId('app-input');
		fireEvent.input(input, { target: { value: 'test' } });
		expect(onChange).toBeCalled();
	});

	it('should be called onFocus', () => {
		const onFocus = jest.fn();
		render(<AppInput onFocus={onFocus} />);
		const input = screen.getByTestId('app-input');
		fireEvent.focus(input);
		expect(onFocus).toBeCalled();
	});
});
