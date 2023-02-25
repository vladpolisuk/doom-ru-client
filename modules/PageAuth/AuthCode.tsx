import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import AppButton from '../../components/AppButton/AppButton';
import AppInputCode from '../../components/AppInputCode/AppInputCode';
import s from './PageAuth.module.scss';

type Props = {
	onSubmit: (code: number) => void;
};

export const AuthCode: FC<Props> = ({ onSubmit }) => {
	const t = useTranslation('auth').t;

	const handleSubmit = (event: any) => {
		event.preventDefault();
		const list = document.getElementsByName('code') as NodeListOf<HTMLInputElement>;
		const code = +[...list].map(item => +item.value).join('');
		onSubmit(code);
	};

	const inputLabel = t('auth_form.code.label');
	const submit_title = t('auth_form.btn.code.submit.title');
	const submit_label = t('auth_form.btn.code.submit.label');

	const submitBtnStyles = clsx(s.auth_form_actions_submit, 'active--scale', 'transition');

	return (
		<form
			onSubmit={handleSubmit}
			className={s.auth_form}>
			<AppInputCode
				onlyARIA
				name='code'
				title={inputLabel}
				codeLength={6}
			/>

			<div className={s.auth_form_actions}>
				<AppButton
					type='submit'
					title={submit_label}
					className={submitBtnStyles}>
					{submit_title}
				</AppButton>
			</div>
		</form>
	);
};
