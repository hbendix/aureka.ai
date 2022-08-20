import {
	Button, Flex, Text,
} from '@chakra-ui/react';
import * as React from 'react';

export const Video: React.FC = (): JSX.Element => {
	const videoRef = React.useRef<HTMLVideoElement>(undefined);
	const jumpTo = (value: number) => {
		videoRef.current.currentTime = value;
	};
	return (
		<>
			{/* eslint-disable-next-line jsx-a11y/media-has-caption */}
			<video
				controls
				width="100%"
				ref={videoRef}
			>
				<source
					src="/video.mp4"
					type="video/mp4"
				/>
				Sorry, your browser doesn&apos;t support embedded videos.
			</video>
			<Flex align="center" justify="center">
				<Text mr={2}>Jump to:</Text>
				<Button
					w="fit-content"
					variant="ghost"
					onClick={() => jumpTo(1)}
					mr={2}
				>
					0:01s
				</Button>
				<Button
					w="fit-content"
					variant="ghost"
					onClick={() => jumpTo(3)}
					mr={2}
				>
					0:03s
				</Button>
				<Button
					w="fit-content"
					variant="ghost"
					onClick={() => jumpTo(5)}
				>
					0:05s
				</Button>
			</Flex>
		</>
	);
};
