import { AppUser } from '../../store/app/types';

export type SendVerifyFields = Omit<AppUser, 'id'> & {
	password: string;
};

export interface SendSignInFields {
	email: string;
	password: string;
	remember?: string;
}

export interface SendSignUpFields extends SendVerifyFields {
	code: number;
}
