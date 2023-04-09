import { FC, memo } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { BaseAppComponent } from '../../types/components';
import resetStylesOrMerge from '../../utils/ui/resetStylesOrMerge';
import s from './AppSkipLink.module.scss';

type IAppSkipLink = BaseAppComponent<HTMLAnchorElement>;

/** ## App Skip Link (for main)
 * The common skip link component in the application
 * @returns `html:anchor`
 */
const AppSkipLink: FC<IAppSkipLink> = memo(({ className = s.app_skipLink, resetStyles = false }) => {
	const common = useTranslation('common');
	const text = common.skip_link;

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
