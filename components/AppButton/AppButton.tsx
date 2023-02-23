import { ButtonHTMLAttributes, FC, memo } from 'react';
import resetStylesOrMerge from '../../utils/ui/resetStylesOrMerge';
import { BaseAppComponent } from '../../types/components';
import s from './AppButton.module.scss';

export type IAppButton = ButtonHTMLAttributes<HTMLButtonElement> & BaseAppComponent<HTMLButtonElement>;

/**
 * The common button component in the application
 * @type `FC<AppButton>`
 * @memo `true`
 * @return `html:button`
 */
const AppButton: FC<IAppButton> = memo(
	({ title, children, className = '', onlyARIA = false, resetStyles = false, ...props }) => {
		const titleAttr = onlyARIA ? '' : title;

		const styles = resetStylesOrMerge(resetStyles, className, s.app_button);

		return (
			<button
				className={styles}
				aria-label={title}
				title={titleAttr}
				data-testid='app-button'
				{...props}>
				{children}
			</button>
		);
	}
);

AppButton.displayName = 'AppButton';
export default AppButton;
