import { useTranslation } from 'next-i18next';
import { ButtonHTMLAttributes, FC, memo } from 'react';
import s from './AppButton.module.scss';

interface AppButton extends ButtonHTMLAttributes<HTMLButtonElement> {
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
 * The common button component in the application
 * @type `FC<AppButton>`
 * @memo `true`
 * @return `html:button`
 */
export const AppButton: FC<AppButton> = memo(({
    title,
    className,
    children,
    translation,
    resetStyles,
    ...props
}) => {
    const { t } = useTranslation(translation);

    const styles = resetStyles
        ? className
        : `${s['app--button']} ${className}`;

    return (
        <button
            translate="yes"
            className={styles}
            aria-label={t(title || "")}
            title={t(title || "")}
            {...props}>
            {children}
        </button>
    )
})

AppButton.displayName = "AppButton";