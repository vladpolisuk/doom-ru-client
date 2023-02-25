import { FC, memo, OptionHTMLAttributes } from 'react';
import s from './AppSelect.module.scss';

export type IAppSelectOption = FC<OptionHTMLAttributes<HTMLOptionElement>>;

const AppSelectOption: IAppSelectOption = ({ children, ...props }) => {
	return (
		<option
			data-testid='app-select-option'
			className={s.app_select_option}
			{...props}>
			{children}
		</option>
	);
};

export default AppSelectOption;
