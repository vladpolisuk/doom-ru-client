import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AppLocationBadge } from '../../components/AppLocationBadge/AppLocationBadge';
import { store } from '../../store/store';

describe('AppLocationBadge', () => {
	it('should be rendered', () => {
		render(
			<Provider store={store}>
				<AppLocationBadge />
			</Provider>
		);
		const badge = screen.getByTestId('app-location-badge');
		expect(badge).toBeInTheDocument();
	});
});
