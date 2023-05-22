import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AppUpdateUser } from '../../../api/user/types';
import AppAvatarInput from '../../../components/AppAvatarInput/AppAvatarInput';
import { useTranslation } from '../../../hooks/useTranslation';
import { setAppUser } from '../../../store/app/actions';
import { appUpdateUser } from '../../../store/app/requests';
import { AppUser, Locale } from '../../../store/app/types';
import checkObjectsEquals from '../../../utils/checkObjectsEquals';
import removeProperty from '../../../utils/removeProperty';
import s from './PageMeProfile.module.scss';
import { ProfileForm } from './ProfileForm/ProfileForm';

interface Props {
	user: AppUser;
}

export interface Fields {
	name: string;
	secondName: string;
	email: string;
	phone?: string;
	bio?: string;
	city?: string;
}

const PageMeProfile: FC<Props> = ({ user }) => {
	const t = useTranslation('me');
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [file, setFile] = useState<Buffer>();
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const form = useForm<Fields>({
		defaultValues: {
			email: user.email,
			name: user.name,
			secondName: user.secondName,
			phone: user.phone,
			city: user.city,
			bio: user.bio
		}
	});

	const submit = async (fields: Fields) => {
		const isEqual = checkObjectsEquals(user, { ...user, ...fields });
		if (!file && isEqual) return;

		setLoading(true);
		const locale = router.query.lang as Locale;
		const newUserData: AppUpdateUser = {
			...removeProperty(user, 'isActivated'),
			...fields,
			avatar: file
		};
		const response = await appUpdateUser(newUserData, locale);
		setLoading(false);

		if (!response.success) {
			setSuccess('');
			setError(response.message);
		} else {
			setError('');
			setSuccess(response.message);
			setAppUser(response.data);
		}

		if (fields.email !== user.email) user.isActivated = false;
	};

	let base64Image = `data:image/jpeg;base64,${file?.toString('base64')}`;
	const profileInfoTitle = t.me_profile.title;

	return (
		<main className={s.me_profile}>
			<h3 className={s.me_profile_title}>{profileInfoTitle}</h3>

			<div className={s.me_profile_data}>
				<AppAvatarInput
					width={150}
					height={150}
					disabled={loading}
					className={s.me_profile_avatar}
					src={file ? base64Image : user.avatar}
					setFile={setFile}
					file={file}
				/>

				<ProfileForm
					isActivated={user.isActivated}
					loading={loading}
					submit={submit}
					form={form}
					success={success}
					error={error}
				/>
			</div>
		</main>
	);
};

export default PageMeProfile;
