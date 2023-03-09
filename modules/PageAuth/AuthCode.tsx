import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import AppAlert from '../../components/AppAlert/AppAlert';
import AppButton from '../../components/AppButton/AppButton';
import AppInputCode from '../../components/AppInputCode/AppInputCode';
import AppSpinner from '../../components/AppSpinner/AppSpinner';
import useCountdownTimer from '../../hooks/useCountdownTimer';
import formatTime from '../../utils/ui/formatTime';
import s from './PageAuth.module.scss';

type Props = {
	loading: boolean;
	onSubmit: (code: number) => void;
	error: string;
};

export const AuthCode: FC<Props> = ({ onSubmit, error, loading }) => {
	const [timer] = useCountdownTimer(5 * 60);
	const time = formatTime(timer, 'mm:ss');

	const t = useTranslation('auth').t;
	const inputLabel = t('auth_form.code.label');
	const sendAgainTitle = t('auth_form.code.sendAgain.title');
	const sendAgainLabel = t('auth_form.code.sendAgain.label');

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

			{!loading && (
				<AppButton
					onlyARIA
					type='button'
					title={sendAgainLabel}
					disabled={timer !== 0}
					color='transparent'>
					{sendAgainTitle} {timer !== 0 && `(${time})`}
				</AppButton>
			)}

			{loading && <AppSpinner size={30} />}
		</form>
	);
};
