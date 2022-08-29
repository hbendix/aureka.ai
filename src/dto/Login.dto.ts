import Joi from 'joi';

export type LoginDTO = {
	email: string;
	password: string;
}

export const loginValidationSchema = Joi.object<LoginDTO>({
	email: Joi.string()
		.email({ tlds: { allow: false } })
		.required()
		.messages({
			'string.base': 'Email must have a value',
			'string.empty': 'Email must have a value',
			'any.required': 'Email must have a value',
			'string.email': 'Must be a valid email address',
		}),
	password: Joi.string()
		.required()
		.messages({
			'string.base': 'Password must have a value',
			'string.empty': 'Password must have a value',
			'any.required': 'Password must have a value',
		}),
});
