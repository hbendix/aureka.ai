import {
	Box,
	Flex,
	HStack,
	Container, Heading, Stack, useColorModeValue,
	useColorMode, Button, Icon,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FiMoon, FiSun } from 'react-icons/fi';

import { getProject } from 'Utilities';

export const Nav: React.FC = (): JSX.Element => {
	const { colorMode, toggleColorMode } = useColorMode();
	const { name } = getProject();
	return (
		<Box
			bg={useColorModeValue('white', 'gray.800')}
			px={4}
			zIndex={100}
			width="100%"
		>
			<Container p={2} py={2}>
				<Flex h={16} alignItems="center" justifyContent="space-between">
					<HStack spacing={8} alignItems="center">
						<Link href="/" passHref>
							<a>
								<Heading>
									{name}
								</Heading>
							</a>
						</Link>
					</HStack>
					<Stack spacing={6} as={Flex} alignItems="center" direction="row">
						<Button onClick={toggleColorMode} variant="ghost">
							{colorMode === 'light'
								? <Icon as={FiMoon} color="base.700" />
								: <Icon as={FiSun} />}
						</Button>
					</Stack>
				</Flex>
			</Container>
		</Box>
	);
};
