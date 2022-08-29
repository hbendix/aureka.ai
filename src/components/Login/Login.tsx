import {
	FormErrorMessage,
	FormLabel,
	FormControl,
	Input,
	Button, Stack, useToast,
} from '@chakra-ui/react';
import { joiResolver } from '@hookform/resolvers/joi';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { postFactory } from 'API';
import { setUserAuth } from 'Cache';
import { LoginDTO, loginValidationSchema } from 'DTO';

export const Login: React.FC = (): JSX.Element => {
	const toast = useToast();
	const router = useRouter();
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm<LoginDTO>({
		resolver: joiResolver(loginValidationSchema),
	});

	const onSubmit = async (values: LoginDTO) => {
		try {
			await postFactory('/api/auth', values);
			setUserAuth(values);
			router.push('/welcome');
		} catch (e) {
			toast({
				title: 'Error logging you in.',
				description: e.message ?? 'Please try again later',
				status: 'error',
				duration: 3000,
				isClosable: true,
			});
		}
	};

	return (
		<Stack
			as="form"
			onSubmit={handleSubmit(onSubmit)}
			spacing={6}
		>
			<FormControl isInvalid={!!errors.email}>
				<FormLabel htmlFor="email">Email</FormLabel>
				<Input
					id="email"
					type="email"
					placeholder="example@email.com"
					{...register('email')}
				/>
				<FormErrorMessage>
					{errors.email && errors.email.message}
				</FormErrorMessage>
			</FormControl>
			<FormControl isInvalid={!!errors.password}>
				<FormLabel htmlFor="password">Password</FormLabel>
				<Input
					id="password"
					type="password"
					{...register('password')}
				/>
				<FormErrorMessage>
					{errors.password && errors.password.message}
				</FormErrorMessage>
			</FormControl>
			<Button
				mt={4}
				colorScheme="primary"
				isLoading={isSubmitting}
				type="submit"
				w="fit-content"
			>
				Submit
			</Button>
		</Stack>
	);
};
