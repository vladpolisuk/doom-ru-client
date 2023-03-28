import AppAvatar from '../../../components/AppAvatar/AppAvatar';
import AppSkeleton from '../../../components/AppSkeleton/AppSkeleton';
import { useAppSelector } from '../../../hooks/store';
import { getAppUser, getAppUserLoading } from '../../../store/app/selectors';
import s from './AsideProfileCard.module.scss';

export const ProfileCard = () => {
	const user = useAppSelector(getAppUser);
	const userLoading = useAppSelector(getAppUserLoading);

	const name = user && user.name;
	const secondName = user && user.secondName;
	const id = user && user.id;
	const skeleton = userLoading ? <AppSkeleton className={s.me_aside_profileCard_avatarSkeleton} /> : undefined;

	return (
		<div className={s.me_aside_profileCard}>
			<AppAvatar
				width={90}
				height={90}
				Skeleton={skeleton}
				className={s.me_aside_profileCard_avatar}
				src={user?.avatar}
				alt={user?.name}
			/>

			<div className={s.me_aside_profileCard_info}>
				{userLoading && <AppSkeleton className={s.me_aside_profileCard_nameSkeleton} />}
				{!userLoading && <strong className={s.me_aside_profileCard_name}>{name}</strong>}

				{userLoading && <AppSkeleton className={s.me_aside_profileCard_secondNameSkeleton} />}
				{!userLoading && <strong className={s.me_aside_profileCard_secondName}>{secondName}</strong>}

				{userLoading && <AppSkeleton className={s.me_aside_profileCard_idSkeleton} />}
				{!userLoading && <p className={s.me_aside_profileCard_id}>ID {id}</p>}
			</div>
		</div>
	);
};
