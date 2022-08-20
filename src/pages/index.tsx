import {
	Flex, useColorModeValue,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import * as React from 'react';

import { Nav } from 'Components';

const Home: NextPage = (): JSX.Element => (
	<>
		<Nav />
		<Flex
			minH="100vh"
			bg={useColorModeValue('white', 'gray.800')}
			overflowX="hidden"
		>
			<h1>Hello!</h1>
		</Flex>
	</>
);

export default Home;
