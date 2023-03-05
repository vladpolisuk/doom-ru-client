import { ButtonHTMLAttributes, FC, memo } from 'react';
import { BaseAppComponent } from '../../types/components';
import resetStylesOrMerge from '../../utils/ui/resetStylesOrMerge';
import s from './AppButton.module.scss';

export type IAppButton = ButtonHTMLAttributes<HTMLButtonElement> & BaseAppComponent<HTMLButtonElement>;

/**
 * The common button component in the application
 * @type `FC<AppButton>`
 * @memo `true`
 * @return `html:button`
 */
const AppButton: FC<IAppButton> = memo(
	({ title, children, className = '', color = 'default', onlyARIA = false, resetStyles = false, ...props }) => {
		const titleAttr = onlyARIA ? '' : title;

		const variantStyle = {
			default: s['app_button--primary'],
			primary: s['app_button--primary'],
			transparent: s['app_button--transparent'],
			none: s['app_button--none'],
			reset: ''
		}[resetStyles ? 'reset' : color];

		const styles = resetStylesOrMerge(resetStyles, className, s.app_button, variantStyle);

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
