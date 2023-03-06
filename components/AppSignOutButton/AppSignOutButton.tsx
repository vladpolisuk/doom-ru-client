import { useRouter } from 'next/router';
import { FC, memo } from 'react';
import { useAppDispatch } from '../../hooks/store';
import { appSignOut } from '../../store/app/actions';
import AppButton, { IAppButton } from '../AppButton/AppButton';

type IAppSignOutButton = IAppButton;

/**
 * The common logout button in the application
 * @type `FC<AppLogoutButton>`
 * @memo `true`
 * @return `html:button`
 */
const AppSignOutButton: FC<IAppSignOutButton> = memo(({ children, ...props }) => {
	const dispatch = useAppDispatch();
	const router = useRouter();

	const logout = async () => {
		dispatch(appSignOut());
		router.push(`/${router.locale}`);
	};

	return (
		<AppButton
			color='transparent'
			onClick={logout}
			{...props}>
			{children}
		</AppButton>
	);
});

AppSignOutButton.displayName = 'AppSignOutButton';
export default AppSignOutButton;
