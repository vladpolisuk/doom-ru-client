import { FC, ImgHTMLAttributes } from 'react';
import s from "./LinksBoard.module.scss";

export type ILinksBoardItemImage = FC<ImgHTMLAttributes<HTMLImageElement>>;

export const LinksBoardItemImage: ILinksBoardItemImage = ({ className, ...props }) => {
    return (
        <div className={s.section_quickLinks_board_item_image}>
            <img className={`${className} ${s.section_quickLinks_board_item_image_poster}`}
                {...props} />
        </div>
    )
}
