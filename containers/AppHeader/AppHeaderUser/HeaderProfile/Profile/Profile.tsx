import { useTranslation } from 'next-i18next';
import Image from 'next/image'
import { AppLink } from '../../../../../components/AppLink/AppLink'
import s from './Profile.module.scss'
import clsx from 'clsx';

export const Profile = () => {
    const { t } = useTranslation("header");

    const title = t("header_user_profile.profile.title");
    const styles = clsx(s.header_profile, "active--scale", "transparent");

    return (
        <AppLink
            href="/me"
            title={title}
            className={styles}>
            <Image
                priority
                width="45"
                height="45"
                alt={title}
                draggable='false'
                className={s.header_profile_image}
                src="https://lh3.googleusercontent.com/a/ALm5wu3vk30A3Lu2ZOEvl7GWqZvP98Q1ABFBUWJKAawYmA=s360-p-rw-no" />
        </AppLink>
    )
}
