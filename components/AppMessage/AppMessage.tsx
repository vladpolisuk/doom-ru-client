import { FC, HTMLAttributes, memo } from 'react';
import { createPortal } from 'react-dom';
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle, FaTimesCircle } from 'react-icons/fa';
import resetStylesOrMerge from '../../utils/ui/resetStylesOrMerge';
import { BaseAppComponent } from '../types';
import s from './AppMessage.module.scss';

type Props = BaseAppComponent<HTMLDivElement> & HTMLAttributes<HTMLDivElement>;

export type IAppMessageType = 'error' | 'info' | 'warning' | 'success';

interface IAppMessage extends Props {
	message: string;
	type?: IAppMessageType;
	delay?: number;
	duration?: number;
	rootId?: string;
	open: boolean;
}

/** ## App Message
 * The common message component in the application
 * @type `FC<AppMessage>`
 * @memo `true`
 * @return `html:div`
 */
const AppMessage: FC<IAppMessage> = memo(
	({
		title,
		className = '',
		message,
		open,
		onlyARIA = false,
		delay = 2000,
		duration = 200,
		type = 'info',
		rootId = 'message-root',
		resetStyles = false,
		...props
	}) => {
		const Icon = {
			info: FaInfoCircle,
			success: FaCheckCircle,
			warning: FaExclamationTriangle,
			error: FaTimesCircle
		}[type];

		const styles = resetStylesOrMerge(resetStyles, className, s.app_message, s[`app_message--${type}`]);

		return open
			? createPortal(
					<div
						// @ts-ignore
						style={{ '--delay': `${delay}ms`, '--duration': `${duration}ms` }}
						className={styles}
						data-testid='app-message'
						{...props}>
						<Icon
							size={20}
							className={s.app_message_icon}
						/>

						{message}
					</div>,
					document.getElementById(rootId) as HTMLElement
			  )
			: null;
	}
);

AppMessage.displayName = 'AppMessage';
export default AppMessage;
