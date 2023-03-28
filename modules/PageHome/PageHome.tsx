import s from './PageHome.module.scss';
import { SectionQuickLinks } from './SectionQuickLinks/SectionQuickLinks';
import { SectionSearch } from './SectionSearch/SectionSearch';

export const PageHome = () => {
	return (
		<div className={s.home}>
			<SectionSearch />
			<SectionQuickLinks />
		</div>
	);
};
