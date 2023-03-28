import clsx from 'clsx';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import AppLink from '../../components/AppLink/AppLink';
import { useTranslation } from '../../hooks/useTranslation';
import locales from '../../locales';
import s from './AppFooter.module.scss';
import AppFooterBottom from './AppFooterBottom';

const AppFooter = () => {
	const footer = useTranslation('footer') as typeof locales.en.footer;

	const github = footer.links.github;
	const title = footer.title;
	const disclaimer = footer.disclaimer;
	const styles = clsx(s.footer_container, 'container');
	const linksStyles = clsx(s.footer_links, 'unlisted');

	return (
		<footer className={s.footer}>
			<div className={styles}>
				<noindex
					className={s.footer_title}
					dangerouslySetInnerHTML={{ __html: title }}></noindex>

				<hr className={s.footer_hr} />

				<div className={s.footer_desc}>
					<noindex
						className={s.footer_disclaimer}
						dangerouslySetInnerHTML={{ __html: disclaimer }}></noindex>

					<ul className={linksStyles}>
						<li className={s.footer_links_item}>
							<AppLink
								resetHref
								className={s.footer_link}
								title={github.title}
								href={github.url}>
								<BsGithub className={s.footer_links_item_image} />
							</AppLink>
						</li>

						<li className={s.footer_links_item}>
							<AppLink
								resetHref
								className={s.footer_link}
								title={github.title}
								href={github.url}>
								<BsLinkedin className={s.footer_links_item_image} />
							</AppLink>
						</li>
					</ul>
				</div>
			</div>

			<AppFooterBottom />
		</footer>
	);
};

export default AppFooter;
