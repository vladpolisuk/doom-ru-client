import clsx from 'clsx';
import { BaseHTMLAttributes, FC, memo } from 'react';
import { IconType } from 'react-icons/lib';
import AppLink from '../../../../components/AppLink/AppLink';
import s from './AsideTabs.module.scss';

export interface IAsideTabsItem extends BaseHTMLAttributes<HTMLAnchorElement> {
	Icon: IconType;
	text: string;
	tabId: number;
}

export const AsideTabsItem: FC<IAsideTabsItem> = memo(({ href, title, text, Icon, tabId, ...props }) => {
	const styles = clsx(s.me_aside_tabs_link, 'active--scale', 'transition');

	return (
		<li className={s.me_aside_tabs_item}>
			<AppLink
				onlyARIA
				resetStyles
				className={styles}
				aria-label={title}
				title={title}
				href={href}
				{...props}>
				<Icon className={s.me_aside_tabs_item_icon} />
				<p className={s.me_aside_tabs_item_text}>{text}</p>
			</AppLink>
		</li>
	);
});

AsideTabsItem.displayName = 'AsideTabsItem';
