import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import AppSelect from '../../components/AppSelect/AppSelect';

describe('AppSelect', () => {
	const data = [
		{ value: '', label: 'Choose option' },
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' }
	];

	it('should render AppSelect', () => {
		const wrapper = render(
			<AppSelect>
				{data.map(option => (
					<AppSelect.Option
						key={option.value}
						value={option.value}>
						{option.label}
					</AppSelect.Option>
				))}
			</AppSelect>
		);
		const select = screen.getByTestId('app-select');
		expect(select).toBeInTheDocument();
		expect(wrapper).toMatchSnapshot();
	});

	it('should render AppSelect with options', () => {
		render(
			<AppSelect>
				{data.map(option => (
					<AppSelect.Option
						key={option.value}
						value={option.value}>
						{option.label}
					</AppSelect.Option>
				))}
			</AppSelect>
		);
		const options = screen.getAllByTestId('app-select-option');
		expect(options.length).toBe(4);
		options.forEach((option, index) => {
			expect(option).toHaveTextContent(data[index].label);
		});
	});

	it('should render with default option', () => {
		render(
			<AppSelect>
				{data.map(option => (
					<AppSelect.Option
						key={option.value}
						value={option.value}>
						{option.label}
					</AppSelect.Option>
				))}
			</AppSelect>
		);
		const options = screen.getAllByTestId('app-select-option') as HTMLOptionElement[];
		expect(options[0].selected).toBe(true);
	});

	it('should render AppSelect with options and select option', () => {
		render(
			<AppSelect>
				{data.map(option => (
					<AppSelect.Option
						key={option.value}
						value={option.value}>
						{option.label}
					</AppSelect.Option>
				))}
			</AppSelect>
		);
		const select = screen.getByTestId('app-select') as HTMLSelectElement;
		const options = screen.getAllByTestId('app-select-option') as HTMLOptionElement[];
		fireEvent.change(select, { target: { value: 2 } });
		expect(options[2].selected).toBe(true);
	});
});
