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
	 * Specify what's should be show before rendering component
	 */
	Skeleton?: JSX.Element;
	/**
	 * Specify that some attributes should be added like aria-*
	 */
	onlyARIA?: boolean;
}

/** ## HTML Element Event
 * The common type of html events
 */
export type HTMLElementEvent<T extends HTMLElement> = Event & {
	/**
	 * Event target
	 */
	target: T;
};
