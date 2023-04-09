import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import AppLink from '../../../components/AppLink/AppLink';
import { useTranslation } from '../../../hooks/useTranslation';
import s from './AppHeaderLogo.module.scss';

const AppHeaderLogo = () => {
	const header = useTranslation('header');
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, [resolvedTheme]);

	const src = `/assets/logo_${resolvedTheme}.svg`;
	const title = header.header_logo_link_label;
	const name = header.header_logo_link_label;

	return (
		<AppLink
			href='/'
			onlyARIA
			className={s.header_logoLink}
			title={title}>
			{mounted && (
				<Image
					priority
					src={src}
					width='132'
					height='42'
					alt={name}
					className={s.header_logoLink_image}
				/>
			)}
		</AppLink>
	);
};

export default AppHeaderLogo;
