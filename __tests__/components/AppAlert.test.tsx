import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import AppAlert from '../../components/AppAlert/AppAlert';

describe('AppAlert', () => {
	it('should render alert', () => {
		const wrapper = render(<AppAlert />);
		const alert = wrapper.getByTestId('app-alert');
		expect(alert).toBeInTheDocument();
		expect(alert).toMatchSnapshot();
	});

	it('should render alert with message', () => {
		const wrapper = render(<AppAlert>Hello World</AppAlert>);
		const alert = wrapper.getByTestId('app-alert');
		expect(alert).toBeInTheDocument();
		expect(alert).toHaveTextContent('Hello World');
	});

	it('should render alert with type', () => {
		const wrapper = render(<AppAlert type='error'>Hello World</AppAlert>);
		const alert = wrapper.getByTestId('app-alert');
		expect(alert).toBeInTheDocument();
		expect(alert).toHaveTextContent('Hello World');
		expect(alert).toHaveClass('app_alert--error');
	});

	it('should render alert with custom class', () => {
		const wrapper = render(<AppAlert className='custom-class'>Hello World</AppAlert>);
		const alert = wrapper.getByTestId('app-alert');
		expect(alert).toBeInTheDocument();
		expect(alert).toHaveTextContent('Hello World');
		expect(alert).toHaveClass('custom-class');
	});
});
