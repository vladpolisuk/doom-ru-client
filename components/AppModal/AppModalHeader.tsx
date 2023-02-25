import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import s from './AppModal.module.scss';

type Props = HTMLAttributes<HTMLDivElement & PropsWithChildren>;

const AppModalHeader: FC<Props> = ({ children, ...extra }) => {
	return (
		<header
			className={s.app_modal_header}
			{...extra}>
			{children}
		</header>
	);
};

export default AppModalHeader;
