/* eslint-disable max-len */
import Head from 'next/head';
import * as React from 'react';

import { colourScheme } from 'Styles';
import { getProject } from 'Utilities';

import { SEOHeader } from './Header';

export const RootLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
	const { name, description } = getProject();
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'ProfessionalService',
		'@id': 'https://nextjs-chakra-base.ai',
		name,
		address: {
			'@type': 'PostalAddress',
			streetAddress: '24 Holborn Viaduct',
			addressLocality: 'Shoreditch',
			addressRegion: 'London',
			postalCode: 'EC1A 2BN',
			addressCountry: 'UK',
		},
		url: 'https://nextjs-chakra-base.ai',
		telephone: '+44 7586138466',
		email: 'hello@nextjs-chakra-base.ai',
		priceRange: '$$$',
		founders: ['Harry Bendix-Lewis'],
		foundingDate: '2019',
		foundingLocation: 'London',
		description,
	};
	return (
		<>
			<Head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=1" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=1" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=1" />
				<link rel="manifest" href="/site.webmanifest?v=1" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg?v=1" color={colourScheme.primary['500']} />
				<link rel="shortcut icon" href="/favicon.ico?v=1" />
				<meta name="apple-mobile-web-app-title" content={name} />
				<meta name="application-name" content={name} />
				<meta name="msapplication-TileColor" content={colourScheme.primary['500']} />
				<meta name="theme-color" content={colourScheme.primary['500']} />
				<meta charSet="UTF-8" />
				<script
					key="figSD"
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				/>
			</Head>
			<SEOHeader
				title={name}
				description={description}
				slug="/"
			/>
			<main>{children}</main>
		</>
	);
};
