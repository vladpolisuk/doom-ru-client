import {
	BaseSyntheticEvent,
	ClipboardEvent,
	FC,
	InputHTMLAttributes,
	KeyboardEvent,
	memo,
	useEffect,
	useState
} from 'react';
import { BaseAppComponent } from '../../types/components';
import AppInput from '../AppInput/AppInput';
import s from './AppInputCode.module.scss';

type IAppInputCode = BaseAppComponent<HTMLInputElement> &
	InputHTMLAttributes<HTMLInputElement> & {
		codeLength: number;
		codePlaceholder?: string;
		submit: (code: number) => void;
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
		submit,
		...extra
	} = props;
	const [code, setCode] = useState('');

	useEffect(() => {
		if (code.length === codeLength) submit(+code);
		console.log(code);
	}, [code]);

	const onChange = (event: BaseSyntheticEvent<HTMLInputElement> & KeyboardEvent<HTMLInputElement>) => {
		const fields = document.getElementsByName(name) as NodeListOf<HTMLInputElement>;
		const id = +event.target.id;
		const value = +event.target.value;
		if (id !== codeLength - 1) fields.item(id + 1).focus();
		const div = Math.floor(value / 10);
		if (div < 1) return setCode(code + value);
		fields.item(id).value = String(div);
	};

	const handleBackspace = (event: BaseSyntheticEvent<HTMLInputElement> & KeyboardEvent<HTMLInputElement>) => {
		const id = +event.target.id;
		const value = +event.target.value;
		if (event.key !== 'Backspace') return;
		event.preventDefault();
		const fields = document.getElementsByName(name) as NodeListOf<HTMLInputElement>;
		if (id > 0) {
			if (!value) return fields.item(id - 1).focus();
			fields.item(id - 1).focus();
		}
		fields.item(id).value = '';
		setCode(code.slice(0, code.length - 1));
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
		setCode(paste);
	};

	return (
		<div className={s.app_code}>
			{[...Array(codeLength).keys()].map(value => (
				<AppInput
					name={name}
					type='number'
					maxLength={1}
					id={`${value}`}
					key={value}
					data-testid='app-inputCode'
					onInput={onChange}
					onPaste={onPaste}
					onKeyDown={handleBackspace}
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
