import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MdMailOutline } from 'react-icons/md';
import AppAvatar from '../../../components/AppAvatar/AppAvatar';
import AppLink from '../../../components/AppLink/AppLink';
import { useAppSelector } from '../../../hooks/store';
import { useTranslation } from '../../../hooks/useTranslation';
import { AppUser, Locale } from '../../../store/app/types';
import { fetchRealtyUser } from '../../../store/realty/requests';
import { getRealtyUser } from '../../../store/realty/selectors';
import s from './RealtyAuthor.module.scss';
import { RealtyAuthorSkeleton } from './RealtyAuthorSkeleton';

export const RealtyAuthor = () => {
	const router = useRouter();
	const realtyUser = useAppSelector(getRealtyUser);
	const [user, setUser] = useState<AppUser>();
	const realtyT = useTranslation('realty');

	useEffect(() => {
		const fetch = async () => {
			const locale = router.query.lang as Locale;
			if (!realtyUser) return;
			const response = await fetchRealtyUser(locale, realtyUser.id);
			setUser(response.data);
		};

		fetch();
	}, [realtyUser, router]);

	const styles = clsx(s.realty_author, 'active--scale', 'transition');

	return user ? (
		<AppLink
			href={`/user/${user.id}`}
			className={styles}>
			<AppAvatar
				width={100}
				height={100}
				className={s.realty_author_avatar}
				src={user.avatar}
			/>
			<div className={s.realty_author_info}>
				<p className={s.realty_author_fullName}>{`${user.name} ${user.secondName}`}</p>
				<div className={s.realty_author_email}>
					<MdMailOutline size={20} />
					<p>{user.email}</p>
				</div>
				<p className={s.realty_author_city}>{user.city}</p>
			</div>
		</AppLink>
	) : (
		<RealtyAuthorSkeleton />
	);
};
