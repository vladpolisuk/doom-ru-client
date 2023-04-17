import clsx from 'clsx';
import { MdMailOutline } from 'react-icons/md';
import AppAvatar from '../../../components/AppAvatar/AppAvatar';
import AppLink from '../../../components/AppLink/AppLink';
import { useAppSelector } from '../../../hooks/store';
import { getRealtyAuthor } from '../../../store/realty/selectors';
import s from './RealtyAuthor.module.scss';
import { RealtyAuthorSkeleton } from './RealtyAuthorSkeleton';

export const RealtyAuthor = () => {
	const author = useAppSelector(getRealtyAuthor);

	const styles = clsx(s.realty_author, 'active--scale', 'transition');

	return author ? (
		<AppLink
			href={`/user/${author.id}`}
			className={styles}>
			<AppAvatar
				width={100}
				height={100}
				className={s.realty_author_avatar}
				src={author.avatar}
			/>
			<div className={s.realty_author_info}>
				<p className={s.realty_author_fullName}>{`${author.name} ${author.secondName}`}</p>
				<div className={s.realty_author_email}>
					<MdMailOutline size={20} />
					<p>{author.email}</p>
				</div>
				<p className={s.realty_author_city}>{author.city}</p>
			</div>
		</AppLink>
	) : (
		<RealtyAuthorSkeleton />
	);
};
