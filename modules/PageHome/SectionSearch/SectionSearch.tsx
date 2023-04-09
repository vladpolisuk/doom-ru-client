import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';
import AppLocationBadge from '../../../components/AppLocationBadge/AppLocationBadge';
import AppSkeleton from '../../../components/AppSkeleton/AppSkeleton';
import { useTranslation } from '../../../hooks/useTranslation';
import wallpaper from '../../../public/assets/home_wallpaper.webp';
import { SearchBar } from './SearchBar/SearchBar';
import s from './SectionSearch.module.scss';

export const SectionSearch: FC = () => {
	const home = useTranslation('home');
	const title = home.home_section_search.section_title;

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

			<main
				id='main'
				className={clsx(s.home_sectionSearch_content, 'container')}>
				<AppLocationBadge
					Skeleton={<AppSkeleton className={s.home_sectionSearch_locationBadgeSkeleton} />}
					className={s.home_sectionSearch_locationBadge}
				/>

				<h1 className={s.home_sectionSearch_title}>{title}</h1>

				<SearchBar />
			</main>
		</section>
	);
};
