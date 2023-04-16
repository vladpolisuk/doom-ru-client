import { FC, forwardRef, memo, OptionHTMLAttributes } from 'react';
import { BaseAppComponent } from '../../types/components';
import resetStylesOrMerge from '../../utils/ui/resetStylesOrMerge';
import s from './AppSelect.module.scss';
import AppSelectOption from './AppSelectOption';

type IAppSelect = BaseAppComponent<HTMLSelectElement> & {
	/**
	 * Specifies that an option with a non-empty string value must be selected.
	 */
	invalid?: boolean;
};

type IAppSelectCompound = {
	Option: FC<OptionHTMLAttributes<HTMLOptionElement>>;
};

/** ## App Select
 * The common select component in the application
 * @type `FC<AppSelect>`
 * @memo `true`
 * @return `html:select`
 */
// @ts-ignore
const AppSelect: FC<IAppSelect> & IAppSelectCompound = memo(
	forwardRef<HTMLSelectElement, IAppSelect>(
		({ children, invalid, className = '', resetStyles = false, defaultValue, ...extra }, ref) => {
			const invalidStyles = invalid ? s['app_select--invalid'] : '';
			const selectStyles = resetStylesOrMerge(resetStyles, className, s.app_select, invalidStyles);

			return (
				<select
					ref={ref}
					data-testid='app-select'
					className={selectStyles}
					defaultValue={defaultValue}
					{...extra}>
					{children}
				</select>
			);
		}
	)
);

AppSelect.displayName = 'AppSelect';
AppSelect.Option = memo(AppSelectOption);
export default AppSelect;
