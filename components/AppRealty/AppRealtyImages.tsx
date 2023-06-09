import clsx from 'clsx';
import Image from 'next/image';
import { FC, memo, useState } from 'react';
import { Realty } from '../../store/realty/types';
import AppLink from '../AppLink/AppLink';
import { AppRealtyView } from './AppRealty';
import s from './AppRealty.module.scss';

type Props = Pick<Realty, 'images' | 'title'>;

interface IRealtyItemImages extends Props {
	view: AppRealtyView;
	realtyURL: string;
}

export const RealtyItemImages: FC<IRealtyItemImages> = memo(({ images, view, title, realtyURL }) => {
	const [showImageId, setShowImageId] = useState(0);

	const resetShowImageId = () => setShowImageId(0);

	const imageSrc = `${process.env.NEXT_PUBLIC_API_URL}/image/${images[showImageId].id}`;
	const styles_image = clsx(s.realty_image, s[`realty_image--${view}`], 'transition');

	return (
		<AppLink
			onlyARIA
			href={realtyURL}
			title={title}
			onMouseLeave={resetShowImageId}
			className={s.realty_imagesBox}>
			<div className={s.realty_imageSwitchers}>
				{images.slice(0, 6).map((url, i) => (
					<span
						onMouseEnter={() => setShowImageId(i)}
						className={s.realty_imageSwitcher}
						key={`${Math.random() * 100}_${url}`}></span>
				))}
			</div>

			<Image
				width={400}
				height={240}
				alt={title}
				title={title}
				className={styles_image}
				src={imageSrc}
			/>
		</AppLink>
	);
});

RealtyItemImages.displayName = 'RealtyItemImages';
