import { useTranslation } from 'next-i18next';
import React from 'react'
import { AppLink } from '../../../components/AppLink/AppLink';
import { LinksBoard } from './LinksBoard/LinksBoard';
import s from './SectionQuickLinks.module.scss';

type QuickLinks = {
    title: string;
    content: {
        links: [{
            title: string;
            text: string;
            url: string
        }]
    },
    image: {
        src: string;
        alt: string;
    };
}

export const SectionQuickLinks = () => {
    const { t } = useTranslation("home");

    const t_title = t("home_section_quickLinks.section_title");
    const t_quickLinks = t("home_section_quickLinks.links_board", { returnObjects: true }) as QuickLinks[];

    return (
        <section
            id="section-quickLinks"
            className={s.section_quickLinks}>
            <div className={`${s.section_quickLinks_ctr} container`}>
                <h2>{t_title}</h2>

                <LinksBoard>
                    {t_quickLinks.map(({ title, content, image }) => (
                        <LinksBoard.Item key={title}>
                            {content && content.links || image
                                ? <LinksBoard.ItemContent title={title}>
                                    {content.links.map(({ title, text, url }) => (
                                        <AppLink
                                            key={text}
                                            className={`${s.section_quickLinks_link} underline`}
                                            aria-label={title}
                                            href={url}
                                            title={title}>
                                            {text}
                                        </AppLink>
                                    ))}
                                </LinksBoard.ItemContent>
                                : <LinksBoard.ItemContent>
                                    {title}
                                </LinksBoard.ItemContent>
                            }

                            {image
                                ? <LinksBoard.ItemImage
                                    alt={image.alt}
                                    src={image.src} />
                                : ""}
                        </LinksBoard.Item>
                    ))}
                </LinksBoard>
            </div>
        </section>
    )
}
