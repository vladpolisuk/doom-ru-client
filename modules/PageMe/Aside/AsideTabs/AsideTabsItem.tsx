import clsx from 'clsx';
import { BaseHTMLAttributes, Dispatch, FC, memo, SetStateAction } from 'react';
import { IconType } from 'react-icons/lib';
import AppLink from '../../../../components/AppLink/AppLink';
import resetStylesOrMerge from '../../../../utils/ui/resetStylesOrMerge';
import s from './AsideTabs.module.scss';

export interface IAsideTabsItem extends BaseHTMLAttributes<HTMLAnchorElement> {
	Icon: IconType;
	text: string;
	setCurrent: Dispatch<SetStateAction<number>>;
	tabId: number;
	current: number;
}

export const AsideTabsItem: FC<IAsideTabsItem> = memo(
	({ href, title, text, Icon, current, setCurrent, tabId, ...props }) => {
		const isActive = current === tabId;

		const click = () => setCurrent(tabId);

		const styles = resetStylesOrMerge(
			!isActive,
			clsx(s.me_aside_tabs_link, 'active--scale', 'transition'),
			s['me_aside_tabs_link--active']
		);

		return (
			<li className={s.me_aside_tabs_item}>
				<AppLink
					onlyARIA
					resetStyles
					className={styles}
					aria-label={title}
					title={title}
					href={href}
					onClick={click}
					{...props}>
					<Icon className={s.me_aside_tabs_item_icon} />
					<p className={s.me_aside_tabs_item_text}>{text}</p>
				</AppLink>
			</li>
		);
	}
);

AsideTabsItem.displayName = 'AsideTabsItem';
