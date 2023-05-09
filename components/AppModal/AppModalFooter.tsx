import clsx from 'clsx';
import { FC, HTMLAttributes, memo, PropsWithChildren } from 'react';
import s from './AppModal.module.scss';

type IAppModalFooter = HTMLAttributes<HTMLDivElement & PropsWithChildren>;

const AppModalFooter: FC<IAppModalFooter> = memo(({ children, className, ...extra }) => {
	const styles = clsx(s.app_modal_footer, className);

	return (
		<footer
			className={styles}
			{...extra}>
			{children}
		</footer>
	);
});

AppModalFooter.displayName = 'AppModalFooter';

export default AppModalFooter;
