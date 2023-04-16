import clsx from 'clsx';
import Image from 'next/image';
import { FC, memo, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import AppButton from '../../../components/AppButton/AppButton';
import AppModal from '../../../components/AppModal/AppModal';
import s from './PageNewImages.module.scss';

type Props = {
	image: File;
	id: string;
	imagesLength: number;
	index: number;
	currentImage: File;
	currentImageIndex: number;
	setCurrentImageIndex: (index: number) => void;
	removeImage: (id: string) => void;
	handleDragStart: (event: React.DragEvent<HTMLLIElement>, id: string) => void;
	handleDrop: (event: React.DragEvent<HTMLLIElement>, id: string) => void;
	handleDragEnd: (event: React.DragEvent<HTMLLIElement>, id: string) => void;
};

const ImageItem: FC<Props> = memo(
	({
		image,
		id,
		index,
		imagesLength,
		currentImage,
		currentImageIndex,
		setCurrentImageIndex,
		removeImage,
		handleDragStart,
		handleDrop,
		handleDragEnd
	}) => {
		const [view, setView] = useState(false);

		const openModal = () => {
			setView(true);
			setCurrentImageIndex(index);
		};

		const closeModal = () => {
			setView(false);
			setCurrentImageIndex(0);
		};

		const handlePrev = () =>
			setCurrentImageIndex(currentImageIndex === 0 ? imagesLength - 1 : currentImageIndex - 1);

		const handleNext = () =>
			setCurrentImageIndex(currentImageIndex === imagesLength - 1 ? 0 : currentImageIndex + 1);

		const prevBtnStyles = clsx(s.imageModal_btn, s.imageModal_btnPrev);
		const nextBtnStyles = clsx(s.imageModal_btn, s.imageModal_btnNext);

		return (
			<li
				draggable
				id={`image-${id}`}
				onDragStart={event => handleDragStart(event, id)}
				onDrop={event => handleDrop(event, id)}
				onDragOver={event => event.preventDefault()}
				onDragEnd={event => handleDragEnd(event, id)}
				className={s.imagesList_item}>
				<AppButton
					onClick={openModal}
					className={s.openModalBtn}
					resetStyles></AppButton>

				<Image
					width={100}
					height={100}
					src={URL.createObjectURL(image)}
					alt='image'
					className={s.image}
				/>

				<AppButton
					onClick={() => removeImage(id)}
					className={s.imageClose}
					type='button'
					color='reset'>
					<FaTimes />
				</AppButton>

				<AppModal
					className={s.imageModal}
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
						className={s.imageModal_image}
					/>

					<AppButton
						onClick={handleNext}
						className={nextBtnStyles}
						color='transparent'>
						<FaChevronRight />
					</AppButton>

					<AppModal.Close
						className={s.imageModal_close}
						onClick={closeModal}
					/>
				</AppModal>
			</li>
		);
	}
);

ImageItem.displayName = 'ImageItem';

export default ImageItem;
