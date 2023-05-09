import { ButtonHTMLAttributes, FC, memo } from 'react';
import resetStylesOrMerge from '../../utils/ui/resetStylesOrMerge';
import AppSpinner from '../AppSpinner/AppSpinner';
import { BaseAppComponent } from '../types';
import s from './AppButton.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & BaseAppComponent<HTMLButtonElement>;

export interface IAppButton extends Props {
	color?: 'primary' | 'transparent' | 'reset' | 'none' | 'default';
	loading?: boolean;
}

/** ## App Button
 * The common button component in the application
 * @type `FC<AppButton>`
 * @memo `true`
 * @return `html:button`
 */
const AppButton: FC<IAppButton> = memo(
	({
		title,
		children,
		className = '',
		loading = false,
		color = 'default',
		onlyARIA = false,
		resetStyles = false,
		...props
	}) => {
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
				{loading && (
					<AppSpinner
						size={22}
						className={s.app_button_spinner}
					/>
				)}
				{children}
			</button>
		);
	}
);

AppButton.displayName = 'AppButton';
export default AppButton;
