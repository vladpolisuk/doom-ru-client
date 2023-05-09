import clsx from 'clsx';
import { ButtonHTMLAttributes, FC, memo } from 'react';
import { FaTimes } from 'react-icons/fa';
import AppButton from '../AppButton/AppButton';
import s from './AppModal.module.scss';

type IAppModalButton = ButtonHTMLAttributes<HTMLButtonElement>;

const AppModalButton: FC<IAppModalButton> = memo(({ children, className, ...extra }) => {
	const styles = clsx(s.app_modal_close, 'transition', className);

	return (
		<AppButton
			{...extra}
			className={styles}
			color='transparent'>
			<FaTimes size={26} />
		</AppButton>
	);
});

AppModalButton.displayName = 'AppModalButton';

export default AppModalButton;
