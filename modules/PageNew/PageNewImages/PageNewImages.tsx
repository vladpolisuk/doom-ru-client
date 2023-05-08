import { Dispatch, FC, Fragment, SetStateAction } from 'react';
import AppAlert from '../../../components/AppAlert/AppAlert';
import AppImagesUpload, { AppImageUploadType } from '../../../components/AppImagesUpload/AppImagesUpload';
import { useTranslation } from '../../../hooks/useTranslation';
import s from './PageNewImages.module.scss';

interface Props {
	images: AppImageUploadType[];
	error: string;
	setImages: Dispatch<SetStateAction<AppImageUploadType[]>>;
}

const PageNewImages: FC<Props> = ({ images, setImages, error }) => {
	const newT = useTranslation('new');
	const uploadTitle = newT.new_form.images.title;

	return (
		<Fragment>
			<h3 className={s.images_title}>1. {uploadTitle}</h3>

			{error && (
				<AppAlert
					className={s.images_error}
					type='error'>
					{error}
				</AppAlert>
			)}

			<AppImagesUpload
				images={images}
				setImages={setImages}
			/>
		</Fragment>
	);
};

export default PageNewImages;
