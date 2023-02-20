import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, memo } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { TiLocation } from 'react-icons/ti';
import AppButton from '../../../components/AppButton/AppButton';
import AppLink from '../../../components/AppLink/AppLink';
import { Realty } from '../../../types';
import { Locale } from '../../../types/locales';
import getFormattedCreatedAt from '../../../utils/ui/getFormattedCreatedAt';
import getFormattedPrice from '../../../utils/ui/getFormattedPrice';
import s from './SearchResult.module.scss';

type Props = Realty & {
	toggleFavorite: any;
};

export const RealtyItem: FC<Props> = memo(
	({ title, description, price, currency, createdAt, term, id, address, primeImage, favorite, toggleFavorite }) => {
		const router = useRouter();
		const t = useTranslation('search').t;

		const url = `/s/${id}`;
		const favoriteLabel = t(favorite ? 'realty.favorite.remove_label' : 'realty.favorite.add_label');
		const formattedPrice = getFormattedPrice(price, currency, term, router.locale as Locale);
		const formattedTime = getFormattedCreatedAt(createdAt, router.locale as Locale);
		const favoriteIcon = favorite ? (
			<FaHeart
				color='#ff4242'
				className={s.realty_item_favorite_icon}
			/>
		) : (
			<FaRegHeart className={s.realty_item_favorite_icon} />
		);

		const styles = clsx(s.realty_item, 'transition');
		const buttonStyles = clsx(s.realty_item_favorite, 'active--scale');

		return (
			<li className={styles}>
				<AppLink
					onlyARIA
					href={url}
					target='_blank'
					title={title}
					className={s.realty_item_wrap}
				/>

				<Image
					width={400}
					height={240}
					alt={title}
					title={title}
					className={s.realty_item_image}
					src={primeImage}
				/>

				<div className={s.realty_item_info}>
					<p className={s.realty_item_title}>{title}</p>
					<p className={s.realty_item_price}>{formattedPrice}</p>
					<div className={s.realty_item_addressBox}>
						<TiLocation className={s.realty_item_addressIcon} />
						<p className={s.realty_item_address}>{address}</p>
					</div>
					<p className={s.realty_item_descript}>{description}</p>
					<time dateTime={formattedTime}>{formattedTime}</time>
				</div>

				<AppButton
					resetStyles
					title={favoriteLabel}
					onClick={() => toggleFavorite(id)}
					className={buttonStyles}>
					{favoriteIcon}
				</AppButton>
			</li>
		);
	}
);

RealtyItem.displayName = 'RealtyItem';
