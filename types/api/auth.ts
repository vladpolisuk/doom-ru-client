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

export abstract class IAuthAPI {
	/** ## Sign In
	 * The function that provides sign in method
	 */
	abstract signIn(data: SendSignInFields): Promise<Response>;

	/** ## Me
	 * The function that provides me method
	 */
	abstract me(jwt: string): Promise<Response>;

	/** ## Verify
	 * The function that provides verify method
	 */
	abstract verify(data: SendVerifyFields): Promise<Response>;

	/** ## Sign Up
	 * The function that provides sign up method with code
	 */
	abstract signUp(data: SendSignUpFields): Promise<Response>;
}
