import { useRouter } from 'next/router';
import { FC, memo } from 'react';
import { useAppDispatch } from '../../hooks/store';
import { appSignOut } from '../../store/app/requests';
import AppButton, { IAppButton } from '../AppButton/AppButton';

type IAppSignOutButton = IAppButton;

/**
 * The common logout button in the application
 * @type `FC<AppLogoutButton>`
 * @memo `true`
 * @return `html:button`
 */
const AppSignOutButton: FC<IAppSignOutButton> = memo(({ children, ...props }) => {
	const router = useRouter();
	const dispatch = useAppDispatch();

	const logout = async () => {
		await dispatch(appSignOut());
		router.replace(`/${router.locale}`);
	};

	return (
		<AppButton
			onClick={logout}
			{...props}>
			{children}
		</AppButton>
	);
});

AppSignOutButton.displayName = 'AppSignOutButton';
export default AppSignOutButton;
