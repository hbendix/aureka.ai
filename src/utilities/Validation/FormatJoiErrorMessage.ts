import type { ValidationErrorItem } from 'joi';

export function formatJoiErrorMessage(details: Array<ValidationErrorItem>): string | undefined {
	if (!details || !Array.isArray(details)) return undefined;
	return details.map(x => x.message).join(', ');
}
