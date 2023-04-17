import clsx from 'clsx';
import { FaPlus } from 'react-icons/fa';
import AppLink from '../../../../../components/AppLink/AppLink';
import s from './New.module.scss';

export const NewRealty = () => {
	const styles = clsx(s.link, 'active--scale');

	return (
		<AppLink
			className={styles}
			color='none'
			href='/new'>
			<FaPlus className={s.header_new} />
		</AppLink>
	);
};
