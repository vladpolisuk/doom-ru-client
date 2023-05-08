import { Dispatch, FC, SetStateAction, useState } from 'react';
import s from './AppImagesUpload.module.scss';
import ImageItem from './AppImagesUploadItem';
import AppImagesUploadNew from './AppImagesUploadNew';

export type AppImageUploadType = {
	id: string;
	file: File;
};

interface Props {
	images: AppImageUploadType[];
	setImages: Dispatch<SetStateAction<AppImageUploadType[]>>;
	loading?: boolean;
}

const AppImagesUpload: FC<Props> = ({ images, setImages, loading = false }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	return (
		<div className={s.appImagesUpload}>
			<ul className={s.appImagesUpload_list}>
				{images.map((image, index) => (
					<ImageItem
						loading={loading}
						key={`image-${image.id}`}
						image={image.file}
						id={image.id}
						index={index}
						images={images}
						setImages={setImages}
						currentImageIndex={currentImageIndex}
						setCurrentImageIndex={setCurrentImageIndex}
						currentImage={images[currentImageIndex].file}
					/>
				))}

				{images.length < 10 && (
					<AppImagesUploadNew
						loading={loading}
						images={images}
						setImages={setImages}
					/>
				)}
			</ul>
		</div>
	);
};

export default AppImagesUpload;
