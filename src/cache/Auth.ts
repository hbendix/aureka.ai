import { LoginDTO } from 'DTO';

const key = 'userAuth' as const;

export function setUserAuth(payload: LoginDTO): void {
	if (typeof window !== 'undefined') {
		localStorage.setItem(key, JSON.stringify(payload));
	}
}

export function getUserAuth(): LoginDTO | undefined {
	if (typeof window !== 'undefined') {
		const payload = localStorage.getItem(key);
		return JSON.parse(payload);
	}

	return undefined;
}

export function removeUserAuth(): void {
	if (typeof window !== 'undefined') {
		localStorage.removeItem(key);
	}
}
