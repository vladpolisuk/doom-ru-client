import React, { Children, BaseHTMLAttributes, FC, PropsWithChildren } from 'react';
import s from "./LinksBoard.module.scss";

export type ILinksBoardItemContent = FC<BaseHTMLAttributes<HTMLDivElement> & PropsWithChildren>;

export const LinksBoardItemContent: ILinksBoardItemContent = ({
    children,
    title
}) => {
    return (
        <div className={s.linksBoard_item_content}>
            <p className={s.linksBoard_item_content__title}>
                {title}
            </p>

            <ul className={`${s.linksBoard_item_content__list} unlisted`}>
                {Children.map(children, (child: any) => (
                    <li className={s.linksBoard_item_content__list_item}
                        key={child.key}>
                        {child}
                    </li>
                ))}
            </ul>
        </div>
    )
}
