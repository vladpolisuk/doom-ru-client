import clsx from 'clsx';
import { BaseHTMLAttributes, Dispatch, FC, memo, SetStateAction } from 'react';
import { FaHistory, FaRegBell, FaRegHeart, FaRegListAlt, FaRegSun, FaRegUserCircle } from 'react-icons/fa';
import { AppLink } from '../../../../components/AppLink/AppLink';
import { LocaleMeAsideTabIcon } from '../../../../types/locales/me';
import { getConcatenatedStylesByCondition } from '../../../../utils/ui/getConcatenatedStylesByCondition';
import s from './AsideTabs.module.scss';

export interface IAsideTabsItem extends BaseHTMLAttributes<HTMLAnchorElement> {
    icon: LocaleMeAsideTabIcon;
    text: string;
    setCurrent: Dispatch<SetStateAction<number>>;
    tabId: number;
    current: number;
};

const tabs: Record<LocaleMeAsideTabIcon, JSX.Element> = {
    FaRegUserCircle: <FaRegUserCircle className={s.me_aside_tabs_item_icon} />,
    FaRegBell: <FaRegBell className={s.me_aside_tabs_item_icon} />,
    FaRegHeart: <FaRegHeart className={s.me_aside_tabs_item_icon} />,
    FaRegSun: <FaRegSun className={s.me_aside_tabs_item_icon} />,
    FaHistory: <FaHistory className={s.me_aside_tabs_item_icon} />,
    FaRegListAlt: <FaRegListAlt className={s.me_aside_tabs_item_icon} />,
}

export const AsideTabsItem: FC<IAsideTabsItem> = memo(({
    href,
    title,
    text,
    icon,
    current,
    setCurrent,
    tabId,
    ...props
}) => {
    const component = tabs[icon];
    const isActive = current === tabId;

    const click = () => setCurrent(tabId);

    const styles = getConcatenatedStylesByCondition(
        !isActive,
        clsx(s.me_aside_tabs_link, "active--scale", "transition"),
        s["me_aside_tabs_link--active"]
    )

    return (
        <li className={s.me_aside_tabs_item}>
            <AppLink
                onlyARIA
                resetStyles
                className={styles}
                aria-label={title}
                title={title}
                href={href}
                onClick={click}
                {...props}>
                {component}
                <p className={s.me_aside_tabs_item_text}>
                    {text}
                </p>
            </AppLink>
        </li>
    )
})

AsideTabsItem.displayName = "AsideTabsItem";