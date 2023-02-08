import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { AppLink } from '../../../components/AppLink/AppLink';
import { LocaleHome, LocaleHomeLinksBoard } from '../../../types/locales/home';
import { LinksBoard } from './LinksBoard/LinksBoard';
import s from './SectionQuickLinks.module.scss';

export const SectionQuickLinks = () => {
	const { t } = useTranslation('home');

	const quickLinks: LocaleHomeLinksBoard[] = t('home_section_quickLinks.links_board', {
		returnObjects: true
	});

	const components = quickLinks.map(({ title, content, image }) => {
		const styles = clsx(s.section_quickLinks_link, 'underline');

		const componentContent =
			(content && content.links) || image ? (
				<LinksBoard.ItemContent title={title}>
					{content.links?.map(({ title, text, url }) => (
						<AppLink
							key={text}
							href={url}
							className={styles}
							aria-label={title}
							title={title}>
							{text}
						</AppLink>
					))}
				</LinksBoard.ItemContent>
			) : (
				<LinksBoard.ItemContent>{title}</LinksBoard.ItemContent>
			);

		const componentImage = image ? (
			<LinksBoard.ItemImage
				alt={image.alt}
				src={image.src}
			/>
		) : null;

		return (
			<LinksBoard.Item key={title}>
				{componentContent}
				{componentImage}
			</LinksBoard.Item>
		);
	});

	const title: LocaleHome['home_title'] = t('home_section_quickLinks.section_title');
	const styles = clsx(s.section_quickLinks_container, 'container');

	return (
		<section
			id='quickLinks'
			className={s.section_quickLinks}>
			<div className={styles}>
				<h2>{title}</h2>

				<LinksBoard>{components}</LinksBoard>
			</div>
		</section>
	);
};
