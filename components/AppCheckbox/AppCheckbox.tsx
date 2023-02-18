import { FC, Ref, InputHTMLAttributes, memo, forwardRef } from 'react';
import { getConcatenatedStylesByCondition } from '../../utils/ui/getConcatenatedStylesByCondition';
import { BaseAppComponent } from '../../types/components';
import s from './AppCheckbox.module.scss';

type IAppCheckbox = BaseAppComponent<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>;

/**
 * The common checkbox component in the application
 * @type `FC<AppCheckbox>`
 * @memo `true`
 * @return `html:checkbox`
 */
export const AppCheckbox: FC<IAppCheckbox> = memo(
	forwardRef<any, IAppCheckbox>((props, ref) => {
		const { title, children, className = '', onlyARIA = false, resetStyles = false, ...extra } = props;
		const titleAttr = onlyARIA ? '' : title;

		const checkboxStyles = getConcatenatedStylesByCondition(resetStyles, className, s.app_checkbox);

		return (
			<input
				type='checkbox'
				title={titleAttr}
				aria-label={title}
				ref={ref}
				data-testid='app-checkbox'
				className={checkboxStyles}
				{...extra}
			/>
		);
	})
);

AppCheckbox.displayName = 'AppCheckbox';