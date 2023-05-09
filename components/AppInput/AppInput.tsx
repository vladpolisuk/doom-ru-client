import { FC, forwardRef, InputHTMLAttributes, memo, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import resetStylesOrMerge from '../../utils/ui/resetStylesOrMerge';
import AppButton from '../AppButton/AppButton';
import { BaseAppComponent } from '../types';
import s from './AppInput.module.scss';

type Props = BaseAppComponent<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement>;

interface IAppInput extends Props {
	iconLeft?: JSX.Element;
	iconRight?: JSX.Element;
	invalid?: boolean;
	showPasswordButton?: boolean;
	as?: 'textarea' | 'input';
}

/** ## App Input
 * The common input component in the application
 * @type `FC<AppInput>`
 * @memo `true`
 * @return `html:input`
 */
const AppInput: FC<IAppInput> = memo(
	forwardRef<any, IAppInput>((props, ref) => {
		const {
			title,
			children,
			type,
			placeholder,
			as = 'input',
			iconLeft,
			iconRight,
			className = '',
			invalid = false,
			onlyARIA = false,
			resetStyles = false,
			showPasswordButton = false,
			...extra
		} = props;

		if (showPasswordButton && type !== 'password')
			throw new Error('cannot use showPasswordButton without [type=password]');

		const [inputType, setInputType] = useState(type);

		const handleShowPassword = () => {
			setInputType(inputType === 'password' ? 'text' : 'password');
		};

		const titleAttr = onlyARIA ? '' : title;
		const iconSide = iconLeft ? s.app_input_withIconLeft : iconRight ? s.app_input_withIconRight : '';
		const invalidStyles = invalid ? s['app_input--invalid'] : '';
		const inputStyles = resetStylesOrMerge(resetStyles, className, s.app_input, iconSide, invalidStyles);

		const component =
			as === 'input' ? (
				<input
					type={type}
					title={titleAttr}
					aria-label={title}
					placeholder={placeholder}
					data-testid='app-input'
					className={inputStyles}
					ref={ref}
					{...extra}
				/>
			) : (
				<textarea
					title={titleAttr}
					aria-label={title}
					placeholder={placeholder}
					data-testid='app-input'
					className={inputStyles}
					ref={ref}
					{...extra}
				/>
			);

		if (iconLeft)
			return (
				<div className={s.app_inputLabel}>
					<span className={s.app_input_iconLeft}>{iconLeft}</span>
					{component}
				</div>
			);
		else if (iconRight)
			return (
				<div className={s.app_inputLabel}>
					{component}
					<span className={s.app_input_iconRight}>{iconRight}</span>
				</div>
			);
		else if (showPasswordButton) {
			return (
				<div className={s.app_inputLabel}>
					<input
						title={titleAttr}
						aria-label={title}
						placeholder={placeholder}
						data-testid='app-input'
						className={inputStyles}
						ref={ref}
						{...extra}
						type={inputType}
					/>

					<AppButton
						color='transparent'
						type='button'
						onClick={handleShowPassword}
						className={s.app_input_showPasswordButton}>
						{inputType === 'password' ? <FaRegEye size='20' /> : <FaRegEyeSlash size='20' />}
					</AppButton>
				</div>
			);
		}

		return component;
	})
);

export default AppInput;
