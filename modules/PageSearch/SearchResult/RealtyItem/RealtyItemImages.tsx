import clsx from 'clsx';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import AppLink from '../../../../components/AppLink/AppLink';
import { View } from '../../PageSearch';
import s from './RealtyItem.module.scss';

type Props = {
	images: string[];
	primeImage: string;
	title: string;
	view: View;
	realtyURL: string;
};

export const RealtyItemImages: FC<Props> = ({ images, primeImage, view, title, realtyURL }) => {
	const [showImageId, setShowImageId] = useState(-1);

	const resetShowImageId = () => setShowImageId(-1);

	const imageId = showImageId < 0 ? primeImage : images[showImageId];
	const styles_image = clsx(s.realty_item_image, s[`realty_item_image--${view}`], 'transition');

	return (
		<AppLink
			onlyARIA
			href={realtyURL}
			target='_blank'
			title={title}
			onMouseLeave={resetShowImageId}
			className={s.realty_item_imagesBox}>
			<div className={s.realty_item_imageSwitchers}>
				{images.slice(0, 6).map((url, i) => (
					<span
						onMouseEnter={() => setShowImageId(i)}
						className={s.realty_item_imageSwitcher}
						key={`${Math.random() * 100}_${url}`}></span>
				))}
			</div>

			<Image
				width={400}
				height={240}
				alt={title}
				title={title}
				className={styles_image}
				src={imageId}
			/>
		</AppLink>
	);
};
