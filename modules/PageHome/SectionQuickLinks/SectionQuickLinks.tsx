import clsx from 'clsx';
import AppLink from '../../../components/AppLink/AppLink';
import { useTranslation } from '../../../hooks/useTranslation';
import locales from '../../../locales';
import { LinksBoard } from './LinksBoard/LinksBoard';
import s from './SectionQuickLinks.module.scss';

export const SectionQuickLinks = () => {
	const home = useTranslation('home') as typeof locales.en.home;
	const quickLinks = home.home_section_quickLinks.links_board;
	const title = home.home_section_quickLinks.section_title;
	const styles = clsx(s.section_quickLinks_container, 'container');
	const linkStyles = clsx(s.section_quickLinks_link, 'underline');

	return (
		<section
			id='quickLinks'
			className={s.section_quickLinks}>
			<div className={styles}>
				<h2>{title}</h2>

				<LinksBoard>
					{quickLinks.map(({ title, content, image }) => (
						<LinksBoard.Item key={title}>
							{(content && content.links) || image ? (
								<LinksBoard.ItemContent title={title}>
									{content.links?.map(({ title, text, url }) => (
										<AppLink
											key={text}
											href={url}
											className={linkStyles}
											aria-label={title}
											title={title}>
											{text}
										</AppLink>
									))}
								</LinksBoard.ItemContent>
							) : (
								<LinksBoard.ItemContent>{title}</LinksBoard.ItemContent>
							)}

							{image && (
								<LinksBoard.ItemImage
									alt={image.alt}
									src={image.src}
								/>
							)}
						</LinksBoard.Item>
					))}
				</LinksBoard>
			</div>
		</section>
	);
};
