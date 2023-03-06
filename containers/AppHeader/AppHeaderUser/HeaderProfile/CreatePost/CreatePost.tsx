import { FaPlus } from 'react-icons/fa';
import AppButton from '../../../../../components/AppButton/AppButton';
import AppSkeleton from '../../../../../components/AppSkeleton/AppSkeleton';
import { useAppSelector } from '../../../../../hooks/store';
import { getAppUserLoading } from '../../../../../store/app/selectors';
import s from './CreatePost.module.scss';

export const CreatePost = () => {
	const userLoading = useAppSelector(getAppUserLoading);

	const skeleton = userLoading ? <AppSkeleton className={s.header_createSkeleton} /> : undefined;

	return (
		<AppButton
			className='active--scale'
			Skeleton={skeleton}
			color='none'
			title='Go to create page'
			href='/create'>
			<FaPlus className={s.header_create} />
		</AppButton>
	);
};
