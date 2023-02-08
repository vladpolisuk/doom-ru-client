import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';
import s from './AsideTabs.module.scss';
import { AsideTabsItem, IAsideTabsItem } from './AsideTabsItem';

interface AsideTabs extends FC<PropsWithChildren> {
	Item: FC<IAsideTabsItem>;
}

export const AsideTabs: AsideTabs = ({ children }) => {
	const styles = clsx(s.me_aside_tabs, 'unlisted');

	return <ul className={styles}>{children}</ul>;
};

AsideTabs.displayName = 'AsideTabs';
AsideTabs.Item = AsideTabsItem;
