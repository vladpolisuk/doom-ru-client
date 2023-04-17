import clsx from 'clsx';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { FaClock, FaHeart, FaPhone, FaRegHeart } from 'react-icons/fa';
import { TiLocation } from 'react-icons/ti';
import AppButton from '../../../components/AppButton/AppButton';
import AppModal from '../../../components/AppModal/AppModal';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { useTranslation } from '../../../hooks/useTranslation';
import { setAppSignInView } from '../../../store/app/actions';
import { getAppUser } from '../../../store/app/selectors';
import { Locale } from '../../../store/app/types';
import { setRealtyFavoritesLoading } from '../../../store/realty/actions';
import { addRealtyToFavorite, removeRealtyFromFavorite } from '../../../store/realty/requests';
import {
	getRealty,
	getRealtyAuthor,
	getRealtyFavoritesLoading,
	getRealtyLoading
} from '../../../store/realty/selectors';
import formatCreatedAt from '../../../utils/ui/formatCreatedAt';
import { formatDate } from '../../../utils/ui/formatDate';
import { formatPhone } from '../../../utils/ui/formatPhone';
import formatPrice from '../../../utils/ui/formatPrice';
import s from './RealtyInfo.module.scss';
import { RealtyInfoSkeleton } from './RealtyInfoSkeleton';

export const RealtyInfo = () => {
	const dispatch = useAppDispatch();
	const realtyTranslation = useTranslation('realty');
	const router = useRouter();
	const realty = useAppSelector(getRealty);
	const user = useAppSelector(getAppUser);
	const realtyAuthor = useAppSelector(getRealtyAuthor);
	const loading = useAppSelector(getRealtyLoading);
	const favoritesLoading = useAppSelector(getRealtyFavoritesLoading);
	const [showPhone, setShowPhone] = useState(false);
	const [view, setView] = useState(false);

	const showPhoneTitle = realtyTranslation.realty_info.actions.phone.title;
	const showPhoneLabel = realtyTranslation.realty_info.actions.phone.label;
	const addFavoriteTitle = realtyTranslation.realty_info.actions.add_favorite.title;
	const addFavoriteLabel = realtyTranslation.realty_info.actions.add_favorite.label;
	const removeFavoriteTitle = realtyTranslation.realty_info.actions.remove_favorite.title;
	const removeFavoriteLabel = realtyTranslation.realty_info.actions.remove_favorite.label;
	const signInRequestTitle = realtyTranslation.realty_info.actions.signIn.title;
	const signInRequestLabel = realtyTranslation.realty_info.actions.signIn.label;
	const signInRequestBtnTitle = realtyTranslation.realty_info.actions.signIn.btn.title;
	const signInRequestBtnLabel = realtyTranslation.realty_info.actions.signIn.btn.title;

	const locale = router.query.lang as Locale;
	const date = realty.createdAt && formatDate(realty.createdAt, locale);
	const relativeDate = realty.createdAt && formatCreatedAt(realty.createdAt, locale);
	const price = realty.price && formatPrice(realty.price, realty.currency, realty.term, locale);
	const actionStyles = clsx(s.realty_action, 'active--scale', 'transition');
	const isFavorite = realty.id && user?.favorites && user?.favorites.includes(realty.id);
	const favoriteLabel = isFavorite ? removeFavoriteLabel : addFavoriteLabel;
	const authorPhone = formatPhone(String(realtyAuthor?.phone));

	const addToFavorite = async () => {
		if (!locale) return;
		if (!realty.id) return;
		dispatch(setRealtyFavoritesLoading(true));
		if (!isFavorite) await dispatch(addRealtyToFavorite(realty.id));
		else await dispatch(removeRealtyFromFavorite(realty.id));
		dispatch(setRealtyFavoritesLoading(false));
	};

	const handleCloseModal = () => setView(false);
	const handleOpenModal = () => setView(true);

	const handleSignIn = () => {
		handleCloseModal();
		dispatch(setAppSignInView(true));
	};

	const handleShowPhone = () => {
		if (!user) return handleOpenModal();
		setShowPhone(!showPhone);
		if (!showPhone) window.navigator.clipboard.writeText(String(user?.phone));
	};

	return (
		<div className={s.realty_info}>
			{loading && <RealtyInfoSkeleton />}

			{!loading && (
				<Fragment>
					<div className={s.realty_infoBase}>
						<p className={s.realty_price}>{price}</p>
						<div className={s.realty_addressBox}>
							<TiLocation className={s.realty_addressIcon} />
							<p className={s.realty_address}>{realty.address}</p>
						</div>
						<p className={s.realty_description}>{realty.description}</p>
						<div className={s.realty_dateBox}>
							<FaClock />
							<time className={s.realty_date}>
								{date} ({relativeDate})
							</time>
						</div>
					</div>

					<div className={s.realty_infoActions}>
						<AppButton
							onClick={handleShowPhone}
							className={actionStyles}
							title={showPhoneLabel}>
							{!showPhone && showPhoneTitle}
							{showPhone && authorPhone}
							<FaPhone />
						</AppButton>

						<AppButton
							disabled={favoritesLoading}
							loading={favoritesLoading}
							onClick={addToFavorite}
							color='transparent'
							className={actionStyles}
							title={favoriteLabel}>
							{!isFavorite && addFavoriteTitle}
							{!isFavorite && <FaRegHeart />}
							{isFavorite && removeFavoriteTitle}
							{isFavorite && <FaHeart />}
						</AppButton>
					</div>
				</Fragment>
			)}

			<AppModal
				view={view}
				setView={setView}>
				<AppModal.Header>
					<h2>{signInRequestTitle}</h2>
				</AppModal.Header>

				<AppModal.Content>
					<p>{signInRequestLabel}</p>
				</AppModal.Content>

				<AppModal.Footer>
					<AppButton
						title={signInRequestBtnLabel}
						onClick={handleSignIn}>
						{signInRequestBtnTitle}
					</AppButton>
				</AppModal.Footer>

				<AppModal.Close onClick={handleCloseModal} />
			</AppModal>
		</div>
	);
};
