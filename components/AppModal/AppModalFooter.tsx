import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import s from './AppModal.module.scss';

type Props = HTMLAttributes<HTMLDivElement & PropsWithChildren>;

const AppModalFooter: FC<Props> = ({ children, ...extra }) => {
	return (
		<footer
			className={s.app_modal_footer}
			{...extra}>
			{children}
		</footer>
	);
};

export default AppModalFooter;
