import clsx from 'clsx';
import { FaPlus } from 'react-icons/fa';
import AppLink from '../../../../../components/AppLink/AppLink';
import AppSkeleton from '../../../../../components/AppSkeleton/AppSkeleton';
import { useAppSelector } from '../../../../../hooks/store';
import { getAppUserLoading } from '../../../../../store/app/selectors';
import s from './New.module.scss';

export const NewRealty = () => {
	const userLoading = useAppSelector(getAppUserLoading);

	const styles = clsx(s.link, 'active--scale');

	return userLoading ? (
		<AppSkeleton className={s.header_newSkeleton} />
	) : (
		<AppLink
			className={styles}
			color='none'
			href='/new'>
			<FaPlus className={s.header_new} />
		</AppLink>
	);
};
