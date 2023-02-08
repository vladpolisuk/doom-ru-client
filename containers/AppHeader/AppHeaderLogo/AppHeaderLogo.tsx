import { useTranslation } from 'next-i18next';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AppLink } from '../../../components/AppLink/AppLink';
import s from './AppHeaderLogo.module.scss';

export const AppHeaderLogo = () => {
	const { t } = useTranslation('header');
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, [resolvedTheme]);

	if (!mounted) return null;

	const src = `/assets/logo_${resolvedTheme}.svg`;
	const title = t('header_logo_link_label');
	const name = t('logo_name');

	return (
		<AppLink
			href='/'
			onlyARIA
			className={s.header_logoLink}
			title={title}>
			<Image
				priority
				src={src}
				width='132'
				height='42'
				alt={name}
				className={s.header_logoLink_image}
			/>
		</AppLink>
	);
};
