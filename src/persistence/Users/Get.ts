import { IUser } from 'Domain';

export function getUser(id: number): Promise<IUser> {
	return new Promise((resolve, reject) => {
		const user: IUser = {
			id,
			email: '',
			password: '',
			createdAt: '',
			updatedAt: '',
		};
		setTimeout(() => {
			if (user.email === '') {
				reject(new Error('Email is required'));
			}
			resolve(user);
		}, 1000);
	});
}
