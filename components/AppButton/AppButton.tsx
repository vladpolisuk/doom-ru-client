import { FC, memo } from 'react';
import { getConcatenatedStylesByCondition } from '../../utils/ui/getConcatenatedStylesByCondition';
import { BaseAppComponent } from '../types';
import s from './AppButton.module.scss';

type AppButton = BaseAppComponent<HTMLButtonElement>;

/**
 * The common button component in the application
 * @type `FC<AppButton>`
 * @memo `true`
 * @return `html:button`
 */
export const AppButton: FC<AppButton> = memo(({
    title,
    children,
    className = s.app_button,
    resetStyles = false,
    ...props
}) => {
    const styles = getConcatenatedStylesByCondition(
        resetStyles,
        className,
        s.app_button
    );

    return (
        <button
            className={styles}
            aria-label={title}
            title={title}
            {...props}>
            {children}
        </button>
    )
})

AppButton.displayName = "AppButton";