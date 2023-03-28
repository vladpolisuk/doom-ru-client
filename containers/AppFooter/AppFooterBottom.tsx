import { useTranslation } from '../../hooks/useTranslation';
import locales from '../../locales';
import s from './AppFooter.module.scss';

const AppFooterBottom = () => {
	const common = useTranslation('common') as typeof locales.en.common;
	const author = common.site_author;
	const currentYear = new Date().getFullYear().toString();

	return (
		<div className={s.footer_bottom}>
			<p className={s.footer_bottom_text}>
				{author},&nbsp;
				<time dateTime={currentYear}>{currentYear}</time>
			</p>
		</div>
	);
};

export default AppFooterBottom;
