import { FC, HTMLAttributes, memo, PropsWithChildren } from 'react';
import s from './AppModal.module.scss';

type IAppModalHeader = HTMLAttributes<HTMLDivElement & PropsWithChildren>;

const AppModalHeader: FC<IAppModalHeader> = memo(({ children, ...extra }) => {
	return (
		<header
			className={s.app_modal_header}
			{...extra}>
			{children}
		</header>
	);
});

AppModalHeader.displayName = 'AppModalHeader';

export default AppModalHeader;
