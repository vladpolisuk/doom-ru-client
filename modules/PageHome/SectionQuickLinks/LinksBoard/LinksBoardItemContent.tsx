import React, { Children, BaseHTMLAttributes, FC, PropsWithChildren, memo } from 'react';
import s from './LinksBoard.module.scss';
import clsx from 'clsx';

export type ILinksBoardItemContent = FC<BaseHTMLAttributes<HTMLDivElement> & PropsWithChildren>;

export const LinksBoardItemContent: ILinksBoardItemContent = memo(({ children, title }) => {
	const components = Children.map(children, (child: any) => (
		<li
			key={child.key}
			className={s.section_quickLinks_board_item_list_item}>
			{child}
		</li>
	));

	const styles = clsx(s.section_quickLinks_board_item_list, 'unlisted');

	return (
		<div className={s.section_quickLinks_board_item_content}>
			<p className={s.section_quickLinks_board_item_title}>{title}</p>

			<ul className={styles}>{components}</ul>
		</div>
	);
});

LinksBoardItemContent.displayName = 'LinksBoardItemContent';
