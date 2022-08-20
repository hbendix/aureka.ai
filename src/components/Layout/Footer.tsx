import {
	Box,
	Container,
	Link,
	Stack,
	Heading, useColorModeValue,
} from '@chakra-ui/react';

export const Footer: React.FC = (): JSX.Element => (
	<Box
		bg={useColorModeValue('white', 'gray.800')}
		color={useColorModeValue('gray.800', 'white')}
	>
		<Container
			as={Stack}
			maxW="6xl"
			py={4}
			spacing={4}
			justify="center"
			align="center"
		>
			<Heading
				style={{ color: 'var(--chakra-colors-primary-400)' }}
			>
				nextjs-chakra-base
			</Heading>
			<Stack direction="row" spacing={6}>
				<Link
					href="mailto:hello@nextjs-chakra-base.ai"
					color={useColorModeValue('gray.800', 'white')}
				>
					hello@nextjs-chakra-base.ai
				</Link>
			</Stack>
		</Container>
	</Box>
);
