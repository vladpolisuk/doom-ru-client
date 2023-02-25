import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import AppLink from '../../components/AppLink/AppLink';
import { useAppSelector } from '../../hooks/store';
import { getAppUser } from '../../store/app/selectors';
import { LocaleFooterGitHub } from '../../types/locales/footer';
import s from './AppFooter.module.scss';
import AppFooterBottom from './AppFooterBottom';

const AppFooter = () => {
	const t_f = useTranslation('footer').t;

	const github: LocaleFooterGitHub = t_f('links.github', { returnObjects: true });
	const title = t_f('title');
	const disclaimer = t_f('disclaimer');
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
