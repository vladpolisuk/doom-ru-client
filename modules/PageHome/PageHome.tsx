import s from './PageHome.module.scss';
import { SectionSearch } from './SectionSearch/SectionSearch';
import { SectionQuickLinks } from './SectionQuickLinks/SectionQuickLinks';

export const PageHome = () => {
	return (
		<div className={s.home}>
			<SectionSearch />
			<SectionQuickLinks />
		</div>
	);
};
