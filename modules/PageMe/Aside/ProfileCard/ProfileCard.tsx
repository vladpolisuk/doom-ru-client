import AppAvatar from '../../../../components/AppAvatar/AppAvatar';
import AppSkeleton from '../../../../components/AppSkeleton/AppSkeleton';
import { useAppSelector } from '../../../../hooks/store';
import { getAppUser, getAppUserLoading } from '../../../../store/app/selectors';
import s from './ProfileCard.module.scss';

export const ProfileCard = () => {
	const user = useAppSelector(getAppUser);
	const userLoading = useAppSelector(getAppUserLoading);

	return (
		<div className={s.me_aside_profileCard}>
			{userLoading && <AppSkeleton className={s.me_aside_profileCard_avatarSkeleton} />}
			{!userLoading && (
				<AppAvatar
					width={90}
					height={90}
					className={s.me_aside_profileCard_avatar}
					src={user.avatar}
					alt={user.name}
				/>
			)}

			<div className={s.me_aside_profileCard_info}>
				{userLoading && <AppSkeleton className={s.me_aside_profileCard_nameSkeleton} />}
				{!userLoading && <strong className={s.me_aside_profileCard_name}>{user.name}</strong>}

				{userLoading && <AppSkeleton className={s.me_aside_profileCard_secondNameSkeleton} />}
				{!userLoading && <strong className={s.me_aside_profileCard_secondName}>{user.secondName}</strong>}

				{userLoading && <AppSkeleton className={s.me_aside_profileCard_idSkeleton} />}
				{!userLoading && <p className={s.me_aside_profileCard_id}>ID {user.id}</p>}
			</div>
		</div>
	);
};
