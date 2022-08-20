import { ColorModeScript } from '@chakra-ui/react';
import Document, {
	Html, Head, Main, NextScript,
} from 'next/document';
import * as React from 'react';

import { Theme } from 'Styles';
import { Environment, getEnvironment } from 'Utilities';

export default class MyDocument extends Document {
	private readonly inProduction: boolean = getEnvironment() === Environment.production;

	private readonly html: string = `
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'G-5Q3Z25GB51');
  	`;

	render(): JSX.Element {
		return (
			<Html lang="en-GB">
				<Head>
					<meta name="sentry-trace" content="{{ span.toSentryTrace() }}" />
					{this.inProduction && (
						<>
							<script async src="https://www.googletagmanager.com/gtag/js?id=G-5Q3Z25GB51" />
							<script
								dangerouslySetInnerHTML={{ __html: this.html }}
							/>
						</>
					)}
				</Head>
				<body>
					<Main />
					<NextScript />
					<ColorModeScript initialColorMode={Theme.config.initialColorMode} />
				</body>
			</Html>
		);
	}
}
