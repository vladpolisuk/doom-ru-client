import { FC, HTMLAttributes, memo, PropsWithChildren } from 'react';
import s from './AppModal.module.scss';

type IAppModalContent = HTMLAttributes<HTMLDivElement & PropsWithChildren>;

const AppModalContent: FC<IAppModalContent> = memo(({ children, ...extra }) => {
	return (
		<main
			className={s.app_modal_content}
			{...extra}>
			{children}
		</main>
	);
});

AppModalContent.displayName = 'AppModalContent';

export default AppModalContent;
