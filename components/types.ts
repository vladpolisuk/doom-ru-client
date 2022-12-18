import { BaseHTMLAttributes } from "react";

/**
 * The common type of common components
 */
export interface BaseAppComponent<T> extends BaseHTMLAttributes<T> {
    /**
     * Specify that styles should be resets or not
     */
    resetStyles?: boolean;
};