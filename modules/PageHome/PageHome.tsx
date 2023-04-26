import { useRouter } from 'next/router';
import { useEffect } from 'react';
import s from './PageHome.module.scss';
import { SectionQuickLinks } from './SectionQuickLinks/SectionQuickLinks';
import { SectionSearch } from './SectionSearch/SectionSearch';

export const PageHome = () => {
	const router = useRouter();

	useEffect(() => {
		router.prefetch(`/${router.query.lang}/rent`);
	}, [router]);

	return (
		<div className={s.home}>
			<SectionSearch />
			<SectionQuickLinks />
		</div>
	);
};
