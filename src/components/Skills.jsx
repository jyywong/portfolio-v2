import React, { forwardRef, useEffect } from 'react';
import { useMediaQuery, useMediaQueries } from '@react-hook/media-query';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import media, { generateMedia } from 'styled-media-query';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import SpriteText from 'three-spritetext';
import Layout from './Layout';
extend({ SpriteText });

const customMedia = generateMedia({
	mLarge: '1300px',
	sLarge: '1140px',
	tablet: '800px',
	sTablet: '570px',
	xsTablet: '500px',
	lPhone: '440px'
});
const Background = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #f1faee;

	display: flex;
	align-items: center;
	justify-content: center;
	scroll-snap-align: start;
	${customMedia.lessThan('tablet')`
		flex-direction: column;
	`};
`;
const HalfDiv = styled(motion.div)`
	padding: 1rem;
	margin: 1rem;
	flex-basis: 50%;

	display: flex;
	align-items: center;
	justify-content: center;
	${customMedia.lessThan('tablet')`
		height:50%;
		align-items: flex-end;
	`};
	${customMedia.lessThan('xsTablet')`
		height:30%;
		align-items:center;
		padding:.5rem
	`};
`;

const CanvasDiv = styled(motion.div)`
	/* flex-basis: 50%; */
	width:50%;
	height: 100%;
	${customMedia.lessThan('tablet')`
		height:65%;
		width:65%;
	`};
	${customMedia.lessThan('sTablet')`
		height:70%;
		width:70%;
	`};
	${customMedia.lessThan('xsTablet')`
		height:40%;
		width:80%;
	`};
`;
const MainHeading = styled.div`
	font-size: 6rem;
	width: 50%;
	color: #1d3557;
	${customMedia.lessThan('mLarge')`
		font-size:5rem;
	`};
	${customMedia.lessThan('sLarge')`
		font-size:4.5rem;
	`};
	${customMedia.lessThan('tablet')`
		font-size:3.5rem;
		text-align:center;
	`};
	${customMedia.lessThan('lPhone')`
		font-size:3rem;
		hyphens:auto;

	`};
`;
const AccentSpan = styled.span`color: #e63946;`;

const listOfVertices = [
	{ x: 1, y: 1, z: 1 },
	{ x: 1, y: 1, z: -1 },
	{ x: 1, y: -1, z: -1 },
	{ x: -1, y: -1, z: -1 },
	{ x: 1, y: -1, z: 1 },
	{ x: -1, y: -1, z: 1 },
	{ x: -1, y: 1, z: 1 },
	{ x: -1, y: 1, z: -1 },
	{ x: 2, y: 0, z: 0 },
	{ x: -2, y: 0, z: 0 },
	{ x: 0, y: 2, z: 0 },
	{ x: 0, y: -2, z: 0 },
	{ x: 0, y: 0, z: 2 },
	{ x: 0, y: 0, z: -2 }
];
const techs = [
	'Javascript',
	'Python',
	'PHP',
	'HTML',
	'CSS',
	'SCSS',
	'Git',
	'React',
	'Django',
	'Redux',
	'Framer Motion',
	'Material UI',
	'Three.JS',
	'Django Rest Framework'
];

const ThreeHook = ({ matches }) => {
	const state = useThree();

	state.scene.traverse((child) => {
		child.scale.normalize();
	});
	state.camera.zoom = 4;
	state.camera.updateProjectionMatrix();
	let scale = state.viewport.width * 0.075;

	if (matches) {
		scale = state.viewport.width * 0.085;
	}

	state.scene.scale.set(scale, scale, scale);

	useFrame((state, delta) => {
		state.scene.children[0].rotation.x += delta * -state.mouse.y;
		state.scene.children[0].rotation.y += delta * state.mouse.x;
		state.scene.children[0].rotation.z += delta / 2 * state.mouse.y;
	});

	return <React.Fragment />;
};

const Skills = forwardRef(({ skillsAnimate }, ref) => {
	const matches = useMediaQuery('only screen and (max-width:800px)');
	const controlDescription = useAnimation();
	const controlCanvas = useAnimation();

	const allAnimate = async () => {
		await controlDescription.start({
			x: 0,
			transition: { type: 'spring', duration: 1.5 }
		});
		controlCanvas.start({
			x: 0,
			opacity: 1,
			transition: { type: 'spring', duration: 0.5 }
		});
	};
	useEffect(
		() => {
			if (skillsAnimate) {
				allAnimate();
			}
		},
		[ skillsAnimate ]
	);
	return (
		<Layout>
			<Background ref={ref} className="Skills">
				<HalfDiv animate={controlDescription} initial={{ x: -800 }}>
					<MainHeading>
						Here are some of the <AccentSpan>languages</AccentSpan> and{' '}
						<AccentSpan>technologies</AccentSpan> I can use.
					</MainHeading>
				</HalfDiv>
				<CanvasDiv animate={controlCanvas} initial={{ x: 700, opacity: 0 }}>
					<Canvas linear={true}>
						<ThreeHook matches={matches} />

						<group name="TextSphere">
							{listOfVertices.map((coords, i) => {
								return (
									<spriteText
										key={i}
										color="#e63946"
										text={techs[i]}
										position={[ coords.x, coords.y, coords.z ]}
									/>
								);
							})}
						</group>
					</Canvas>
				</CanvasDiv>
			</Background>
		</Layout>
	);
});

export default Skills;
