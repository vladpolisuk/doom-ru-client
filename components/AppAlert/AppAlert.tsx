import { FC, HTMLAttributes, memo } from 'react';
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle, FaTimesCircle } from 'react-icons/fa';
import resetStylesOrMerge from '../../utils/ui/resetStylesOrMerge';
import { BaseAppComponent } from '../types';
import s from './AppAlert.module.scss';

type Type = 'error' | 'success' | 'info' | 'warning';

type Props = BaseAppComponent<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement>;

export interface IAppAlert extends Props {
	type?: Type;
}

/** ## App Alert
 * The common alert component in the application
 * @type `FC<AppAlert>`
 * @memo `true`
 * @return `html:span`
 */
const AppAlert: FC<IAppAlert> = memo(({ resetStyles = false, className = '', type = 'info', children, ...extra }) => {
	const styles = resetStylesOrMerge(resetStyles, className, s.app_alert, s[`app_alert--${type}`]);

	const Icon = {
		error: FaTimesCircle,
		success: FaCheckCircle,
		info: FaInfoCircle,
		warning: FaExclamationTriangle
	}[type];

	return (
		<span
			data-testid='app-alert'
			className={styles}
			{...extra}>
			<Icon size={20} />
			{children}
		</span>
	);
});

AppAlert.displayName = 'AppAlert';
export default AppAlert;
