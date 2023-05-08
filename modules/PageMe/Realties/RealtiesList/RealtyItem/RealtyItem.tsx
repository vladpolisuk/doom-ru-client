import clsx from 'clsx';
import { useRouter } from 'next/router';
import { FC, memo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaCheck, FaEye, FaTimes } from 'react-icons/fa';
import { MdModeEdit } from 'react-icons/md';
import AppAlert from '../../../../../components/AppAlert/AppAlert';
import AppButton from '../../../../../components/AppButton/AppButton';
import { AppImageUploadType } from '../../../../../components/AppImagesUpload/AppImagesUpload';
import AppRealty from '../../../../../components/AppRealty/AppRealty';
import AppSpinner from '../../../../../components/AppSpinner/AppSpinner';
import { useTranslation } from '../../../../../hooks/useTranslation';
import { Locale } from '../../../../../store/app/types';
import { updateRealty } from '../../../../../store/realty/requests';
import { Realty, RealtyForm } from '../../../../../store/realty/types';
import convertImagesToBufferArray from '../../../../../utils/convertImagesToBufferArray';
import s from './RealtyItem.module.scss';
import { RealtyItemEditForm } from './RealtyItemEditForm/RealtyItemEditForm';
import { RealtyItemEditImages } from './RealtyItemEditImages/RealtyItemEditImages';
import SelectRealtyBtn from './SelectRealtyBtn';

interface Props {
	realty: Realty;
	selectedIds: number[];
	toggleSelectRealty: (id: number) => void;
}

export const RealtyItem: FC<Props> = memo(({ realty, selectedIds, toggleSelectRealty }) => {
	const t = useTranslation('me');
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [editMode, setEditMode] = useState(false);
	const [images, setImages] = useState<AppImageUploadType[]>([]);
	const form = useForm<RealtyForm>({
		defaultValues: realty
	});

	const submitChanges = async (formData: RealtyForm) => {
		if (loading) return;
		if (images.length === 0) return setError(t.me_realties.edit_form.error.images.empty.title);
		setLoading(true);
		const locale = router.query.lang as Locale;
		const imageFiles = images.map(image => image.file);
		const submitImages = await convertImagesToBufferArray(imageFiles);
		const data = { ...formData, images: submitImages };
		const response = await updateRealty(realty.id, data, locale);
		setLoading(false);
		if (!response.success) setError(response.message);
		setEditMode(false);
		setError('');
		router.reload();
	};

	const handleHideRealty = (id: number) => {};

	const toggleEditRealty = async () => {
		if (loading) return;
		if (!editMode) return setEditMode(true);
		await form.handleSubmit(submitChanges)();
	};

	const cancelEditRealty = () => {
		if (loading) return;
		form.reset();
		setEditMode(false);
		setImages([]);
		setError('');
	};

	const controlBtnStyles = clsx(s.realty_item_controls_btn, 'transition', 'active--scale');
	const editRealtyLabel = t.me_realties.edit_form.btn.edit.label;
	const hideRealtyLabel = t.me_realties.btn.hide.label;
	const cancelEditRealtyLabel = t.me_realties.edit_form.btn.cancel.label;
	const finishEditRealtyLabel = t.me_realties.edit_form.btn.finish.label;
	const selected = selectedIds.includes(realty.id);

	return (
		<div
			data-selected={selected}
			className={s.realty_item}>
			{!editMode && (
				<AppRealty
					className={s.realty_item_post}
					MyRealtyButton={
						<SelectRealtyBtn
							id={realty.id}
							isSelected={selected}
							toggleSelectRealty={toggleSelectRealty}
						/>
					}
					view='list'
					{...realty}
				/>
			)}

			{editMode && (
				<div className={s.realty_item_edit}>
					{error && <AppAlert type='error'>{error}</AppAlert>}

					<RealtyItemEditImages
						loading={loading}
						realtyImages={realty.images}
						images={images}
						setImages={setImages}
					/>

					<RealtyItemEditForm
						loading={loading}
						form={form}
					/>
				</div>
			)}

			{selectedIds.length === 0 && (
				<div
					data-loading={true}
					className={s.realty_item_controls}>
					{editMode && (
						<AppButton
							disabled={loading}
							title={finishEditRealtyLabel}
							onClick={toggleEditRealty}
							className={controlBtnStyles}
							color='transparent'>
							{!loading && <FaCheck size={22} />}
							{loading && <AppSpinner size={22} />}
						</AppButton>
					)}

					{editMode && (
						<AppButton
							disabled={loading}
							title={cancelEditRealtyLabel}
							onClick={cancelEditRealty}
							className={controlBtnStyles}
							color='transparent'>
							<FaTimes size={22} />
						</AppButton>
					)}

					{!editMode && (
						<AppButton
							title={editRealtyLabel}
							onClick={toggleEditRealty}
							className={controlBtnStyles}
							color='transparent'>
							<MdModeEdit size={22} />
						</AppButton>
					)}

					{!editMode && (
						<AppButton
							title={hideRealtyLabel}
							onClick={() => handleHideRealty(realty.id)}
							className={controlBtnStyles}
							color='transparent'>
							<FaEye size={22} />
						</AppButton>
					)}
				</div>
			)}
		</div>
	);
});

RealtyItem.displayName = 'RealtyItem';
