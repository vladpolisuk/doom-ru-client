import { FC, ImgHTMLAttributes } from 'react';
import s from "./LinksBoard.module.scss";

export type ILinksBoardItemImage = FC<ImgHTMLAttributes<HTMLImageElement>>;

export const LinksBoardItemImage: ILinksBoardItemImage = ({ className, ...props }) => {
    return (
        <div className={s.linksBoard_item_image}>
            <img
                className={`${className} ${s.linksBoard_item_image__poster}`}
                {...props} />
        </div>
    )
}
