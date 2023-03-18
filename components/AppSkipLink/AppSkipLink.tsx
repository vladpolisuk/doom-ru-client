import { FC, memo } from 'react';
import resetStylesOrMerge from '../../utils/ui/resetStylesOrMerge';
import { BaseAppComponent } from '../../types/components';
import s from './AppSkipLink.module.scss';
import { useTranslation } from 'next-i18next';

type IAppSkipLink = BaseAppComponent<HTMLAnchorElement>;

/** ## App Skip Link (for main)
 * The common skip link component in the application
 * @returns `html:anchor`
 */
const AppSkipLink: FC<IAppSkipLink> = memo(({ className = s.app_skipLink, resetStyles = false }) => {
	const { t } = useTranslation('common');
	const text = t('skip_link');

	const styles = resetStylesOrMerge(resetStyles, className, s.app_skipLink);

	return (
		<a
			href='#main'
			aria-label={text}
			data-testid='app-skip-link'
			className={styles}>
			{text}
		</a>
	);
});

AppSkipLink.displayName = 'AppSkipLink';
export default AppSkipLink;
