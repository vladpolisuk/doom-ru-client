import React, { BaseHTMLAttributes, FC, PropsWithChildren } from 'react';
import s from "./LinksBoard.module.scss";

export type ILinksBoardItem = FC<BaseHTMLAttributes<HTMLDivElement> & PropsWithChildren>;

export const LinksBoardItem: ILinksBoardItem = ({ children, ...props }) => {
    const styles = React.Children.count(children) === 2 ?
        `${s.linksBoard_item} ${s.linksBoard_item_full}`
        : s.linksBoard_item;

    return (
        <div className={styles} {...props}>
            {children}
        </div>
    )
}
