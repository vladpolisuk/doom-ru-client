import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import s from './AppModal.module.scss';

type Props = HTMLAttributes<HTMLDivElement & PropsWithChildren>;

const AppModalContent: FC<Props> = ({ children, ...extra }) => {
	return (
		<main
			className={s.app_modal_content}
			{...extra}>
			{children}
		</main>
	);
};

export default AppModalContent;
