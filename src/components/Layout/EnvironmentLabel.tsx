import { Tag } from '@chakra-ui/react';
import * as React from 'react';

import { Environment, getEnvironment, getVersion } from 'Utilities';

const env = getEnvironment();
export const EnvironmentLabel: React.FC = (): JSX.Element => env !== Environment.production && (
	<Tag
		size="lg"
		variant="solid"
		style={{
			position: 'fixed',
			zIndex: 1000,
			backgroundColor: 'rgba(100,100,100,0.2)',
			top: 0,
			right: 0,
			margin: 0,
			borderRadius: 0,
			borderBottomLeftRadius: 10,
		}}
	>
		nextjs-chakra-base
		{' '}
		{env?.toString()}
		{' '}
		v
		{getVersion()}
	</Tag>
);
