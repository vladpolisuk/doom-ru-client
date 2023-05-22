import { AppUser } from '../../store/app/types';

export interface AppUpdateUser extends Partial<Omit<AppUser, 'avatar' | 'isActivated'>> {
	avatar?: Buffer | undefined;
}
