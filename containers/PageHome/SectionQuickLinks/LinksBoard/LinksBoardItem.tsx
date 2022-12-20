import React, { BaseHTMLAttributes, FC, memo, PropsWithChildren } from 'react';
import s from "./LinksBoard.module.scss";
import clsx from "clsx";

export type ILinksBoardItem = FC<BaseHTMLAttributes<HTMLDivElement> & PropsWithChildren>;

export const LinksBoardItem: ILinksBoardItem = memo(({ children, ...props }) => {
    const styles = React.Children.count(children) === 2 ?
        clsx(s.section_quickLinks_board_item, s.section_quickLinks_board_itemFull)
        : s.section_quickLinks_board_item;

    return (
        <div className={styles} {...props}>
            {children}
        </div>
    )
});

LinksBoardItem.displayName = "LinksBoardItem";
