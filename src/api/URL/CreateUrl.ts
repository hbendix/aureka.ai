import { createQueryString } from './CreateQueryString';

export type CreateUrl = (template: string, param?: object | undefined) => string;

export const createUrl: CreateUrl = (template, params?: object | undefined) => {
	let url: string = template;
	const queryParams: object = {};
	if (params) {
		Object
			.keys(params)
			.filter(key => params[key] !== undefined && params[key] !== null)
			.forEach(key => {
				const paramPlaceHolder: string = `${key}`;

				if (template.indexOf(paramPlaceHolder) > -1) {
					url = url.replace(paramPlaceHolder, params[key]);
				} else {
					queryParams[key] = params[key];
				}
			});
	}

	url = url.replace(/\/{.*}/, '');
	const queryString: string = createQueryString(queryParams);
	return `${encodeURI(url)}${queryString && `?${queryString}`}`;
};
