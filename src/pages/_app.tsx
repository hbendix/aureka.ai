import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import * as React from 'react';

import {
	EnvironmentLabel, Footer, RootLayout,
} from 'Components';
import { Theme } from 'Styles';

import '../styles/main.scss';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => (
	<ChakraProvider resetCSS theme={Theme}>
		<RootLayout>
			<EnvironmentLabel />
			<Component {...pageProps} />
			<Footer />
		</RootLayout>
	</ChakraProvider>
);

export default MyApp;
