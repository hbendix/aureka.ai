import { extendTheme } from '@chakra-ui/react';

import { colourScheme } from './ColourScheme';
import { container } from './Container';

const breakpoints = ({
	sm: '640px',
	md: '768px',
	lg: '1024px',
	xl: '1280px',
	'2xl': '1536px',
});
const config = {
	initialColorMode: 'light',
	useSystemColorMode: true,
};
export const Theme = extendTheme({
	breakpoints,
	config,
	colors: colourScheme,
	components: {
		Container: container,
	},
});
