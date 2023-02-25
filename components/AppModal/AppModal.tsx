import FocusTrap from 'focus-trap-react';
import { FC, memo, OptionHTMLAttributes, useRef } from 'react';
import { createPortal } from 'react-dom';
import { BaseAppComponent } from '../../types/components';
import resetStylesOrMerge from '../../utils/ui/resetStylesOrMerge';
import s from './AppModal.module.scss';
import AppModalContent from './AppModalContent';
import AppModalFooter from './AppModalFooter';
import AppModalHeader from './AppModalHeader';
import AppModalClose from './AppModalClose';

type IAppModal = BaseAppComponent<HTMLDivElement> & {
	view: boolean;
	setView: (view: boolean) => void;
	overlay?: boolean;
	closeOnOverlay?: boolean;
	rootId?: string;
};

type CompoundProps = {
	Header: FC<OptionHTMLAttributes<HTMLDivElement>>;
	Footer: FC<OptionHTMLAttributes<HTMLDivElement>>;
	Content: FC<OptionHTMLAttributes<HTMLDivElement>>;
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
		setView,
		...extra
	} = props;
	const modalRef = useRef(null);

	const handleModalKeyDown = (event: any) => {
		if (event.key === 'Escape') setView(false);
	};

	const handleOverlayClick = () => {
		if (closeOnOverlay) setView(false);
	};

	const overlayComponent = overlay && (
		<div
			onClick={handleOverlayClick}
			className={s.app_modalOverlay}></div>
	);

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

				{overlayComponent}
			</div>,
			document.getElementById(rootId) as any
		)
	);
});

AppModal.displayName = 'AppModal';
AppModal.Header = memo(AppModalHeader);
AppModal.Footer = memo(AppModalFooter);
AppModal.Content = memo(AppModalContent);
AppModal.Close = memo(AppModalClose);
export default AppModal;
