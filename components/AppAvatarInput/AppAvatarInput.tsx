import { ChangeEvent, FC, memo, useState } from 'react';
import { FiCamera } from 'react-icons/fi';
import 'react-image-crop/dist/ReactCrop.css';
import { useTranslation } from '../../hooks/useTranslation';
import convertImageToBuffer from '../../utils/convertImageToBuffer';
import AppAvatar, { IAppAvatar } from '../AppAvatar/AppAvatar';
import AppButton from '../AppButton/AppButton';
import AppCropImage from '../AppCropImage/AppCropImage';
import AppLabel from '../AppLabel/AppLabel';
import AppModal from '../AppModal/AppModal';
import AppModalContent from '../AppModal/AppModalContent';
import s from './AppAvatarInput.module.scss';

interface IAppAvatarInput extends IAppAvatar {
	src?: string;
	file?: Buffer;
	disabled?: boolean;
	setFile: (file?: Buffer) => void;
}

const AppAvatarInput: FC<IAppAvatarInput> = memo(({ src, setFile, file, disabled = false, ...other }) => {
	const [view, setView] = useState(false);
	const [image, setImage] = useState<Buffer>();
	const [cropped, setCropped] = useState<Buffer>();
	const t = useTranslation('me');

	const onSubmitCropped = () => {
		setFile(cropped);
		onCloseModal();
	};

	const onOpenModal = () => setView(true);

	const onCloseModal = () => {
		setView(false);
		setImage(undefined);
	};

	const onCropImage = async (blob: Blob) => {
		const reader = new FileReader();
		reader.readAsArrayBuffer(blob);
		reader.onloadend = () => {
			const buffer = Buffer.from(reader.result as ArrayBuffer);
			setCropped(buffer);
		};
	};

	const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files) return;
		if (!event.target.files[0]) return;
		const image = event.target.files[0];
		const buffer = await convertImageToBuffer(image);
		setImage(buffer);
		onOpenModal();
	};

	const submitTitle = t.me_profile.avatar.modal.actions.submit.title;
	const cancelTitle = t.me_profile.avatar.modal.actions.cancel.title;
	const submitLabel = t.me_profile.avatar.modal.actions.submit.label;
	const cancelLabel = t.me_profile.avatar.modal.actions.cancel.label;

	return (
		<div className={s.app_avatar_input}>
			<AppAvatar
				src={src}
				{...other}
			/>

			<AppLabel className={s.app_avatar_input_foreground}>
				<div className={s.app_avatar_input_uploadBox}>
					<FiCamera size={34} />
				</div>
				<input
					disabled={disabled}
					type='file'
					id='fileInput'
					name='img'
					accept='image/*'
					onChange={uploadImage}
					className={s.fileInput}
				/>
			</AppLabel>

			<AppModal
				closeByOutsideClick={false}
				className={s.app_avatar_input_modal}
				view={view}
				setView={setView}>
				<AppModalContent className={s.app_avatar_input_modal_content}>
					<AppCropImage
						imageStyles={s.app_avatar_input_modal_cropImage}
						onCropImage={onCropImage}
						src={image || src || ''}
					/>
				</AppModalContent>

				<AppModal.Footer className={s.app_avatar_input_modal_actions}>
					<AppButton
						title={submitLabel}
						className={s.app_avatar_input_modal_btn}
						onClick={onSubmitCropped}>
						{submitTitle}
					</AppButton>

					<AppButton
						color='transparent'
						title={cancelLabel}
						className={s.app_avatar_input_modal_btn}
						onClick={onCloseModal}>
						{cancelTitle}
					</AppButton>
				</AppModal.Footer>
			</AppModal>
		</div>
	);
});

AppAvatarInput.displayName = 'AppAvatarInput';

export default AppAvatarInput;
