import clsx from 'clsx';
import { FC, memo } from 'react';
import { FaRegCircle, FaRegDotCircle } from 'react-icons/fa';
import AppButton from '../../../../../components/AppButton/AppButton';
import s from './RealtyItem.module.scss';

interface Props {
	id: number;
	isSelected: boolean;
	toggleSelectRealty: (id: number) => void;
}

const SelectRealtyBtn: FC<Props> = memo(({ id, isSelected, toggleSelectRealty }) => {
	const selectBtnStyles = clsx(s.realty_item_selectBtn, 'transition');

	const handleClick = () => toggleSelectRealty(id);

	return (
		<AppButton
			onClick={handleClick}
			className={selectBtnStyles}
			resetStyles>
			{!isSelected && <FaRegCircle className={s.realty_item_selectBtn_icon} />}
			{isSelected && <FaRegDotCircle className={s.realty_item_selectBtn_icon} />}
		</AppButton>
	);
});

SelectRealtyBtn.displayName = 'SelectRealtyBtn';
export default SelectRealtyBtn;
