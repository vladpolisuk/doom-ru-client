import clsx from 'clsx';
import { useRouter } from 'next/router';
import { FC, memo } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { TiLocation } from 'react-icons/ti';
import AppButton from '../../../../components/AppButton/AppButton';
import AppLink from '../../../../components/AppLink/AppLink';
import { useTranslation } from '../../../../hooks/useTranslation';
import locales from '../../../../locales';
import { Locale } from '../../../../store/app/types';
import { Realty } from '../../../../types';
import formatCreatedAt from '../../../../utils/ui/formatCreatedAt';
import formatPrice from '../../../../utils/ui/formatPrice';
import { View } from '../../PageSearch';
import s from './RealtyItem.module.scss';
import { RealtyItemImages } from './RealtyItemImages';

type Props = Realty & {
	toggleFavorite: any;
	view: View;
};

const RealtyItem: FC<Props> = memo(props => {
	const { title, description, price, currency, createdAt, images, term, view, id, address, toggleFavorite } = props;
	const router = useRouter();
	const search = useTranslation('search') as typeof locales.en.search;

	const url = `/s/${id}`;
	const favoriteLabel = search.realty.favorite.add_label;
	const formattedPrice = formatPrice(price, currency, term, router.query.lang as Locale);
	const formattedTime = formatCreatedAt(createdAt, router.query.lang as Locale);
	const styles = clsx(s.realty_item, s[`realty_item--${view}`], 'transition');
	const styles_info = clsx(s.realty_item_info, s[`realty_item_info--${view}`], 'transition');
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

			<RealtyItemImages
				realtyURL={url}
				view={view}
				images={images}
				title={title}
			/>

			<div className={styles_info}>
				<p className={s.realty_item_title}>{title}</p>
				<p className={s.realty_item_price}>{formattedPrice}</p>
				<div className={s.realty_item_addressBox}>
					<TiLocation className={s.realty_item_addressIcon} />
					<p className={s.realty_item_address}>{address}</p>
				</div>
				<p className={s.realty_item_description}>{description}</p>
				<time dateTime={formattedTime}>{formattedTime}</time>
			</div>

			<AppButton
				resetStyles
				title={favoriteLabel}
				onClick={() => toggleFavorite(id)}
				className={buttonStyles}>
				<FaRegHeart className={s.realty_item_favorite_icon} />
			</AppButton>
		</li>
	);
});

RealtyItem.displayName = 'RealtyItem';
export default RealtyItem;
