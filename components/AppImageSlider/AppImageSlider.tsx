import clsx from 'clsx';
import Image from 'next/image';
import { CSSProperties, FC, memo, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { animated, useTransition } from 'react-spring';
import { BaseAppComponent } from '../../types/components';
import AppButton from '../AppButton/AppButton';
import s from './AppImageSlider.module.scss';

type Props = BaseAppComponent<HTMLDivElement> & {
	images: { url: string }[];
	imageStyles?: string;
	btnStyles?: string;
	width?: number;
	height?: number;
	withCarousel?: boolean;
};

/** ## App Image Slider
 * The common slider component in the application
 * @type `FC<AppImagesSlider>`
 * @memo `true`
 * @return `html:div`
 */
export const AppImageSlider: FC<Props> = memo(
	({ images, width = 800, height = 400, imageStyles = '', className, btnStyles = '', withCarousel, ...extra }) => {
		const [index, setIndex] = useState(0);
		const [direction, setDirection] = useState<'left' | 'right' | undefined>();

		const onPrevClick = () => {
			if (direction !== undefined) return;
			setDirection('left');
			setIndex(index => (index === 0 ? images.length - 1 : index - 1));
		};

		const onNextClick = () => {
			if (direction !== undefined) return;
			setDirection('right');
			setIndex(index => (index === images.length - 1 ? 0 : index + 1));
		};

		const transitions = useTransition(images[index], {
			from: { transform: `translate3d(${direction === 'left' ? '-' : ''}100%, 0, 0)` },
			enter: { transform: 'translate3d(0%, 0, 0)' },
			leave: { transform: `translate3d(${direction === 'right' ? '-' : ''}100%, 0, 0)` },
			onRest: () => {
				setDirection(undefined);
			}
		});

		const prevStyles = clsx(s.button, s.prev_button, btnStyles, 'active--scale', 'transition');
		const nextStyles = clsx(s.button, s.next_button, btnStyles, 'active--scale', 'transition');
		const carouselStyles = clsx(s.images_carousel, 'unlisted');
		const carouselItemStyles = clsx(s.images_carousel_item, 'transition');
		const styles: CSSProperties = {
			position: 'absolute',
			left: 0,
			top: 0,
			width: '100%',
			height: '100%'
		};

		return (
			<div>
				<div
					data-testid='app-image-slider'
					className={clsx(s.slider_container, className)}
					{...extra}>
					{images.length > 1 && (
						<AppButton
							resetStyles
							data-testid='app-image-slider-prev'
							className={prevStyles}
							onClick={onPrevClick}>
							<FaChevronLeft />
						</AppButton>
					)}

					<div className={clsx(s.images_container)}>
						{direction === undefined ? (
							<Image
								width={width}
								height={height}
								style={styles}
								alt='image'
								quality={100}
								className={imageStyles}
								src={images[index].url}
								data-testid='app-image-slider-image'
							/>
						) : (
							transitions((style, image) => (
								<animated.div
									key={image.url}
									style={{ ...style, ...styles }}>
									<Image
										width={width}
										height={height}
										alt='image'
										quality={100}
										className={imageStyles}
										src={image.url}
									/>
								</animated.div>
							))
						)}
					</div>

					{images.length > 1 && (
						<AppButton
							resetStyles
							data-testid='app-image-slider-next'
							className={nextStyles}
							onClick={onNextClick}>
							<FaChevronRight />
						</AppButton>
					)}
				</div>

				{withCarousel && images.length > 1 && (
					<ul
						data-testid='app-image-slider-carousel'
						className={carouselStyles}>
						{images.map((image, i: number) => (
							<li key={image.url}>
								<AppButton
									onClick={() => setIndex(i)}
									className={carouselItemStyles}
									color='transparent'>
									<Image
										alt='image'
										className={clsx(
											s.images_carousel_image,
											i === index && s.images_carousel_imageActive
										)}
										src={image.url}
										width={80}
										height={80}
									/>
								</AppButton>
							</li>
						))}
					</ul>
				)}
			</div>
		);
	}
);

AppImageSlider.displayName = 'AppImagesSlider';
