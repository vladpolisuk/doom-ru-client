import clsx from 'clsx';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import RealtyAPI from '../../../api/realty';
import AppButton from '../../../components/AppButton/AppButton';
import AppMessage from '../../../components/AppMessage/AppMessage';
import AppModal from '../../../components/AppModal/AppModal';
import { useMessage } from '../../../hooks/useMessage';
import { useTranslation } from '../../../hooks/useTranslation';
import { Locale } from '../../../store/app/types';
import s from './PageRealties.module.scss';

interface Props {
	selectedIds: number[];
	setSelectedIds: (ids: number[]) => void;
}

const ControlSelectedRealties: FC<Props> = ({ selectedIds, setSelectedIds }) => {
	const router = useRouter();
	const me = useTranslation('me');
	const [removeLoading, setRemoveLoading] = useState(false);
	const { showMessage, open, props } = useMessage();
	const [view, setView] = useState(false);
	const disabled = selectedIds.length === 0;

	const handleOpenModal = () => setView(true);

	const handleCloseModal = () => {
		setView(false);
	};

	const handleReset = () => setSelectedIds([]);

	const handleRemoveRealties = async () => {
		setRemoveLoading(true);

		const locale = router.query.lang as Locale;
		const api = new RealtyAPI(locale);

		try {
			await Promise.all(
				selectedIds.map(async id => {
					await api.removeRealty(id);
				})
			);

			showMessage({
				message: me.me_realties.messages.success.title,
				type: 'success'
			});
		} catch (error) {
			showMessage({
				message: me.me_realties.messages.error.title,
				type: 'error'
			});
		} finally {
			setRemoveLoading(false);
			setView(false);
			handleReset();
		}
	};

	const styles = clsx(s.me_realties_removeBtn, 'transition', disabled ? '' : 'active--scale');
	const removeBtnLabel = me.me_realties.btn.remove.label;
	const removeBtnTitle = me.me_realties.btn.remove.title;
	const resetBtnLabel = me.me_realties.btn.reset.label;
	const resetBtnTitle = me.me_realties.btn.reset.title;
	const cancelBtnLabel = me.me_realties.btn.cancel.label;
	const cancelBtnTitle = me.me_realties.btn.cancel.title;
	const removeModalDescription = me.me_realties.modal.description;
	const removeModalTitle = me.me_realties.modal.title;

	return (
		<div className={s.me_realties_control}>
			<AppButton
				disabled={disabled}
				title={removeBtnLabel}
				onClick={handleOpenModal}
				color='transparent'
				className={styles}>
				{removeBtnTitle}
			</AppButton>

			<AppButton
				disabled={disabled}
				title={resetBtnLabel}
				onClick={handleReset}
				color='transparent'
				className={styles}>
				{resetBtnTitle}
			</AppButton>

			<AppModal
				closeByOutsideClick={false}
				view={view}
				setView={setView}>
				<AppModal.Header>
					<h2 className={s.me_realties_removeModal_title}>{removeModalTitle}</h2>
				</AppModal.Header>

				<AppModal.Content>
					<p className={s.me_realties_removeModal_description}>{removeModalDescription}</p>
				</AppModal.Content>

				<AppModal.Footer className={s.me_realties_removeModal_footer}>
					<AppButton
						title={removeBtnLabel}
						disabled={removeLoading}
						loading={removeLoading}
						className={s.me_realties_removeModal_btn}
						onClick={handleRemoveRealties}>
						{removeBtnTitle}
					</AppButton>

					<AppButton
						title={cancelBtnLabel}
						disabled={removeLoading}
						className={s.me_realties_removeModal_btn}
						onClick={handleCloseModal}
						color='transparent'>
						{cancelBtnTitle}
					</AppButton>
				</AppModal.Footer>
			</AppModal>

			<AppMessage
				open={open}
				{...props}
			/>
		</div>
	);
};

export default ControlSelectedRealties;
