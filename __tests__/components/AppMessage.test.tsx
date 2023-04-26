import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AppMessage from '../../components/AppMessage/AppMessage';

describe('AppMessage', () => {
	const rootId = 'message-root';

	beforeEach(() => {
		const rootElement = document.createElement('div');
		rootElement.setAttribute('id', rootId);
		document.body.appendChild(rootElement);
	});

	afterEach(() => {
		const rootElement = document.getElementById(rootId);
		if (rootElement) {
			document.body.removeChild(rootElement);
		}
	});

	it('should render the correct message and icon based on the type', () => {
		render(
			<AppMessage
				open={true}
				message='Test message'
				type='success'
			/>
		);
		const messageElement = screen.getByText('Test message');
		const iconElement = screen.getByTestId('app-message').firstChild;
		expect(messageElement).toBeInTheDocument();
		expect(iconElement).toHaveClass('app_message_icon');
	});

	it('should not render if the open prop is set to false', () => {
		render(
			<AppMessage
				open={false}
				message='Test message'
			/>
		);
		const messageElement = screen.queryByText('Test message');
		expect(messageElement).not.toBeInTheDocument();
	});
});
