import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { FC, HTMLAttributes, memo } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import usePagination, { DOTS } from '../../hooks/usePagination';
import { BaseAppComponent } from '../../types/components';
import AppButton from '../AppButton/AppButton';
import s from './AppPagination.module.scss';

export type IAppPagination = HTMLAttributes<HTMLUListElement> &
	BaseAppComponent<HTMLUListElement> & {
		/**
		 * Represents the total count of data available from the source.
		 */
		totalPages: number;
		/**
		 * Represents the maximum data that is visible in a single page.
		 */
		pageSize: number;
		/**
		 * Represents the current active page. Defaults to 1.
		 */
		currentPage?: number;
		/**
		 * Represents the min number of page buttons to be shown on each side of the current page button. Defaults to 1.
		 */
		siblingCount?: number;
		/**
		 * Callback function invoked with the updated page value when the page is changed.
		 * @param page number
		 */
		onPageChange: (page: number) => void;
	};

/**
 * The common pagination component in the application
 * @type `FC<AppPagination>`
 * @memo `true`
 * @return `html:ul`
 */
const AppPagination: FC<IAppPagination> = memo(
	({
		title,
		children,
		className = '',
		totalPages,
		pageSize,
		currentPage = 1,
		siblingCount = 1,
		onlyARIA = false,
		resetStyles = false,
		onPageChange,
		...props
	}) => {
		const t = useTranslation('search').t;

		const paginationRange = usePagination({
			currentPage,
			totalPages,
			siblingCount,
			pageSize
		});

		if (!paginationRange) return null;
		if (currentPage === 0 || paginationRange.length < 2) return null;

		const onNext = () => onPageChange(currentPage + 1);
		const onPrevious = () => onPageChange(currentPage - 1);

		const prevLabel = t('search_result_btn.prev.label');
		const nextLabel = t('search_result_btn.next.label');
		const pageLabel = (page: number) => t('search_result_btn.page.label', { page });
		const lastPage = paginationRange[paginationRange.length - 1];
		const titleAttr = onlyARIA ? '' : title;
		const paginationStyles = clsx(className, s.app_pagination, 'unlisted');
		const itemStyles = clsx(s.app_pagination_item, 'active--scale');
		const leftBtnStyles = clsx(s.app_pagination_item, currentPage !== 1 && 'active--scale');
		const rightBtnStyles = clsx(s.app_pagination_item, currentPage !== lastPage && 'active--scale');

		return (
			<ul
				className={paginationStyles}
				aria-label={title}
				title={titleAttr}
				data-testid='app-pagination'
				{...props}>
				<li>
					<AppButton
						onlyARIA
						color='transparent'
						title={prevLabel}
						disabled={currentPage === 1}
						className={leftBtnStyles}
						onClick={onPrevious}>
						<FaChevronLeft />
					</AppButton>
				</li>

				{paginationRange.map((pageNumber, i) =>
					pageNumber === DOTS ? (
						<li
							key={`dots-${i}`}
							className={s.app_pagination_dots}>
							{DOTS}
						</li>
					) : (
						<li key={pageNumber}>
							<AppButton
								onlyARIA
								color='transparent'
								className={itemStyles}
								title={pageLabel(pageNumber as number)}
								data-selected={pageNumber === currentPage}
								onClick={() => onPageChange(pageNumber as number)}>
								{pageNumber}
							</AppButton>
						</li>
					)
				)}

				<li>
					<AppButton
						onlyARIA
						color='transparent'
						title={nextLabel}
						disabled={currentPage === lastPage}
						className={rightBtnStyles}
						onClick={onNext}>
						<FaChevronRight />
					</AppButton>
				</li>
			</ul>
		);
	}
);

AppPagination.displayName = 'AppPagination';
export default AppPagination;
