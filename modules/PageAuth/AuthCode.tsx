import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import AppInputCode from '../../components/AppInputCode/AppInputCode';
import s from './PageAuth.module.scss';

type Props = {
	onSubmit: (code: number) => void;
};

export const AuthCode: FC<Props> = ({ onSubmit }) => {
	const t = useTranslation('auth').t;

	const inputLabel = t('auth_form.code.label');

	return (
		<form className={s.auth_form}>
			<AppInputCode
				onlyARIA
				name='code'
				submit={onSubmit}
				title={inputLabel}
				codeLength={6}
			/>
		</form>
	);
};
