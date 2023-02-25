import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import AppInputCode from '../../components/AppInputCode/AppInputCode';

describe('AppInputCode', () => {
	it('should render', () => {
		const wrapper = render(<AppInputCode codeLength={6} />);
		const input = screen.getAllByTestId('app-inputCode')[0];
		expect(input).toBeInTheDocument();
		expect(wrapper).toMatchSnapshot();
	});

	it('should not have value', () => {
		render(<AppInputCode codeLength={6} />);
		const inputs = screen.getAllByTestId('app-inputCode');
		inputs.forEach(input => expect(input).toHaveValue(null));
	});

	it('should have value', () => {
		render(<AppInputCode codeLength={6} />);
		const inputs = screen.getAllByTestId('app-inputCode');
		inputs.forEach(input => {
			fireEvent.input(input, { target: { value: 1 } });
		});
		inputs.forEach(input => expect(input).toHaveValue(1));
	});

	it('should have value with paste', () => {
		render(<AppInputCode codeLength={6} />);
		const inputs = screen.getAllByTestId('app-inputCode');
		fireEvent.paste(inputs[0], { clipboardData: { getData: () => '123456' } });
		inputs.forEach((input, index) => expect(input).toHaveValue(index + 1));
	});
});
