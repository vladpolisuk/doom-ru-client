import Image from 'next/image';
import { FC, ImgHTMLAttributes, memo } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { BaseAppComponent } from '../../types/components';
import resetStylesOrMerge from '../../utils/ui/resetStylesOrMerge';
import s from './AppAvatar.module.scss';

export type Props = BaseAppComponent<HTMLImageElement> & ImgHTMLAttributes<HTMLImageElement>;

/** ## App Avatar
 * The common avatar component in the application
 * @type `FC<AppAvatar>`
 * @memo `true`
 * @return `next:image`
 */
const AppAvatar: FC<Props> = memo(
	({
		resetStyles = false,
		className = '',
		width = 45,
		Skeleton = undefined,
		placeholder = '',
		height = 45,
		alt = '',
		src,
		...extra
	}) => {
		const styles = resetStylesOrMerge(resetStyles, className, s.app_avatar);

		if (Skeleton) return Skeleton;

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
