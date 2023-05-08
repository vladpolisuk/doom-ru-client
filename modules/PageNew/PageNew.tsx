import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import AppAlert from '../../components/AppAlert/AppAlert';
import AppButton from '../../components/AppButton/AppButton';
import { AppImageUploadType } from '../../components/AppImagesUpload/AppImagesUpload';
import { useTranslation } from '../../hooks/useTranslation';
import { Locale } from '../../store/app/types';
import { createRealty } from '../../store/realty/requests';
import { RealtyForm, RealtySubmit } from '../../store/realty/types';
import convertImagesToBufferArray from '../../utils/convertImagesToBufferArray';
import s from './PageNew.module.scss';
import { PageNewForm } from './PageNewForm/PageNewForm';
import PageNewImages from './PageNewImages/PageNewImages';

const PageNew = () => {
	const [images, setImages] = useState<AppImageUploadType[]>([]);
	const [imagesError, setImagesError] = useState('');
	const [error, setError] = useState('');
	const [form, setForm] = useState<RealtyForm>();
	const [loading, setLoading] = useState(false);
	const newT = useTranslation('new');
	const router = useRouter();

	useEffect(() => {
		if (images.length) setImagesError('');
	}, [images]);

	const submit = async (formData: RealtyForm) => {
		setForm(formData);
		const locale = router.query.lang as Locale;
		if (!images.length) return setImagesError(newT.new_form.images.errors.empty.title);
		setLoading(true);
		const imageFiles = images.map(image => image.file);
		const submitImages = await convertImagesToBufferArray(imageFiles);
		const data = { ...form, images: submitImages };
		const response = await createRealty(data as RealtySubmit, locale);
		setLoading(false);
		if (response.success) router.push(`/${locale}/s/${response.data.id}`);
		else setError(newT.new_form.errors.unknown.title);
	};

	const handleBack = () => router.back();

	const headerTitle = newT.new_header.title;
	const container = clsx(s.new_container, 'container');
	const backStyles = clsx(s.new_back, 'active--scale', 'transition');

	return (
		<main className={s.new}>
			<div className={container}>
				<div className={s.new_header}>
					<AppButton
						onClick={handleBack}
						className={backStyles}
						color='transparent'>
						<FaChevronLeft size={20} />
					</AppButton>

					<h1 className={s.new_header_title}>{headerTitle}</h1>
				</div>

				{error && (
					<AppAlert
						className={s.new_error}
						type='error'>
						{error}
					</AppAlert>
				)}

				<PageNewImages
					error={imagesError}
					images={images}
					setImages={setImages}
				/>

				<PageNewForm
					loading={loading}
					onSubmit={submit}
				/>
			</div>
		</main>
	);
};

export default PageNew;
