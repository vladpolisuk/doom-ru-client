import clsx from 'clsx';
import { Dispatch, FC, SetStateAction, useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AppAlert from '../../../components/AppAlert/AppAlert';
import AppLabel from '../../../components/AppLabel/AppLabel';
import { useTranslation } from '../../../hooks/useTranslation';
import { ImageType } from '../PageNew';
import ImageItem from './ImageItem';
import s from './PageNewImages.module.scss';

type Props = {
	images: ImageType[];
	error: string;
	setImages: Dispatch<SetStateAction<ImageType[]>>;
};

const PageNewImages: FC<Props> = ({ images, error, setImages }) => {
	const newT = useTranslation('new');
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		if (event.dataTransfer.types.includes('text/plain')) return;
		if (images.length >= 10 || event.dataTransfer.files.length > 10) return;
		addImages(event.dataTransfer.files);
	};

	const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
	};

	const uploadImage = (event: any) => {
		if (!event.target.files.length) return;
		addImages(event.target.files);
	};

	const addImages = (files: any) => {
		const newImages = Array.from(files as File[]).map(file => ({
			id: uuidv4(),
			file
		}));
		const result = [...images, ...newImages];
		if (result.length > 10) return;
		setImages(result);
	};

	const removeImage = useCallback(
		(id: string) => {
			const listItem = document.querySelector(`#image-${id}`);
			if (listItem) {
				listItem.classList.add(s['imagesList_item--removing']);
				setTimeout(() => {
					setImages(prevImages => prevImages.filter(image => image.id !== id));
					listItem.classList.remove(s['imagesList_item--removing']);
				}, 250);
			}
		},
		[setImages]
	);

	const handleDragStart = useCallback((event: React.DragEvent<HTMLLIElement>, id: string) => {
		event.dataTransfer.effectAllowed = 'move';
		event.dataTransfer.setData('text/plain', id);
		const listItem = document.querySelector(`#image-${id}`);
		if (listItem) listItem.classList.add(s['imagesList_item--moving']);
	}, []);

	const handleDrop = useCallback(
		(event: React.DragEvent<HTMLLIElement>, targetId: string) => {
			event.preventDefault();
			const sourceId = event.dataTransfer.getData('text/plain');
			if (sourceId === targetId) return;

			setImages(prevImages => {
				const sourceIndex = prevImages.findIndex(image => image.id === sourceId);
				const targetIndex = prevImages.findIndex(image => image.id === targetId);
				const newImages = [...prevImages];
				const [draggedImage] = newImages.splice(sourceIndex, 1);
				newImages.splice(targetIndex, 0, draggedImage);
				return newImages;
			});
		},
		[setImages]
	);

	const handleDragEnd = useCallback((_: any, id: string) => {
		const sourceElement = document.querySelector(`#image-${id}`);
		if (sourceElement) sourceElement.classList.remove(s['imagesList_item--moving']);
	}, []);

	const uploadImageStyles = clsx(s.imageUpload, 'active--scale', 'transition');
	const uploadTitle = newT.new_form.images.title;
	const uploadImageBoxTitle = newT.new_form.images.uploadBoxTitle;

	return (
		<div className={s.images}>
			<h3 className={s.images_title}>1. {uploadTitle}</h3>

			{error && (
				<AppAlert
					className={s.images_error}
					type='error'>
					{error}
				</AppAlert>
			)}

			<ul className={s.imagesList}>
				{images.map((image, index) => (
					<ImageItem
						key={`image-${image.id}`}
						image={image.file}
						id={image.id}
						index={index}
						imagesLength={images.length}
						removeImage={removeImage}
						handleDragStart={handleDragStart}
						handleDrop={handleDrop}
						handleDragEnd={handleDragEnd}
						currentImageIndex={currentImageIndex}
						setCurrentImageIndex={setCurrentImageIndex}
						currentImage={images[currentImageIndex].file}
					/>
				))}
				{images.length < 10 && (
					<li className={s.imagesList_item}>
						<AppLabel className={uploadImageStyles}>
							<div
								className={s.imageUploadBox}
								onDrop={onDrop}
								onDragOver={onDragOver}>
								<p className={s.imageUploadBox_text}>{uploadImageBoxTitle}</p>
							</div>
							<input
								multiple
								type='file'
								id='img'
								name='img'
								accept='image/*'
								onChange={uploadImage}
								className={s.fileInput}
							/>
						</AppLabel>
					</li>
				)}
			</ul>
		</div>
	);
};

export default PageNewImages;
