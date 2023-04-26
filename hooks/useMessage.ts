import { useEffect, useState } from 'react';
import { IAppMessageType } from '../components/AppMessage/AppMessage';

interface ShowMessageProps {
	message: string;
	type?: IAppMessageType;
	delay?: number;
	duration?: number;
}

/** ## Use Message Hook
 * Application hook to control `AppMessage` component
 * @returns `{ showMessage }`
 */
export const useMessage = () => {
	const [open, setOpen] = useState(false);
	const [props, setProps] = useState<ShowMessageProps>({
		message: '',
		type: 'info',
		delay: 2000,
		duration: 200
	});

	useEffect(() => {
		if (!open) return;

		const time = (props.delay as number) + (props.duration as number);

		const timeout = setTimeout(() => {
			setOpen(false);
		}, time);

		return () => {
			clearTimeout(timeout);
		};
	}, [open]);

	const showMessage = (props: ShowMessageProps) => {
		setProps(prev => ({ ...prev, ...props }));
		setOpen(true);
	};

	return {
		open,
		showMessage,
		props
	};
};
