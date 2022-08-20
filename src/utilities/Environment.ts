import packageJson from '../../package.json';

export enum Environment {
	production = 'production',
	preview = 'preview',
	development = 'development'
}

export function getEnvironment(): Environment {
	const env = process.env.NEXT_PUBLIC_VERCEL_ENV as Environment;
	return env ?? Environment.development;
}

export function getVersion(): string {
	return packageJson.version;
}

export function getProject(): { name: string, description: string } {
	return { name: packageJson.name, description: packageJson.description } as const;
}
