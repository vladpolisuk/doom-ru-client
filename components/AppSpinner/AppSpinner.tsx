import { FC, memo } from 'react';
import { CgSpinner } from 'react-icons/cg';
import { IconBaseProps, IconType } from 'react-icons/lib';
import { BaseAppComponent } from '../../types/components';
import resetStylesOrMerge from '../../utils/ui/resetStylesOrMerge';
import s from './AppSpinner.module.scss';

export type Props = BaseAppComponent<HTMLOrSVGElement> &
	IconBaseProps & {
		/**
		 * Specify that button should render with loading spinner
		 */
		Icon?: IconType;
	};

/** ## App Spinner
 * The common spinner component in the application
 * @type `FC<Icon>`
 * @memo `true`
 * @return `html:svg`
 */

const AppSpinner: FC<Props> = memo(({ Icon = CgSpinner, resetStyles = false, className = '', ...extra }) => {
	const styles = resetStylesOrMerge(resetStyles, className, s.app_spinner);

	return (
		<Icon
			data-testid='app-spinner'
			className={styles}
			{...extra}
		/>
	);
});

AppSpinner.displayName = 'AppSpinner';
export default AppSpinner;
