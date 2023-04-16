import clsx from 'clsx';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import AppButton from '../../../components/AppButton/AppButton';
import AppCheckbox from '../../../components/AppCheckbox/AppCheckbox';
import AppInput from '../../../components/AppInput/AppInput';
import AppLabel from '../../../components/AppLabel/AppLabel';
import AppModal from '../../../components/AppModal/AppModal';
import AppSelect from '../../../components/AppSelect/AppSelect';
import { useTranslation } from '../../../hooks/useTranslation';
import { RealtyForm } from '../../../store/realty/types';
import s from './PageNewForm.module.scss';

type Props = {
	onSubmit: (form: RealtyForm) => void;
	loading: boolean;
};

type FieldType = keyof RealtyForm;

export const PageNewForm: FC<Props> = ({ onSubmit, loading }) => {
	const newT = useTranslation('new');
	const [view, setView] = useState(false);
	const {
		register,
		trigger,
		watch,
		formState: { errors },
		handleSubmit
	} = useForm<RealtyForm>({
		defaultValues: {
			title: undefined,
			description: undefined,
			price: undefined,
			rooms: undefined,
			area: undefined,
			floor: undefined,
			action: undefined,
			address: undefined,
			bedrooms: undefined,
			currency: undefined,
			houseType: undefined,
			repair: undefined,
			term: undefined,
			type: undefined,
			elevator: false,
			mortgage: false
		}
	});

	const submit = (data: RealtyForm) => {
		onSubmit(data);
	};

	const openConfirmModal = async () => {
		const result = await trigger();
		if (!result) return;
		setView(true);
	};

	const closeConfirmModal = () => {
		setView(false);
	};

	const confirmSubmit = () => {
		closeConfirmModal();
		handleSubmit(submit)();
	};

	const formBaseTitle = newT.new_form.form.base.title;
	const formDetailTitle = newT.new_form.form.detail.title;
	const baseFormFields = newT.new_form.form.base.fields;
	const detailFormFields = newT.new_form.form.detail.fields;
	const submitTitle = newT.new_form.form.submit.title;
	const submitLabel = newT.new_form.form.submit.label;
	const confirmTitle = newT.new_form.form.confirm.title;
	const confirmLabel = newT.new_form.form.confirm.label;
	const confirmCancelTitle = newT.new_form.form.confirm.cancel.title;
	const confirmCancelLabel = newT.new_form.form.confirm.cancel.label;
	const confirmSubmitTitle = newT.new_form.form.confirm.submit.title;
	const confirmSubmitLabel = newT.new_form.form.confirm.submit.label;
	const submitStyles = clsx(s.form_submit, 'active--scale', 'transition');

	return (
		<form className={s.form}>
			<h3 className={s.form_title}>2. {formBaseTitle}</h3>

			<div className={s.form_fields}>
				{baseFormFields
					.filter(field => watch('action') === field.page || field.page === 'both')
					.map(field => {
						switch (field.type) {
							case 'number':
								return (
									<AppLabel
										key={field.name}
										htmlFor={field.name}
										errorMessage={errors[field.name as FieldType]?.message}>
										<p>{field.title}</p>
										<AppInput
											onlyARIA
											type='number'
											min={0}
											required={field.required?.value}
											invalid={field.name in errors}
											title={field.label}
											className={s.form_field}
											placeholder={field.label}
											{...register(field.name as FieldType, {
												required: field.required
											})}
										/>
									</AppLabel>
								);

							case 'text':
								return (
									<AppLabel
										key={field.name}
										htmlFor={field.name}
										errorMessage={errors[field.name as FieldType]?.message}>
										<p>{field.title}</p>
										<AppInput
											onlyARIA
											type={field.type}
											title={field.label}
											invalid={field.name in errors}
											required={field.required?.value}
											className={s.form_field}
											placeholder={field.label}
											{...register(field.name as FieldType, {
												required: field.required
											})}
										/>
									</AppLabel>
								);

							case 'textarea':
								return (
									<AppLabel
										key={field.name}
										htmlFor={field.name}
										errorMessage={errors[field.name as FieldType]?.message}>
										<p>{field.title}</p>
										<AppInput
											onlyARIA
											type='text'
											as='textarea'
											invalid={field.name in errors}
											required={field.required?.value}
											title={field.label}
											className={clsx(s.form_field, s['form_field--textarea'])}
											placeholder={field.label}
											{...register(field.name as FieldType, {
												required: field.required
											})}
										/>
									</AppLabel>
								);

							case 'option':
								return (
									<AppLabel
										key={field.name}
										htmlFor={field.name}
										errorMessage={errors[field.name as FieldType]?.message}>
										<p>{field.title}</p>
										<AppSelect
											invalid={field.name in errors}
											aria-label={field.label}
											{...register(field.name as FieldType, {
												required: field.required
											})}>
											{field.options?.map(({ value, title }) => (
												<AppSelect.Option
													key={String(title)}
													aria-label={String(title)}
													value={value}>
													{title}
												</AppSelect.Option>
											))}
										</AppSelect>
									</AppLabel>
								);
						}
					})}
			</div>

			<h3 className={s.form_title}>3. {formDetailTitle}</h3>

			<div className={s.form_fields}>
				{detailFormFields
					.filter(field => watch('action') === field.page || field.page === 'both')
					.map(field => {
						switch (field.type) {
							case 'number':
								return (
									<AppLabel
										key={field.name}
										htmlFor={field.name}
										errorMessage={errors[field.name as FieldType]?.message}>
										<p>{field.title}</p>
										<AppInput
											onlyARIA
											type='number'
											min={0}
											required={field.required?.value}
											invalid={field.name in errors}
											title={field.label}
											className={s.form_field}
											placeholder={field.label}
											{...register(field.name as FieldType, {
												required: field.required
											})}
										/>
									</AppLabel>
								);

							case 'option':
								return (
									<AppLabel
										key={field.name}
										htmlFor={field.name}
										errorMessage={errors[field.name as FieldType]?.message}>
										<p>{field.title}</p>
										<AppSelect
											invalid={field.name in errors}
											aria-label={field.label}
											{...register(field.name as FieldType, {
												required: field.required
											})}>
											{field.options?.map(({ value, title }) => (
												<AppSelect.Option
													key={String(title)}
													aria-label={String(title)}
													value={value}>
													{title}
												</AppSelect.Option>
											))}
										</AppSelect>
									</AppLabel>
								);

							case 'checkbox':
								return (
									<AppLabel
										row
										key={field.name}>
										<AppCheckbox
											onlyARIA
											title={field.label}
											{...register(field.name as FieldType)}
										/>
										<p>{field.title}</p>
									</AppLabel>
								);
						}
					})}
			</div>

			<AppButton
				disabled={loading}
				loading={loading}
				onClick={openConfirmModal}
				className={submitStyles}
				title={submitLabel}
				type='button'>
				{submitTitle}
			</AppButton>

			<AppModal
				setView={setView}
				view={view}>
				<AppModal.Header>
					<h2>{confirmTitle}</h2>
				</AppModal.Header>

				<AppModal.Content>
					<p className={s.modalConfirm_content}>{confirmLabel}</p>
				</AppModal.Content>

				<AppModal.Footer className={s.modalConfirm_actions}>
					<AppButton
						color='transparent'
						title={confirmCancelLabel}
						onClick={closeConfirmModal}>
						{confirmCancelTitle}
					</AppButton>

					<AppButton
						title={confirmSubmitLabel}
						onClick={confirmSubmit}>
						{confirmSubmitTitle}
					</AppButton>
				</AppModal.Footer>

				<AppModal.Close onClick={closeConfirmModal} />
			</AppModal>
		</form>
	);
};
