import { FC, forwardRef, InputHTMLAttributes, memo, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { BaseAppComponent } from '../../types/components';
import resetStylesOrMerge from '../../utils/ui/resetStylesOrMerge';
import AppButton from '../AppButton/AppButton';
import s from './AppInput.module.scss';

type Props = BaseAppComponent<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>;

interface IAppInput extends Props {
	/**
	 * Specify an icon to display on the left of input
	 */
	iconLeft?: JSX.Element;
	/**
	 * Specify an icon to display on the right of input
	 */
	iconRight?: JSX.Element;
	/**
	 * Specify that input value is invalid
	 */
	invalid?: boolean;
	/**
	 * Specify that showPassword button should be rendered
	 */
	showPasswordButton?: boolean;
	/**
	 * Specify that input should be rendered as textarea
	 */
	as?: 'input' | 'textarea';
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
			as = 'input',
			placeholder,
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

		const Component = ({ ...props }: any) => {
			return {
				textarea: (
					<textarea
						ref={ref}
						{...props}
					/>
				),
				input: (
					<input
						ref={ref}
						{...props}
					/>
				)
			}[as];
		};

		if (iconLeft)
			return (
				<div className={s.app_inputLabel}>
					<span className={s.app_input_iconLeft}>{iconLeft}</span>

					<Component
						type={type}
						title={titleAttr}
						aria-label={title}
						placeholder={placeholder}
						data-testid='app-input'
						className={inputStyles}
						{...extra}
					/>
				</div>
			);
		else if (iconRight)
			return (
				<div className={s.app_inputLabel}>
					<Component
						type={type}
						title={titleAttr}
						aria-label={title}
						placeholder={placeholder}
						data-testid='app-input'
						className={inputStyles}
						{...extra}
					/>

					<span className={s.app_input_iconRight}>{iconRight}</span>
				</div>
			);
		else if (showPasswordButton) {
			return (
				<div className={s.app_inputLabel}>
					<Component
						title={titleAttr}
						aria-label={title}
						placeholder={placeholder}
						data-testid='app-input'
						className={inputStyles}
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

		return (
			<Component
				type={type}
				title={titleAttr}
				aria-label={title}
				placeholder={placeholder}
				data-testid='app-input'
				className={inputStyles}
				{...extra}
			/>
		);
	})
);

export default AppInput;
