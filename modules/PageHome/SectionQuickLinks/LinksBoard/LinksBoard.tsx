import React, { FC, PropsWithChildren } from 'react';
import { ILinksBoardItem, LinksBoardItem } from './LinksBoardItem';
import { ILinksBoardItemContent, LinksBoardItemContent } from './LinksBoardItemContent';
import { ILinksBoardItemImage, LinksBoardItemImage } from './LinksBoardItemImage';
import s from './LinksBoard.module.scss';

interface LinksBoard extends FC<PropsWithChildren> {
	Item: ILinksBoardItem;
	ItemContent: ILinksBoardItemContent;
	ItemImage: ILinksBoardItemImage;
}

export const LinksBoard: LinksBoard = ({ children }) => {
	return <div className={s.section_quickLinks_board}>{children}</div>;
};

LinksBoard.Item = LinksBoardItem;
LinksBoard.ItemContent = LinksBoardItemContent;
LinksBoard.ItemImage = LinksBoardItemImage;
