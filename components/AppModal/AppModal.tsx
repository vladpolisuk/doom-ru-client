import FocusTrap from 'focus-trap-react';
import { FC, memo, OptionHTMLAttributes, useRef } from 'react';
import { createPortal } from 'react-dom';
import { BaseAppComponent } from '../../types/components';
import resetStylesOrMerge from '../../utils/ui/resetStylesOrMerge';
import s from './AppModal.module.scss';
import AppModalClose from './AppModalClose';
import AppModalContent from './AppModalContent';
import AppModalFooter from './AppModalFooter';
import AppModalHeader from './AppModalHeader';

type IAppModal = BaseAppComponent<HTMLDivElement> & {
	/**
	 * The current visibility state of the modal.
	 */
	view: boolean;
	/**
	 * A function to update the visibility state of the modal.
	 * @param view The new visibility state of the modal.
	 */
	setView: (view: boolean) => void;
	/**
	 * Whether or not to show an overlay behind the modal.
	 */
	overlay?: boolean;
	/**
	 * Whether or not to close the modal when clicking on the overlay.
	 */
	closeOnOverlay?: boolean;
	/**
	 * The ID of the root element to attach the modal to.
	 */
	rootId?: string;
	/**
	 * Whether or not to close the modal when clicking outside of it.
	 */
	closeByOutsideClick?: boolean;
};

type CompoundProps = {
	/**
	 * The header of the compound component.
	 */
	Header: FC<OptionHTMLAttributes<HTMLDivElement>>;

	/**
	 * The footer of the compound component.
	 */
	Footer: FC<OptionHTMLAttributes<HTMLDivElement>>;

	/**
	 * The content of the compound component.
	 */
	Content: FC<OptionHTMLAttributes<HTMLDivElement>>;

	/**
	 * A button component to close the compound component.
	 */
	Close: FC<OptionHTMLAttributes<HTMLButtonElement>>;
};

/** ## App Modal
 * The common modal component in the application
 * @type `FC<AppModal>`
 * @memo `true`
 * @return `html:div`
 */
// @ts-ignore
const AppModal: FC<IAppModal> & CompoundProps = memo<IAppModal>(props => {
	const {
		children,
		className = '',
		resetStyles = false,
		overlay = true,
		closeOnOverlay = true,
		view = false,
		rootId = 'modal-root',
		closeByOutsideClick = true,
		setView,
		...extra
	} = props;

	const modalRef = useRef(null);

	const handleModalKeyDown = (event: any) => {
		if (event.key === 'Escape') setView(false);
	};

	const handleOverlayClick = () => {
		if (!closeByOutsideClick) return;
		if (closeOnOverlay) setView(false);
	};

	const styles = resetStylesOrMerge(resetStyles, className, s.app_modal);

	return (
		view &&
		createPortal(
			<div className={s.app_modalBox}>
				<FocusTrap
					active={view}
					focusTrapOptions={{
						escapeDeactivates: false,
						allowOutsideClick: true
					}}>
					<div
						onKeyDown={handleModalKeyDown}
						ref={modalRef}
						className={styles}
						data-testid='app-modal'
						{...extra}>
						{children}
					</div>
				</FocusTrap>

				{overlay && (
					<div
						onClick={handleOverlayClick}
						className={s.app_modalOverlay}></div>
				)}
			</div>,
			document.getElementById(rootId) as HTMLElement
		)
	);
});

AppModal.displayName = 'AppModal';
AppModal.Header = memo(AppModalHeader);
AppModal.Footer = memo(AppModalFooter);
AppModal.Content = memo(AppModalContent);
AppModal.Close = memo(AppModalClose);
export default AppModal;
