import { FC, LabelHTMLAttributes, memo } from 'react';
import getConcatenatedStylesByCondition from '../../utils/ui/getConcatenatedStylesByCondition';
import { BaseAppComponent } from '../../types/components';
import s from './AppLabel.module.scss';

type IAppLabel = BaseAppComponent<HTMLLabelElement> &
	LabelHTMLAttributes<HTMLLabelElement> & {
		row?: boolean;
	};

/**
 * The common label component in the application
 * @type `FC<AppLabel>`
 * @memo `true`
 * @return `html:label`
 */
const AppLabel: FC<IAppLabel> = memo(
	({ children, className = '', onlyARIA = false, row = false, resetStyles = false, ...props }) => {
		const labelStyles = getConcatenatedStylesByCondition(
			resetStyles,
			className,
			s.app_label,
			row ? s.app_label_row : ''
		);

		return (
			<label
				aria-label={props['aria-label']}
				data-testid='app-label'
				className={labelStyles}
				{...props}>
				{children}
			</label>
		);
	}
);

AppLabel.displayName = 'AppLabel';
export default AppLabel;
