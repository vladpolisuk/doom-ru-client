import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC, LinkHTMLAttributes } from 'react';
import { memo } from 'react';
import type { BaseAppComponent } from '../../types/components';
import getConcatenatedStylesByCondition from '../../utils/ui/getConcatenatedStylesByCondition';
import s from './AppLink.module.scss';

type Props = BaseAppComponent<HTMLAnchorElement> & LinkHTMLAttributes<HTMLAnchorElement>;

interface IAppLink extends Props {
	resetHref?: boolean;
}

/**
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
		const { locale } = useRouter();
		const url = resetHref ? href : `/${locale}${href}`;
		const titleAttr = onlyARIA ? '' : title;

		const styles = getConcatenatedStylesByCondition(resetStyles, className, s.app_link);

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
