import clsx from 'clsx';
import Image from 'next/image';
import { Dispatch, FC, memo, SetStateAction, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import removeFile from '../../utils/ui/removeFile';
import AppButton from '../AppButton/AppButton';
import AppModal from '../AppModal/AppModal';
import { AppImageUploadType } from './AppImagesUpload';
import s from './AppImagesUpload.module.scss';

interface IImageItem {
	image: File;
	id: string;
	index: number;
	images: AppImageUploadType[];
	setImages: Dispatch<SetStateAction<AppImageUploadType[]>>;
	currentImage: File;
	currentImageIndex: number;
	setCurrentImageIndex: (index: number) => void;
	loading?: boolean;
}

const ImageItem: FC<IImageItem> = memo(
	({ image, id, index, images, loading, setImages, currentImage, currentImageIndex, setCurrentImageIndex }) => {
		const [view, setView] = useState(false);

		const openModal = () => {
			if (loading) return;
			setView(true);
			setCurrentImageIndex(index);
		};

		const closeModal = () => {
			setView(false);
			setCurrentImageIndex(0);
		};

		const handlePrev = () => {
			const index = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
			setCurrentImageIndex(index);
		};

		const handleNext = () => {
			const index = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
			setCurrentImageIndex(index);
		};

		const removeImage = (id: string) => {
			if (loading) return;
			const listItem = document.querySelector(`#image-${id}`);
			if (!listItem) return;

			listItem.classList.add(s['appImagesUpload_list_item--removing']);
			const fileInput = document.querySelector('#fileInput') as HTMLInputElement;
			const imageToRemove = images.find(image => image.id === id);
			if (imageToRemove) fileInput.files = removeFile(fileInput.files, imageToRemove.file);

			setTimeout(() => {
				setImages(prevImages => prevImages.filter(image => image.id !== id));
				listItem.classList.remove(s['appImagesUpload_list_item--removing']);
			}, 250);
		};

		const handleDragStart = (event: React.DragEvent<HTMLLIElement>, id: string) => {
			if (loading) return;
			event.dataTransfer.effectAllowed = 'move';
			event.dataTransfer.setData('text/plain', id);
			const listItem = document.querySelector(`#image-${id}`);
			if (listItem) listItem.classList.add(s['appImagesUpload_list_item--moving']);
		};

		const handleDrop = (event: React.DragEvent<HTMLLIElement>, targetId: string) => {
			if (loading) return;
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
		};

		const handleDragEnd = (_: any, id: string) => {
			if (loading) return;
			const sourceElement = document.querySelector(`#image-${id}`);
			if (sourceElement) sourceElement.classList.remove(s['appImagesUpload_list_item--moving']);
		};

		const prevBtnStyles = clsx(s.appImagesUpload_modal_btn, s.appImagesUpload_modal_btnPrev);
		const nextBtnStyles = clsx(s.appImagesUpload_modal_btn, s.appImagesUpload_modal_btnNext);

		return (
			<li
				data-disabled={loading}
				draggable
				id={`image-${id}`}
				onDragStart={event => handleDragStart(event, id)}
				onDrop={event => handleDrop(event, id)}
				onDragOver={event => event.preventDefault()}
				onDragEnd={event => handleDragEnd(event, id)}
				className={s.appImagesUpload_list_item}>
				<AppButton
					onClick={openModal}
					className={s.appImagesUpload_list_item_openModal}
					resetStyles></AppButton>

				<Image
					width={100}
					height={100}
					src={URL.createObjectURL(image)}
					alt='image'
					className={s.appImagesUpload_image}
				/>

				<AppButton
					onClick={() => removeImage(id)}
					className={s.appImagesUpload_list_item_close}
					type='button'
					color='reset'>
					<FaTimes />
				</AppButton>

				<AppModal
					className={s.appImagesUpload_modal}
					view={view}
					setView={setView}>
					<AppButton
						onClick={handlePrev}
						className={prevBtnStyles}
						color='transparent'>
						<FaChevronLeft />
					</AppButton>

					<Image
						width={500}
						height={500}
						src={URL.createObjectURL(currentImage)}
						alt='image'
						className={s.appImagesUpload_modal_image}
					/>

					<AppButton
						onClick={handleNext}
						className={nextBtnStyles}
						color='transparent'>
						<FaChevronRight />
					</AppButton>

					<AppModal.Close
						className={s.appImagesUpload_modal_close}
						onClick={closeModal}
					/>
				</AppModal>
			</li>
		);
	}
);

ImageItem.displayName = 'ImageItem';

export default ImageItem;
