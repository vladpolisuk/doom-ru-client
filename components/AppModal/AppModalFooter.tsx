import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import s from './AppModal.module.scss';
import clsx from 'clsx';

type Props = HTMLAttributes<HTMLDivElement & PropsWithChildren>;

const AppModalFooter: FC<Props> = ({ children, className, ...extra }) => {
	const styles = clsx(s.app_modal_footer, className);

	return (
		<footer
			className={styles}
			{...extra}>
			{children}
		</footer>
	);
};

export default AppModalFooter;
