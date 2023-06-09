import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, LinkHTMLAttributes, memo } from 'react';
import resetStylesOrMerge from '../../utils/ui/resetStylesOrMerge';
import { BaseAppComponent } from '../types';
import s from './AppLink.module.scss';

type Props = BaseAppComponent<HTMLAnchorElement> & LinkHTMLAttributes<HTMLAnchorElement>;

interface IAppLink extends Props {
	resetHref?: boolean;
}

/** ## App Link
 * The common link component in the application
 * @type `FC<AppLink>`
 * @memo `true`
 * @return `next/link`
 */
const AppLink: FC<IAppLink> = memo(
	({
		title,
		children,
		href = '/',
		className = '',
		onlyARIA = false,
		resetHref = false,
		resetStyles = false,
		...props
	}) => {
		const router = useRouter();
		const queryLocale = router.query.lang;
		const url = resetHref ? href : `/${queryLocale || router.asPath.split('/')[1]}${href}`;
		const titleAttr = onlyARIA ? '' : title;

		const styles = resetStylesOrMerge(resetStyles, className, s.app_link);

		return (
			<Link
				href={url}
				className={styles}
				aria-label={title}
				title={titleAttr}
				data-testid='app-link'
				{...props}>
				{children}
			</Link>
		);
	}
);

AppLink.displayName = 'AppLink';
export default AppLink;
