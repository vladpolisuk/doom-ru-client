import { FC, memo } from 'react';
import { AppButton, IAppButton } from '../AppButton/AppButton';

type IAppSignOutButton = IAppButton;

/**
 * The common logout button in the application
 * @type `FC<AppLogoutButton>`
 * @memo `true`
 * @return `html:button`
 */
export const AppSignOutButton: FC<IAppSignOutButton> = memo(({ children, ...props }) => {
	const logout = () => {
		alert('Log out!');
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
