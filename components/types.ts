import { BaseHTMLAttributes } from 'react';

/** ## Base App Component
 * The common type of common components
 */
export interface BaseAppComponent<T> extends BaseHTMLAttributes<T> {
	/**
	 * Specify that styles should be resets or not
	 */
	resetStyles?: boolean;
	/**
	 * Specify that some attributes should be added like aria-*
	 */
	onlyARIA?: boolean;
}
