import { useTranslation } from 'next-i18next';
import Image from 'next/image'
import { AppLink } from '../../../../../components/AppLink/AppLink'
import s from './Profile.module.scss'
import clsx from 'clsx';
import { getAppUser } from '../../../../../store/app/selectors';
import { useAppSelector } from '../../../../../hooks/store';

export const Profile = () => {
    const user = useAppSelector(getAppUser);
    const { t } = useTranslation("header");

    const title = t("header_user_profile.profile.title");
    const styles = clsx(s.header_profile, "active--scale", "transparent");
    const src = user?.avatar || "";

    return (
        <AppLink
            href="/me"
            title={title}
            onlyARIA
            className={styles}>
            <Image
                priority
                width="45"
                height="45"
                alt={title}
                draggable='false'
                className={s.header_profile_image}
                src={src} />
        </AppLink>
    )
}
