import Image from 'next/image';
import { FC, ImgHTMLAttributes, memo } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import resetStylesOrMerge from '../../utils/ui/resetStylesOrMerge';
import { BaseAppComponent } from '../types';
import s from './AppAvatar.module.scss';

export type IAppAvatar = BaseAppComponent<HTMLImageElement> & ImgHTMLAttributes<HTMLImageElement>;

/** ## App Avatar
 * The common avatar component in the application
 * @type `FC<IAppAvatar>`
 * @memo `true`
 * @return `next:image`
 */
const AppAvatar: FC<IAppAvatar> = memo(
	({ resetStyles = false, className = '', width = 45, placeholder = '', height = 45, alt = '', src, ...extra }) => {
		const styles = resetStylesOrMerge(resetStyles, className, s.app_avatar);

		return src ? (
			<Image
				priority
				alt={alt}
				width={width as any}
				height={width as any}
				data-testid='app-avatar'
				placeholder={placeholder as any}
				className={styles}
				draggable='false'
				src={src}
				{...extra}
			/>
		) : (
			<FaUserCircle
				data-testid='app-avatar'
				size={width || height}
				className={styles}
			/>
		);
	}
);

AppAvatar.displayName = 'AppAvatar';
export default AppAvatar;
