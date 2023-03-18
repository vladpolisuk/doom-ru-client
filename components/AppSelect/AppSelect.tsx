import { FC, forwardRef, memo, OptionHTMLAttributes } from 'react';
import { BaseAppComponent } from '../../types/components';
import resetStylesOrMerge from '../../utils/ui/resetStylesOrMerge';
import s from './AppSelect.module.scss';
import AppSelectOption from './AppSelectOption';

type IAppSelect = BaseAppComponent<HTMLSelectElement>;

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
	forwardRef<HTMLSelectElement, IAppSelect>((props, ref) => {
		const { children, className = '', resetStyles = false, defaultValue, ...extra } = props;
		const selectStyles = resetStylesOrMerge(resetStyles, className, s.app_select);

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
	})
);

AppSelect.displayName = 'AppSelect';
AppSelect.Option = memo(AppSelectOption);
export default AppSelect;
