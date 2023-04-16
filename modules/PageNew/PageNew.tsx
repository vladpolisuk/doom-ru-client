import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import AppButton from '../../components/AppButton/AppButton';
import { useTranslation } from '../../hooks/useTranslation';
import { Locale } from '../../store/app/types';
import { createRealty } from '../../store/realty/requests';
import { RealtyForm, RealtySubmit } from '../../store/realty/types';
import s from './PageNew.module.scss';
import { PageNewForm } from './PageNewForm/PageNewForm';
import PageNewImages from './PageNewImages/PageNewImages';

export type ImageType = {
	id: string;
	file: File;
};

const PageNew = () => {
	const [images, setImages] = useState<ImageType[]>([]);
	const [error, setError] = useState('');
	const [form, setForm] = useState<RealtyForm>();
	const [loading, setLoading] = useState(false);
	const newT = useTranslation('new');
	const router = useRouter();

	useEffect(() => {
		if (images.length) setError('');
	}, [images]);

	useEffect(() => {
		const fetch = async () => {
			const locale = router.query.lang as Locale;
			if (!locale) return;
			if (!images.length) return setError(newT.new_form.images.errors.empty.title);
			setLoading(true);
			const submitImages = await Promise.all(images.map(image => convertImageToBuffer(image.file)));
			const data = { ...form, images: submitImages };
			const response = await createRealty(data as RealtySubmit, locale);
			setLoading(false);
			if (response.success) router.push(`/${locale}/s/${response.data.id}`);
			else setError(newT.new_form.errors.unknown.title);
		};

		if (form) fetch();
	}, [form, router]);

	const convertImageToBuffer = (imageFile: File) => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => {
				const arrayBuffer = reader.result;
				if (!arrayBuffer) return;
				const buffer = Buffer.from(arrayBuffer as ArrayBuffer);
				resolve(buffer);
			};
			reader.onerror = error => reject(error);
			reader.readAsArrayBuffer(imageFile);
		});
	};

	const back = () => {
		router.back();
	};

	const onSubmit = (data: RealtyForm) => {
		setForm(data);
	};

	const headerTitle = newT.new_header.title;
	const container = clsx(s.new_container, 'container');
	const backStyles = clsx(s.new_back, 'active--scale', 'transition');

	return (
		<main className={s.new}>
			<div className={container}>
				<div className={s.new_header}>
					<AppButton
						onClick={() => back()}
						className={backStyles}
						color='transparent'>
						<FaChevronLeft size={20} />
					</AppButton>
					<h1 className={s.new_title}>{headerTitle}</h1>
				</div>

				<PageNewImages
					error={error}
					images={images}
					setImages={setImages}
				/>

				<PageNewForm
					loading={loading}
					onSubmit={onSubmit}
				/>
			</div>
		</main>
	);
};

export default PageNew;
