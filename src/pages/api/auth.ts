import type { NextApiResponse } from 'next';

import { HttpStatus } from 'API';
import type { BaseRequest, LoginDTO } from 'DTO';
import { BaseError, loginValidationSchema, ResponseType } from 'DTO';
import { formatJoiErrorMessage } from 'Utilities';

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
		await delay(750);
		await loginValidationSchema.validateAsync(req.body);
		if (req.body.password !== 'password') {
			throw new Error('Invalid password!');
		}
		if (req.body.email !== 'aureka@example.com') {
			// never acknowledge an email already exists
			throw new Error('Invalid login details!');
		}
		return res.status(HttpStatus.OK).send();
	} catch (err) {
		return res
			.status(HttpStatus.INTERNAL_SERVER_ERROR)
			.json({
				message: err.details
					? formatJoiErrorMessage(err.details) : err.message ?? 'Incorrect login details!',
				code: HttpStatus.INTERNAL_SERVER_ERROR,
			} as BaseError);
	}
}

export default handler;
