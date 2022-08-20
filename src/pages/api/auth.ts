import type { NextApiResponse } from 'next';

import { HttpStatus } from 'API';
import type { BaseRequest, LoginDTO } from 'DTO';
import { BaseError, ResponseType } from 'DTO';

async function handler(req: BaseRequest<LoginDTO>, res: NextApiResponse<ResponseType>) {
	if (req.method !== 'POST') {
		res.setHeader('Allow', 'POST');
		return res
			.status(HttpStatus.METHOD_NOT_ALLOWED)
			.json({ message: 'Method Not Allowed', code: HttpStatus.METHOD_NOT_ALLOWED } as BaseError);
	}
	try {
		const delay = ms => new Promise(r => {
			setTimeout(r, ms);
		});
		await delay(1000);
		if (req.body.password !== 'password') {
			throw new Error('Invalid password!');
		}
		if (req.body.email !== 'aureka@example.com') {
			throw new Error('Invalid login details!');
		}
		return res.status(HttpStatus.OK).send();
	} catch (err) {
		return res
			.status(HttpStatus.INTERNAL_SERVER_ERROR)
			.json({
				message: err.message ?? 'Incorrect login details!',
				code: HttpStatus.INTERNAL_SERVER_ERROR,
			} as BaseError);
	}
}

export default handler;
