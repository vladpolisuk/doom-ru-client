import clsx from 'clsx';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import AppButton from '../../components/AppButton/AppButton';
import { useTranslation } from '../../hooks/useTranslation';
import { Locale } from '../../store/app/types';
import s from './PageError.module.scss';

interface Props {
	statusCode: number;
}

const PageError: FC<Props> = ({ statusCode }) => {
	const error = useTranslation('error');
	const router = useRouter();
	const locale = router.asPath.split('/')[1] as Locale;

	useEffect(() => {
		router.prefetch(`/${locale}`);
	}, [locale, router]);

	const handleHome = () => router.push(`/${locale}`);

	const styles = clsx(s.error_container, 'container');
	const btnStyles = clsx('transition', 'active--scale');
	const description = error.error_404.label;
	const btnTitle = error.error_btn.title;
	const btnLabel = error.error_btn.label;

	return (
		<main className={s.error}>
			<h1 className={s.error_code}>{statusCode}</h1>
			<div className={styles}>
				<p className={s.error_description}>{description}</p>
				<AppButton
					title={btnLabel}
					className={btnStyles}
					onClick={handleHome}
					color='transparent'>
					{btnTitle}
				</AppButton>
			</div>
		</main>
	);
};

export default PageError;
