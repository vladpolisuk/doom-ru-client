import { useTranslation } from 'next-i18next';
import Image from 'next/image'
import { AppLink } from '../../../../../components/AppLink/AppLink'
import s from './Profile.module.scss'

export const Profile = () => {
    const { t } = useTranslation("header");

    return (
        <AppLink
            href="/me"
            translation='header'
            title="header_user_profile.profile.title"
            className={`${s.profile} active_scale transparent`}>
            <Image
                priority
                width="45"
                height="45"
                draggable='false'
                className={s.profile__img}
                alt={t("header_user_profile.profile.title")}
                src="https://lh3.googleusercontent.com/a/ALm5wu3vk30A3Lu2ZOEvl7GWqZvP98Q1ABFBUWJKAawYmA=s360-p-rw-no" />
        </AppLink>
    )
}
