import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import AppAlert from '../../components/AppAlert/AppAlert';
import AppInputCode from '../../components/AppInputCode/AppInputCode';
import AppSpinner from '../../components/AppSpinner/AppSpinner';
import s from './PageAuth.module.scss';

type Props = {
	loading: boolean;
	onSubmit: (code: number) => void;
	error: string;
};

export const AuthCode: FC<Props> = ({ onSubmit, error, loading }) => {
	const t = useTranslation('auth').t;

	const inputLabel = t('auth_form.code.label');

	return (
		<form className={s.auth_form}>
			{error && <AppAlert type='error'>{error}</AppAlert>}

			<AppInputCode
				onlyARIA
				name='code'
				disabled={loading}
				submit={onSubmit}
				title={inputLabel}
				codeLength={6}
			/>

			{loading && <AppSpinner size={30} />}
		</form>
	);
};
