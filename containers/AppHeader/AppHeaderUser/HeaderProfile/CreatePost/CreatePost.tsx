import { FaPlus } from 'react-icons/fa'
import { AppButton } from '../../../../../components/AppButton/AppButton'
import s from './CreatePost.module.scss';

export const CreatePost = () => {
    return (
        <AppButton
            className="active--scale transparent hover--none"
            title="Go to create page"
            href="/create">
            <FaPlus className={s.header_create} />
        </AppButton>
    )
}
