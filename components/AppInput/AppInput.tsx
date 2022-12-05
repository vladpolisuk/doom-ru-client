import { useTranslation } from 'next-i18next';
import { FC, InputHTMLAttributes, memo } from 'react';
import { BaseAppComponent } from '../types';
import s from './AppInput.module.scss';

type Props = BaseAppComponent<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>;

interface AppInput extends Props {
    /** 
     * Specify an icon to display on the left of input 
     */
    iconLeft?: JSX.Element;
    /**
     * Specify an icon to display on the right of input
     */
    iconRight?: JSX.Element
};

/**
 * The common input component in the application
 * @type `FC<AppInput>`
 * @memo `true`
 * @return `html:input`
 */
export const AppInput: FC<AppInput> = memo(({
    title,
    className,
    children,
    translation,
    resetStyles,
    type,
    placeholder,
    iconLeft,
    iconRight,
    ...props
}) => {
    const { t } = useTranslation(translation);

    const inputStyles = resetStyles
        ? className
        : `${s['app--input']} 
            ${iconLeft ? s["app--input_withIconLeft"] : iconRight ? s["app--input_withIconRight"] : ""} 
            ${className}`;

    return iconLeft ? (
        <div className={s['app--input-label']}>
            <span className={s['app--input-iconLeft']}>
                {iconLeft}
            </span>

            <input
                type={type}
                translate="yes"
                title={t(title || "")}
                aria-label={t(title || "")}
                placeholder={t(placeholder || "")}
                className={inputStyles}
                {...props} />
        </div>
    ) : iconRight ? (
        <div className={s['app--input-label']}>
            <input
                type={type}
                translate="yes"
                title={t(title || "")}
                aria-label={t(title || "")}
                placeholder={t(placeholder || "")}
                className={inputStyles}
                {...props} />

            <span className={s['app--input-iconRight']}>
                {iconRight}
            </span>
        </div>
    ) : (
        <input
            type={type}
            translate="yes"
            title={t(title || "")}
            aria-label={t(title || "")}
            placeholder={t(placeholder || "")}
            className={inputStyles}
            {...props} />
    )
})

AppInput.displayName = "AppInput";