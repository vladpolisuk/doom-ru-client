import { AppImageSlider } from '../../../components/AppImageSlider/AppImageSlider';
import AppSkeleton from '../../../components/AppSkeleton/AppSkeleton';
import useAppSelector from '../../../hooks/useAppSelector';
import { getRealtyImages, getRealtyLoading } from '../../../store/realty/selectors';
import s from './RealtyImages.module.scss';

export const RealtyImages = () => {
	const images = useAppSelector(getRealtyImages);
	const loading = useAppSelector(getRealtyLoading);

	const list =
		(!loading &&
			images &&
			images.map(image => ({
				url: `${process.env.NEXT_PUBLIC_API_URL}/image/${image.id}`
			}))) ||
		[];

	return loading ? (
		<AppSkeleton className={s.realty_images} />
	) : (
		<AppImageSlider
			withCarousel
			className={s.realty_images}
			imageStyles={s.realty_image}
			images={list}
		/>
	);
};
