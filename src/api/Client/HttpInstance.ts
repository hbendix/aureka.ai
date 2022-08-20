import Axios, { AxiosInstance } from 'axios';

import { defaultHeaders } from './Headers';

export const axios: AxiosInstance = Axios.create({
	headers: {
		...defaultHeaders,
	},
});
