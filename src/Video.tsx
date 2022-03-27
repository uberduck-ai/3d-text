import {Composition} from 'remotion';
import {ThreeDText} from './3DText';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="3DText"
				component={ThreeDText}
				durationInFrames={60}
				fps={30}
				width={1080}
				height={1080}
				defaultProps={{
					texts: ['Whats', 'up', 'Uberduck'],
					textPositions: [2, -0.5, -3],
					textSize: 'M',
					textColors: ['red', 'blue', 'purple'],
					trailColors: ['white', 'black', 'white'],
					textAnimationOffset: 5,
					backgroundColor: 'orange',
				}}
			/>
		</>
	);
};
