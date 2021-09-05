import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import SpriteText from 'three-spritetext';
import Layout from './Layout';
extend({ SpriteText });

const Background = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #f1faee;

	display: flex;
	align-items: center;
	justify-content: center;
	scroll-snap-align: start;
`;
const HalfDiv = styled(motion.div)`
	padding: 1rem;
	margin: 1rem;
	flex-basis: 50%;

	display: flex;
	align-items: center;
	justify-content: center;
`;

const CanvasDiv = styled(motion.div)`
	flex-basis: 50%;
	height: 100%;
	/* background-color: green; */
`;
const MainHeading = styled.div`
	font-size: 6rem;
	width: 50%;
	color: #1d3557;
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

const ThreeHook = () => {
	const state = useThree();

	state.scene.traverse((child) => {
		child.scale.normalize();
	});
	state.camera.zoom = 4;
	state.camera.updateProjectionMatrix();

	useFrame((state, delta) => {
		state.scene.children[0].rotation.x += delta * -state.mouse.y;
		state.scene.children[0].rotation.y += delta * state.mouse.x;
		state.scene.children[0].rotation.z += delta / 2 * state.mouse.y;
	});

	return <React.Fragment />;
};

const Skills = ({ skillsAnimate }) => {
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
			<Background className="Skills">
				<HalfDiv animate={controlDescription} initial={{ x: -800 }}>
					<MainHeading>
						Here are some of the <AccentSpan>languages</AccentSpan> and{' '}
						<AccentSpan>technologies</AccentSpan> I've used before.
					</MainHeading>
				</HalfDiv>
				<CanvasDiv animate={controlCanvas} initial={{ x: 700, opacity: 0 }}>
					<Canvas linear={true}>
						<ThreeHook />

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
};

export default Skills;
