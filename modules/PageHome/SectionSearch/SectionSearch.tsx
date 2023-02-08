import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { FC } from 'react';
import { AppLocationBadge } from '../../../components/AppLocationBadge/AppLocationBadge';
import { AppSkeleton } from '../../../components/AppSkeleton/AppSkeleton';
import wallpaper from '../../../public/assets/home_wallpaper.webp';
import { SearchBar } from './SearchBar/SearchBar';
import s from './SectionSearch.module.scss';

export const SectionSearch: FC = () => {
	const { t } = useTranslation('home');

	const text = t('home_section_search.section_title');
	const skeleton = <AppSkeleton className={s['home_sectionSearch_locationBadge--skeleton']} />;

	return (
		<section
			id='search'
			className={s.home_sectionSearch}>
			<div className={s.home_sectionSearch_wallpaper}>
				<Image
					fill
					quality={100}
					src={wallpaper}
					alt='wallpaper'
					placeholder='blur'
					className={s.home_sectionSearch_wallpaper_image}
				/>
			</div>

			<div className={clsx(s.home_sectionSearch_content, 'container')}>
				<AppLocationBadge
					Skeleton={skeleton}
					className={s.home_sectionSearch_locationBadge}
				/>

				<h1 className={s.home_sectionSearch_title}>{text}</h1>

				<SearchBar />
			</div>
		</section>
	);
};
