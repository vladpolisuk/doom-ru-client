import { FaPlus } from 'react-icons/fa';
import AppButton from '../../../../../components/AppButton/AppButton';
import s from './CreatePost.module.scss';

export const CreatePost = () => {
	return (
		<AppButton
			className='active--scale'
			color='none'
			title='Go to create page'
			href='/create'>
			<FaPlus className={s.header_create} />
		</AppButton>
	);
};
