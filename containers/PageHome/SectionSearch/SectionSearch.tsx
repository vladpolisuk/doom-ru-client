import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { FC } from 'react';
import { AppLocationBadge } from '../../../components/AppLocationBadge/AppLocationBadge';
import { AppSkeleton } from '../../../components/AppSkeleton/AppSkeleton';
import { useAppSelector } from '../../../hooks/useSelector';
import { getAppLocation } from '../../../store/app/selectors';
import { SearchBar } from './SearchBar/SearchBar';
import s from './SectionSearch.module.scss';
import wallpaper from '../../../public/assets/home_wallpaper.webp';

export const SectionSearch: FC = () => {
    const location = useAppSelector(getAppLocation);
    const { t } = useTranslation("home");

    return (
        <section
            id="section-search"
            className={s.section_search}>
            <div className={s.section_search_wallpaper}>
                <Image
                    fill
                    quality={100}
                    alt="wallpaper"
                    placeholder="blur"
                    src={wallpaper}
                    className={s.section_search_wallpaper_image} />
            </div>

            <div className={s.section_search_content}>
                {location ?
                    <AppLocationBadge
                        location={location}
                        className={s.section_search_locationBadge} />
                    : <AppSkeleton className={s["section_search_locationBadge-skeleton"]} />}

                <h1 className={s["section_search_content--title"]}>
                    {t("home_section_search.section_title")}
                </h1>

                <SearchBar />
            </div>
        </section>
    )
}
