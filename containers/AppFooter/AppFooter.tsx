import clsx from 'clsx';
import { useRouter } from 'next/router';
import { BsGithub } from 'react-icons/bs';
import AppLink from '../../components/AppLink/AppLink';
import { useTranslation } from '../../hooks/useTranslation';
import s from './AppFooter.module.scss';
import AppFooterBottom from './AppFooterBottom';

const AppFooter = () => {
	const router = useRouter();
	const footer = useTranslation('footer');

	const github = footer.links.github;
	const link = `${String(process.env.NEXT_PUBLIC_HOST)}/${router.query.lang}/legal`;
	const title = footer.title.replaceAll('{{link}}', link);
	const disclaimer = footer.disclaimer.replaceAll('{{author}}', 'https://github.com/vladpolisuk');
	const styles = clsx(s.footer_container, 'container');
	const linksStyles = clsx(s.footer_links, 'unlisted');

	return (
		<footer className={s.footer}>
			<div className={styles}>
				<noindex
					dangerouslySetInnerHTML={{ __html: title }}
					className={s.footer_title}></noindex>

				<hr className={s.footer_hr} />

				<div className={s.footer_desc}>
					<noindex
						dangerouslySetInnerHTML={{ __html: disclaimer }}
						className={s.footer_disclaimer}></noindex>

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
					</ul>
				</div>
			</div>

			<AppFooterBottom />
		</footer>
	);
};

export default AppFooter;
