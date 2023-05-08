import clsx from 'clsx';
import { FC, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import AppButton from '../../../../../../components/AppButton/AppButton';
import AppCheckbox from '../../../../../../components/AppCheckbox/AppCheckbox';
import AppInput from '../../../../../../components/AppInput/AppInput';
import AppLabel from '../../../../../../components/AppLabel/AppLabel';
import AppSelect from '../../../../../../components/AppSelect/AppSelect';
import { useTranslation } from '../../../../../../hooks/useTranslation';
import { RealtyForm } from '../../../../../../store/realty/types';
import s from './RealtyItemEditForm.module.scss';

interface Props {
	form: UseFormReturn<RealtyForm, any>;
	loading?: boolean;
}

type FieldType = keyof RealtyForm;

export const RealtyItemEditForm: FC<Props> = ({ form, loading = false }) => {
	const [viewMore, setViewMore] = useState(false);
	const t = useTranslation('me');
	const {
		register,
		formState: { errors }
	} = form;

	const toggleViewMore = () => setViewMore(!viewMore);

	const showMoreStyles = clsx(s.realty_item_form_showMore, 'transition', 'active--scale');
	const showMoreLabel = t.me_realties.edit_form.btn.showMore.label;
	const showMoreTitle = t.me_realties.edit_form.btn.showMore.title;
	const hideMoreLabel = t.me_realties.edit_form.btn.hideMore.label;
	const hideMoreTitle = t.me_realties.edit_form.btn.hideMore.title;

	return (
		<form className={s.realty_item_form}>
			{t.me_realties.edit_form.fields.base.map(field => {
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
									disabled={loading}
									required={field.required?.value}
									invalid={field.name in errors}
									title={field.label}
									className={s.realty_item_form_field}
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
									disabled={loading}
									type={field.type}
									title={field.label}
									invalid={field.name in errors}
									required={field.required?.value}
									className={s.realty_item_form_field}
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
									disabled={loading}
									invalid={field.name in errors}
									required={field.required?.value}
									title={field.label}
									className={clsx(s.realty_item_form_field, s['realty_item_form_field--textarea'])}
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
									disabled={loading}
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

			{viewMore &&
				t.me_realties.edit_form.fields.detail.map(field => {
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
										disabled={loading}
										required={field.required?.value}
										invalid={field.name in errors}
										title={field.label}
										className={s.realty_item_form_field}
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
										disabled={loading}
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
										disabled={loading}
										title={field.label}
										{...register(field.name as FieldType)}
									/>
									<p>{field.title}</p>
								</AppLabel>
							);
					}
				})}

			<AppButton
				disabled={loading}
				title={viewMore ? hideMoreLabel : showMoreLabel}
				onClick={toggleViewMore}
				className={showMoreStyles}
				type='button'
				color='transparent'>
				{viewMore && hideMoreTitle}
				{!viewMore && showMoreTitle}
			</AppButton>
		</form>
	);
};
