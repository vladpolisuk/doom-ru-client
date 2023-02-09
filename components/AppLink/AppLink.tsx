import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, LinkHTMLAttributes, memo } from 'react';
import { getConcatenatedStylesByCondition } from '../../utils/ui/getConcatenatedStylesByCondition';
import { BaseAppComponent } from '../../types/components';
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
export const AppLink: FC<IAppLink> = memo(
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
