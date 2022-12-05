import { AllHTMLAttributes, BaseHTMLAttributes } from "react";

/**
 * The common type of common components
 */
export interface BaseAppComponent<T> extends BaseHTMLAttributes<T> {
    /**
     * Specify the which json file with translation to use
     */
    translation?: string;
    /**
     * Specify that styles should be resets or not
     */
    resetStyles?: boolean;
};