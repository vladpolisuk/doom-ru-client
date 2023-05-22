import { FC, memo, useEffect, useState } from 'react';
import ReactCrop, { Crop, PixelCrop } from 'react-image-crop';

interface IAppCropImage {
	src: string | Buffer;
	onCropImage: (blob: Blob) => void;
	imageStyles?: string;
}

const AppCropImage: FC<IAppCropImage> = memo(({ src, onCropImage, imageStyles }) => {
	const [crop, setCrop] = useState<Crop>({
		unit: 'px',
		height: 200,
		width: 200,
		x: 0,
		y: 0
	});
	const [resizedSrc, setResizedSrc] = useState<string | undefined>();

	useEffect(() => {
		const resizeAndSetSrc = async () => {
			const imageSrc = typeof src === 'string' ? src : `data:image/jpeg;base64,${src?.toString('base64')}`;
			const image = new Image();
			image.src = imageSrc;
			await image.decode();
			const minWidth = Math.min(window.innerWidth, 500);
			const resizedBlob = await resizeImage(image, minWidth);
			setResizedSrc(URL.createObjectURL(resizedBlob));
		};
		resizeAndSetSrc();
	}, [src]);

	const cropImage = async (crop: PixelCrop) => {
		if (!crop.width || !crop.height || !resizedSrc) return;
		const image = new Image();
		image.src = resizedSrc;
		await image.decode();
		const croppedBlob = await getCroppedImg(image, crop);
		onCropImage(croppedBlob);
	};

	const getCroppedImg = (image: HTMLImageElement, crop: PixelCrop): Promise<Blob> => {
		const canvas = document.createElement('canvas');
		const scaleX = image.naturalWidth / image.width;
		const scaleY = image.naturalHeight / image.height;
		canvas.width = crop.width;
		canvas.height = crop.height;
		const ctx = canvas.getContext('2d')!;

		ctx.drawImage(
			image,
			crop.x * scaleX,
			crop.y * scaleY,
			crop.width * scaleX,
			crop.height * scaleY,
			0,
			0,
			canvas.width,
			canvas.height
		);

		return new Promise((resolve, reject) => {
			canvas.toBlob(blob => {
				if (!blob) {
					reject(new Error('Canvas is empty'));
					return;
				}
				resolve(blob);
			}, 'image/jpeg');
		});
	};

	const resizeImage = (img: HTMLImageElement, maxWidth: number): Promise<Blob> => {
		return new Promise(resolve => {
			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d')!;
			const scaleFactor = maxWidth / img.width;
			canvas.width = maxWidth;
			canvas.height = img.height * scaleFactor;
			ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
			canvas.toBlob(blob => {
				resolve(blob!);
			}, 'image/jpeg');
		});
	};

	return (
		<ReactCrop
			crop={crop}
			aspect={1 / 1}
			circularCrop
			ruleOfThirds
			keepSelection
			onChange={c => setCrop(c)}
			onComplete={cropImage}>
			{resizedSrc && (
				// eslint-disable-next-line @next/next/no-img-element
				<img
					id='crop-image'
					className={imageStyles}
					src={resizedSrc}
					alt='crop image'
				/>
			)}
		</ReactCrop>
	);
});

AppCropImage.displayName = 'AppCropImage';
export default AppCropImage;
