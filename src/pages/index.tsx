import {
	Box,
	Container,
	Flex, Heading, Stack, useColorModeValue,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import * as React from 'react';

import { Login } from 'Components';

const Home: NextPage = (): JSX.Element => (
	<Flex
		minH="100vh"
		overflowX="hidden"
		align="center"
		justify="center"
		bg={useColorModeValue('gray.50', 'gray.800')}
	>
		<Container>
			<Stack spacing={8} mx="auto" maxW="lg" py={12} px={{ base: 0, sm: 6 }}>
				<Stack align="center">
					<Heading
						style={{ textAlign: 'center' }}
						fontSize="4xl"
					>
						Login
						{' '}
						✌️
					</Heading>
				</Stack>
				<Box
					rounded="lg"
					bg={useColorModeValue('white', 'gray.700')}
					boxShadow="lg"
					p={{ base: 4, sm: 8 }}
				>
					<Stack spacing={4}>
						<Login />
					</Stack>
				</Box>
			</Stack>
		</Container>
	</Flex>
);

export default Home;
