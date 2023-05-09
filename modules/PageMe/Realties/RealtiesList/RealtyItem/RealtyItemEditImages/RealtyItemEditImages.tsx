import { useRouter } from 'next/router';
import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import ImageAPI from '../../../../../../api/image';
import AppImagesUpload, { AppImageUploadType } from '../../../../../../components/AppImagesUpload/AppImagesUpload';
import { Locale } from '../../../../../../store/app/types';
import { RealtyImage } from '../../../../../../store/realty/types';

interface Props {
	images: AppImageUploadType[];
	realtyImages: RealtyImage[];
	loading: boolean;
	setImages: Dispatch<SetStateAction<AppImageUploadType[]>>;
}

export const RealtyItemEditImages: FC<Props> = ({ images, realtyImages, loading, setImages }) => {
	const router = useRouter();

	useEffect(() => {
		const fetch = async () => {
			const locale = router.query.lang as Locale;
			const api = new ImageAPI(locale, {
				'Content-Type': 'arraybuffer'
			});

			const serverImages = await Promise.all(
				realtyImages.map(async image => {
					const response = await api.getOneImage(image.id);

					const blob = new Blob([response], {
						type: 'image/webp'
					});

					const file = new File([blob], `${image.id}.webp`, {
						type: 'image/webp'
					});

					return {
						id: image.id,
						file
					};
				})
			);

			setImages(serverImages);
		};

		if (realtyImages) fetch();
	}, [realtyImages]);

	return (
		<AppImagesUpload
			loading={loading}
			images={images}
			setImages={setImages}
		/>
	);
};
