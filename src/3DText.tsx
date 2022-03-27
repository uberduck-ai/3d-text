import {ThreeCanvas} from '@remotion/three';
import {useCallback, useState} from 'react';
import {
	continueRender,
	delayRender,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import './index.css';
import {TextMesh} from './TextMesh';

export const ThreeDText: React.FC<{
	texts: string[];
	textPositions: number[];
	textColors: string[];
	textSize: string;
	trailColors: string[];
	textAnimationOffset: number;
	backgroundColor: string;
}> = ({
	texts,
	textPositions,
	textSize,
	textColors,
	trailColors,
	textAnimationOffset,
	backgroundColor,
}) => {
	const [handle] = useState(() => delayRender());
	const frame = useCurrentFrame();
	const {fps, width, height} = useVideoConfig();
	const onCreated = useCallback(() => {
		continueRender(handle);
	}, [handle]);
	return (
		<ThreeCanvas
			linear
			orthographic
			width={width}
			height={height}
			style={{
				backgroundColor: backgroundColor,
			}}
			camera={{
				zoom: 90,
				near: -40,
			}}
			onCreated={onCreated}
		>
			{texts.map((element: string, index: number) => (
				<TextMesh
					frame={frame - textAnimationOffset * index}
					fps={fps}
					text={texts[index]}
					textSize={textSize}
					position={textPositions[index]}
					textColor={textColors[index]}
					trailColor={trailColors[index]}
				/>
			))}
		</ThreeCanvas>
	);
};
