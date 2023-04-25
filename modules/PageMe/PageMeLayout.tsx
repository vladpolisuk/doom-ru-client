import clsx from 'clsx';
import { FC, PropsWithChildren, memo } from 'react';
import { Aside } from './Aside/Aside';
import s from './PageMeLayout.module.scss';

const PageMeLayout: FC<PropsWithChildren> = memo(({ children }) => {
	const styles = clsx(s.me_container, 'container');

	return (
		<div className={s.me}>
			<div className={styles}>
				<Aside />
				{children}
			</div>
		</div>
	);
});

PageMeLayout.displayName = 'PageMeLayout';
export default PageMeLayout;
