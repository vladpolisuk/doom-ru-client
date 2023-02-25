import Image from 'next/image';
import { useAppSelector } from '../../../hooks/store';
import { getAppUser } from '../../../store/app/selectors';
import s from './AsideProfileCard.module.scss';

export const ProfileCard = () => {
	const user = useAppSelector(getAppUser);
	const avatar = user?.avatar || '';
	const name = user?.name || '';
	const secondName = user?.secondName || '';
	const id = user?.id || '';

	return (
		<div className={s.me_aside_profileCard}>
			<Image
				priority
				width='90'
				height='90'
				alt={name}
				src={avatar}
				draggable='false'
				className={s.me_aside_profileCard_avatar}
			/>

			<div className={s.me_aside_profileCard_info}>
				<strong className={s.me_aside_profileCard_name}>{name}</strong>

				<strong className={s.me_aside_profileCard_secondName}>{secondName}</strong>

				<p className={s.me_aside_profileCard_id}>ID {id}</p>
			</div>
		</div>
	);
};
