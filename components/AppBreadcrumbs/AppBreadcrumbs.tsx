import { Children, FC, memo } from 'react';
import resetStylesOrMerge from '../../utils/ui/resetStylesOrMerge';
import { BaseAppComponent } from '../../types/components';
import s from './AppBreadcrumbs.module.scss';

interface IAppBreadcrumbs extends BaseAppComponent<HTMLUListElement> {
	resetHref?: boolean;
	separator?: string;
}

/**
 * The common breadcrumbs component in the application
 * @type `FC<ul>`
 * @memo `true`
 * @return `html:ul`
 */
const AppBreadcrumbs: FC<IAppBreadcrumbs> = memo(
	({ title, children, className = '', separator = '/', resetStyles = false, ...props }) => {
		const components = Children.toArray(children).map((child, i) => (
			<li key={`${i}_${Date.now()}`}>
				{child}
				<span
					data-testid='app-breadcrumbs-separator'
					className={s.app_breadcrumbs_separator}>
					&nbsp;{separator}&nbsp;
				</span>
			</li>
		));

		const styles = resetStylesOrMerge(resetStyles, className, s.app_breadcrumbs, 'unlisted');

		return (
			<ul
				data-testid='app-breadcrumbs'
				className={styles}
				{...props}>
				{components}
			</ul>
		);
	}
);

AppBreadcrumbs.displayName = 'AppBreadcrumbs';
export default AppBreadcrumbs;
