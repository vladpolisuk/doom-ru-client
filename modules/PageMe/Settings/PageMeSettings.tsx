import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { useForm } from 'react-hook-form';
import AppButton from '../../../components/AppButton/AppButton';
import AppLabel from '../../../components/AppLabel/AppLabel';
import AppSelect from '../../../components/AppSelect/AppSelect';
import { useTranslation } from '../../../hooks/useTranslation';
import { Locale } from '../../../store/app/types';
import { Aside } from '../Aside/Aside';
import s from './PageMeSettings.module.scss';

interface Fields {
	theme: Locale;
}

type Field = keyof Fields;

const PageMeSettings = () => {
	const me = useTranslation('me');
	const { theme, setTheme } = useTheme();
	const styles = clsx(s.me_settings_container, 'container');
	const { register, handleSubmit } = useForm<Fields>({
		defaultValues: {
			theme: theme as Locale
		}
	});

	const submit = async (data: Fields) => {
		setTheme(data.theme);
	};

	const settingsOptionTitle = me.settings.title;
	const settingsOptions = me.settings.form.options;
	const submitBtnStyles = clsx(s.me_content_form_submit, 'transition', 'active--scale');
	const submitBtnTitle = me.settings.form.submit.title;
	const submitBtnLabel = me.settings.form.submit.label;

	return (
		<div className={s.me_settings}>
			<div className={styles}>
				<div className={s.me}>
					<Aside />

					<main className={s.me_content}>
						<h3 className={s.me_title}>{settingsOptionTitle}</h3>

						<form
							className={s.me_content_form}
							onSubmit={handleSubmit(submit)}>
							{settingsOptions.map(({ name, select, title }) => (
								<AppLabel
									key={name}
									className={s.me_option}>
									<p>{title}</p>
									<AppSelect
										{...register(name as Field)}
										title={select.title}
										className={s['me_option--select']}
										defaultValue={theme}>
										{select.options.map(({ title, value }) => (
											<AppSelect.Option
												value={value}
												key={value}>
												{title}
											</AppSelect.Option>
										))}
									</AppSelect>
								</AppLabel>
							))}

							<AppButton
								title={submitBtnLabel}
								className={submitBtnStyles}
								type='submit'>
								{submitBtnTitle}
							</AppButton>
						</form>
					</main>
				</div>
			</div>
		</div>
	);
};

export default PageMeSettings;
