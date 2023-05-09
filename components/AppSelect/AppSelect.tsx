import { FC, forwardRef, memo, OptionHTMLAttributes } from 'react';
import resetStylesOrMerge from '../../utils/ui/resetStylesOrMerge';
import { BaseAppComponent } from '../types';
import s from './AppSelect.module.scss';
import AppSelectOption from './AppSelectOption';

interface IAppSelect extends BaseAppComponent<HTMLSelectElement> {
	invalid?: boolean;
}

interface IAppSelectCompound {
	Option: FC<OptionHTMLAttributes<HTMLOptionElement>>;
}

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
