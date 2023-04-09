import clsx from 'clsx';
import AppSkeleton from '../../../components/AppSkeleton/AppSkeleton';
import s from './RealtyAuthor.module.scss';

export const RealtyAuthorSkeleton = () => {
	const styles = clsx(s.realty_author, 'active--scale', 'transition');
	const avatarStyles = clsx(s.realty_author_avatar, s.realty_author_avatarSkeleton);
	const fullNameStyles = clsx(s.realty_author_fullName, s.realty_author_fullNameSkeleton);
	const emailStyles = clsx(s.realty_author_email, s.realty_author_emailSkeleton);
	const cityStyles = clsx(s.realty_author_city, s.realty_author_citySkeleton);

	return (
		<div className={styles}>
			<AppSkeleton className={avatarStyles} />

			<div className={s.realty_author_info}>
				<AppSkeleton className={fullNameStyles} />
				<AppSkeleton className={emailStyles} />
				<AppSkeleton className={cityStyles} />
			</div>
		</div>
	);
};
