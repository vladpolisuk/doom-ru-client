import clsx from 'clsx';
import { BaseSyntheticEvent, ChangeEvent, ClipboardEvent, FC, InputHTMLAttributes, KeyboardEvent, memo } from 'react';
import { BaseAppComponent } from '../../types/components';
import AppInput from '../AppInput/AppInput';
import s from './AppInputCode.module.scss';

type IAppInputCode = BaseAppComponent<HTMLInputElement> &
	InputHTMLAttributes<HTMLInputElement> & {
		codeLength: number;
		codePlaceholder?: string;
	};

/**
 * The common input code component in the application
 * @type `FC<AppInputCode>`
 * @memo `true`
 * @return `html:input[]`
 */
const AppInputCode: FC<IAppInputCode> = memo(props => {
	const {
		title,
		children,
		type,
		codeLength,
		placeholder,
		className = '',
		onlyARIA = false,
		name = 'codeNumber',
		codePlaceholder = '𐤏',
		...extra
	} = props;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const id = +event.target.id;
		const value = +event.target.value;
		const fields = document.getElementsByName(name) as NodeListOf<HTMLInputElement>;
		if (value && id !== codeLength - 1) fields.item(id + 1).focus();
		const div = Math.floor(value / 10);
		if (div > 0) fields.item(id).value = String(div);
	};

	const handleKeyDown = (event: BaseSyntheticEvent<HTMLInputElement> & KeyboardEvent<HTMLInputElement>) => {
		const id = +event.target.id;
		if (event.target.value || event.key !== 'Backspace') return;
		const fields = document.getElementsByName(name) as NodeListOf<HTMLInputElement>;
		if (id === 0) return;
		fields.item(id - 1).focus();
	};

	const onPaste = (event: BaseSyntheticEvent<HTMLInputElement> & ClipboardEvent<HTMLInputElement>) => {
		event.preventDefault();
		const id = +event.target.id;
		const fields = document.getElementsByName(name) as NodeListOf<HTMLInputElement>;
		const paste = event.clipboardData?.getData('text');
		if (!paste) return;
		const pasteArray = paste.split('');
		if (pasteArray.length > codeLength - id) return;
		pasteArray.forEach((value, index) => {
			fields.item(index).value = value;
		});
	};

	return (
		<div className={s.app_code}>
			{[...Array(6).keys()].map(value => (
				<AppInput
					name={name}
					type='number'
					maxLength={1}
					id={`${value}`}
					key={value}
					data-testid='app-inputCode'
					onChange={onChange}
					onPaste={onPaste}
					onKeyDown={handleKeyDown}
					placeholder={codePlaceholder}
					className={s.app_inputCode}
					{...extra}
				/>
			))}
		</div>
	);
});

AppInputCode.displayName = 'AppInputCode';
export default AppInputCode;
