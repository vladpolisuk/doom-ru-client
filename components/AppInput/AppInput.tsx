import { FC, forwardRef, InputHTMLAttributes, memo } from 'react';
import { BaseAppComponent } from '../../types/components';
import { getConcatenatedStylesByCondition } from '../../utils/ui/getConcatenatedStylesByCondition';
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
}

/**
 * The common input component in the application
 * @type `FC<AppInput>`
 * @memo `true`
 * @return `html:input`
 */
export const AppInput: FC<IAppInput> = memo(
	forwardRef<any, IAppInput>((props, ref) => {
		const {
			title,
			children,
			type,
			placeholder,
			iconLeft,
			iconRight,
			className = '',
			onlyARIA = false,
			resetStyles = false,
			...extra
		} = props;

		const titleAttr = onlyARIA ? '' : title;

		const iconSide = iconLeft ? s.app_input_withIconLeft : iconRight ? s.app_input_withIconRight : '';

		const inputStyles = getConcatenatedStylesByCondition(resetStyles, className, s.app_input, iconSide);

		if (iconLeft)
			return (
				<div className={s.app_inputLabel}>
					<span className={s.app_input_iconLeft}>{iconLeft}</span>

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
				</div>
			);
		else if (iconRight)
			return (
				<div className={s.app_inputLabel}>
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

					<span className={s.app_input_iconRight}>{iconRight}</span>
				</div>
			);

		return (
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
		);
	})
);

AppInput.displayName = 'AppInput';
