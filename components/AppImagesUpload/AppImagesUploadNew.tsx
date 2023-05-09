import clsx from 'clsx';
import { ChangeEvent, Dispatch, FC, memo, SetStateAction } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from '../../hooks/useTranslation';
import AppLabel from '../AppLabel/AppLabel';
import { AppImageUploadType } from './AppImagesUpload';
import s from './AppImagesUpload.module.scss';

interface IAppImagesUploadNew {
	images: AppImageUploadType[];
	setImages: Dispatch<SetStateAction<AppImageUploadType[]>>;
	loading?: boolean;
}

const AppImagesUploadNew: FC<IAppImagesUploadNew> = memo(({ images, setImages, loading = false }) => {
	const newT = useTranslation('new');

	const addImages = (files: FileList) => {
		if (loading) return;
		const newImages = Array.from(files as FileList).map(file => ({
			id: uuidv4(),
			file
		}));
		const result = [...images, ...newImages];
		if (result.length > 10) return;
		setImages(result);
	};

	const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
		if (loading) return;
		event.preventDefault();
		if (event.dataTransfer.types.includes('text/plain')) return;
		if (images.length >= 10 || event.dataTransfer.files.length > 10) return;
		addImages(event.dataTransfer.files);
	};

	const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
		if (loading) return;
		event.preventDefault();
	};

	const uploadImage = (event: ChangeEvent<HTMLInputElement>) => {
		if (loading) return;
		event.preventDefault();
		if (!event.target.files) return;
		addImages(event.target.files);
	};

	const uploadImageStyles = clsx(s.imageUpload, 'active--scale', 'transition');
	const uploadImageBoxTitle = newT.new_form.images.uploadBoxTitle;

	return (
		<li className={s.appImagesUpload_list_item}>
			<AppLabel className={uploadImageStyles}>
				<div
					className={s.appImagesUpload_uploadBox}
					onDrop={onDrop}
					onDragOver={onDragOver}>
					<p className={s.appImagesUpload_uploadBox_text}>{uploadImageBoxTitle}</p>
				</div>
				<input
					disabled={loading}
					multiple
					type='file'
					id='fileInput'
					name='img'
					accept='image/*'
					onChange={uploadImage}
					className={s.fileInput}
				/>
			</AppLabel>
		</li>
	);
});

AppImagesUploadNew.displayName = 'AppImagesUploadNew';
export default AppImagesUploadNew;
