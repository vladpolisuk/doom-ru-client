import { useRouter } from 'next/router';
import { FC, memo } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import { appSignOut } from '../../store/app/requests';
import AppButton, { IAppButton } from '../AppButton/AppButton';

type IAppSignOutButton = IAppButton;

/** ## App Sign Out Button
 * The common logout button in the application
 * @type `FC<AppLogoutButton>`
 * @memo `true`
 * @return `html:button`
 */
const AppSignOutButton: FC<IAppSignOutButton> = memo(({ children, ...props }) => {
	const router = useRouter();
	const dispatch = useAppDispatch();

	const signOut = async () => {
		await dispatch(appSignOut());
		router.reload();
	};

	return (
		<AppButton
			onClick={signOut}
			{...props}>
			{children}
		</AppButton>
	);
});

AppSignOutButton.displayName = 'AppSignOutButton';
export default AppSignOutButton;
