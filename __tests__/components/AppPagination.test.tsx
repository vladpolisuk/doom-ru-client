import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AppPagination from '../../components/AppPagination/AppPagination';

describe('AppPagination', () => {
	it('should be rendered', () => {
		const onPageChange = jest.fn();
		const wrapper = render(
			<AppPagination
				totalPages={100}
				currentPage={10}
				pageSize={5}
				onPageChange={onPageChange}
			/>
		);
		const pagination = screen.getByTestId('app-pagination');
		expect(pagination).toBeInTheDocument();
		expect(wrapper).toMatchSnapshot();
	});
});
