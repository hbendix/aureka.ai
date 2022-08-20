import {
	Button,
	Container,
	Flex, Heading, Stack, Text, useColorModeValue,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

import { getUserAuth, removeUserAuth } from 'Cache';
import { Video } from 'Components';

const Welcome: NextPage = (): JSX.Element => {
	const authUser = getUserAuth();
	const router = useRouter();
	const [username, setUsername] = React.useState('');
	const logout = () => {
		removeUserAuth();
		router.push('/');
	};
	React.useEffect(() => {
		if (!authUser) {
			router.push('/');
		} else {
			// we have to pass the cache to state otherwise we get a hydration error from next.js
			// as server !== client
			setUsername(authUser.email);
		}
	}, []);
	return (
		<Flex
			minH="100vh"
			bg={useColorModeValue('white', 'gray.800')}
			overflowX="hidden"
		>
			<Container>
				<Stack spacing={4}>
					<Heading textAlign="center">
						Welcome
						{' '}
						{username}
					</Heading>
					<Text textAlign="center" fontSize="md">
						Today&apos;s video:
					</Text>
					<Video />
					<Flex justify="center">
						<Button
							colorScheme="danger"
							variant="ghost"
							w="fit-content"
							onClick={logout}
						>
							Logout
						</Button>
					</Flex>
				</Stack>
			</Container>
		</Flex>
	);
};

export default Welcome;
