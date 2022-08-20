import { NextApiRequest } from 'next';

import { BaseError } from './BaseError';

export interface BaseRequest<T = void> extends NextApiRequest {
	body: T;
}
export interface BaseRequestGet<T> extends NextApiRequest {
	query: T;
}

export type ResponseType<T = void> = T | string | void | BaseError;
