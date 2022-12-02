import { useTranslation } from 'next-i18next';
import { FC, InputHTMLAttributes, memo } from 'react';
import s from './AppInput.module.scss';

interface AppInput extends InputHTMLAttributes<HTMLInputElement> {
    /**
     * Specify the which json file with translation to use
     */
    translation?: string;
    /**
     * Specify that styles should be resets or not
     */
    resetStyles?: boolean;
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
    ...props
}) => {
    const { t } = useTranslation(translation);

    const styles = resetStyles
        ? className
        : `${s['app--input']} ${className}`;

    return (
        <input
            type={type}
            translate="yes"
            title={t(title || "")}
            aria-label={t(title || "")}
            placeholder={t(placeholder || "")}
            className={styles}
            {...props} />
    )
})

AppInput.displayName = "AppInput";