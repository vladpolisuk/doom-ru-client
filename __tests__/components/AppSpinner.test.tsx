import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import AppSpinner from '../../components/AppSpinner/AppSpinner';

describe('AppSpinner', () => {
	it('should render spinner', () => {
		const wrapper = render(<AppSpinner />);
		const spinner = wrapper.getByTestId('app-spinner');
		expect(spinner).toBeInTheDocument();
		expect(spinner).toMatchSnapshot();
	});

	it('should render spinner with custom class', () => {
		const wrapper = render(<AppSpinner className='custom-class' />);
		const spinner = wrapper.getByTestId('app-spinner');
		expect(spinner).toBeInTheDocument();
		expect(spinner).toHaveClass('custom-class');
	});
});
