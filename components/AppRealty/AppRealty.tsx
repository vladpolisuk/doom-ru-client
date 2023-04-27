import clsx from 'clsx';
import { useRouter } from 'next/router';
import { FC, ReactNode, memo, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { TiLocation } from 'react-icons/ti';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { useTranslation } from '../../hooks/useTranslation';
import { getAppUser } from '../../store/app/selectors';
import { Locale } from '../../store/app/types';
import { addRealtyToFavorite, removeRealtyFromFavorite } from '../../store/realty/requests';
import { Realty } from '../../store/realty/types';
import formatCreatedAt from '../../utils/ui/formatCreatedAt';
import formatPrice from '../../utils/ui/formatPrice';
import AppButton from '../AppButton/AppButton';
import AppLink from '../AppLink/AppLink';
import s from './AppRealty.module.scss';
import { RealtyItemImages } from './AppRealtyImages';

export type AppRealtyView = 'list' | 'grid';

type Props = Realty & {
	view: AppRealtyView;
	MyRealtyButton?: ReactNode;
};

const AppRealty: FC<Props> = memo(
	({ title, description, price, currency, createdAt, images, term, view, id, address, user, MyRealtyButton }) => {
		const router = useRouter();
		const dispatch = useAppDispatch();
		const appUser = useAppSelector(getAppUser);
		const search = useTranslation('search');
		const [loading, setLoading] = useState(false);

		const url = `/s/${id}`;
		const favoriteLabel = search.search_realty.favorite.add_label;
		const formattedPrice = formatPrice(price, currency, term, router.query.lang as Locale);
		const formattedTime = formatCreatedAt(createdAt, router.query.lang as Locale);
		const styles = clsx(s.realty, s[`realty--${view}`], 'transition');
		const styles_info = clsx(s.realty_info, s[`realty_info--${view}`], 'transition');
		const favoriteButtonStyles = clsx(s.realty_favorite, 'transition', 'active--scale');

		const isMyRealty = appUser.id === user.id;
		const isFavorite = appUser.favorites.includes(id);

		const toggleFavorite = async () => {
			const locale = router.query.lang as Locale;
			if (!locale) return;
			setLoading(true);
			if (!isFavorite) await dispatch(addRealtyToFavorite(id));
			else await dispatch(removeRealtyFromFavorite(id));
			setLoading(false);
		};

		return (
			<li className={styles}>
				<AppLink
					onlyARIA
					href={url}
					title={title}
					className={s.realty_wrap}
				/>

				<RealtyItemImages
					realtyURL={url}
					view={view}
					images={images}
					title={title}
				/>

				<div className={styles_info}>
					<p className={s.realty_title}>{title}</p>
					<p className={s.realty_price}>{formattedPrice}</p>
					<div className={s.realty_addressBox}>
						<TiLocation className={s.realty_addressIcon} />
						<address className={s.realty_address}>{address}</address>
					</div>
					<p className={s.realty_description}>{description}</p>
					<time dateTime={formattedTime}>{formattedTime}</time>
				</div>

				{appUser.id !== 0 && isMyRealty && MyRealtyButton}
				{appUser.id !== 0 && !isMyRealty && (
					<AppButton
						resetStyles
						disabled={loading}
						title={favoriteLabel}
						onClick={toggleFavorite}
						className={favoriteButtonStyles}>
						{!isFavorite && <FaRegHeart className={s.realty_favorite_icon} />}

						{isFavorite && (
							<FaHeart
								color='#ff3a3a'
								className={s.realty_favorite_icon}
							/>
						)}
					</AppButton>
				)}
			</li>
		);
	}
);

AppRealty.displayName = 'RealtyItem';
export default AppRealty;
