import { IUser } from './IUser';

export function loginUser(user: IUser): Promise<IUser> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (user.email === '') {
				reject(new Error('Email is required'));
			}
		}, 1000);
	});
}
