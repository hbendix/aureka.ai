import { HttpStatus } from 'API';

export interface BaseError extends Error {
	code?: HttpStatus;
	message: string;
}
