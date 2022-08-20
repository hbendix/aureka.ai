import Head from 'next/head';
import * as React from 'react';

import { Environment, getEnvironment, getProject } from 'Utilities';

type Props = {
	title: string;
	slug: string;
	description?: string | undefined;
	imageUri?: string | undefined;
}
export const SEOHeader: React.FC<Props> = ({
	title, description, imageUri, slug,
}): JSX.Element => {
	const { name: projName, description: projDesc } = getProject();
	const env = getEnvironment();
	const paddedLogoUri = 'https://nextjs-chakra-base.me/logos/padded_logo.jpg';
	const t = title && title !== projName ? `${title} | ${projName}` : projName;
	const titleWithEnv = getEnvironment() !== Environment.production ? `${t} | ${env.toString()}` : t;
	// eslint-disable-next-line max-len
	const d = description ?? projDesc;
	const pageUrl = `https://www.nextjs-chakra-base.me${slug}`;
	return (
		<Head>
			<title>
				{titleWithEnv}
			</title>
			<meta
				name="description"
				content={d}
				key="description"
			/>
			<meta
				property="og:title"
				content={titleWithEnv}
				key="og-title"
			/>
			<meta
				property="og:description"
				content={d}
				key="og-description"
			/>
			<meta
				property="og:image"
				content={imageUri ?? paddedLogoUri}
				key="og-image"
			/>
			<meta
				property="og:url"
				content={pageUrl}
				key="og-url"
			/>
			<meta
				property="og:site_name"
				content={projName}
				key="og-site_name"
			/>
			<meta
				name="twitter:title"
				content={titleWithEnv}
				key="twitter-title"
			/>
			<meta
				name="twitter:description"
				content={d}
				key="twitter-description"
			/>
			<meta
				name="twitter:image"
				content={imageUri ?? paddedLogoUri}
				key="twitter-image"
			/>
			<meta
				name="twitter:card"
				content="summary_large_image"
				key="twitter-card"
			/>
			<meta
				name="twitter:image:alt"
				content={d}
				key="twitter-image-alt"
			/>
		</Head>
	);
};
