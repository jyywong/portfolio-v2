import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import { FaGithub } from 'react-icons/fa';
import Matter, { Engine, Render, World, Bodies, MouseConstraint } from 'matter-js';

import Layout from './Layout';
import styled from 'styled-components';
import LiveButton from './blocks/LiveButton';

const STATIC_DENSITY = 15;

const Background = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	background-color: #457b9d;

	display: flex;
	align-items: center;
	justify-content: flex-end;
	scroll-snap-align: start;
`;
const PhysicsDiv = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
`;

const DescriptionDiv = styled.div`
	/* background-color: white; */
	flex-basis: 40%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: right;
	padding-right: 8rem;
`;

const ProjectTitle = styled(motion.h1)`
	font-size: 10rem;
	color: white;
`;
const ProjectDescription = styled(motion.h4)`
	font-size: 2.5rem;
	color: #a8dadc;
	font-weight: 100;
`;
const ButtonDiv = styled(motion.div)`
	display: flex;
	margin-top: 4rem;
    justify-content: flex-end;
`;
const GitButton = styled.button`
	color: white;
	background-color: #1d3557;
	border: none;
	padding: 1rem;
	font-size: 2.5rem;
	font-weight: 700;
	display: flex;
	align-items: center;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ButtonText = styled.h6`
	font-size: 2.5rem;
	font-weight: 700;
	margin-right: 1rem;
`;

const ForePolygonShadowWrap = styled.span`
	position: absolute;
	top: 22.5vh;
	left: -5rem;
	filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.83));
`;

const ForePolygon = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
	background-color: rgba(196, 196, 196, 1);
	width: 50vw;
	height: 55vh;
	clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
	box-shadow: 0 0 12px rgba(0, 0, 0, 0.83);
`;

const MidPolygonShadowWrap = styled.span`
	position: absolute;
	top: 27.5vh;
	left: -5rem;
	filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.83));
`;

const MidPolygon = styled(motion.div)`
	background-color: rgba(196, 196, 196, 1);
	/* height: 30rem; */
    height:30vh;
	/* width: 105rem; */
    width:54.5vw;
	clip-path: polygon(0% 0, 92% 0, 100% 100%, 0 100%);
	box-shadow: 0 0 12px rgba(0, 0, 0, 0.83);
`;

const BackPolygonShadowWrap = styled(motion.span)`
	position: absolute;
	top: 45.5vh;
	left: -5rem;
	filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.83));
`;

const BackPolygon = styled(motion.div)`
	background-color: rgba(196, 196, 196, 1);
	/* height: 20rem; */
    height: 21vh;
    /* width:111rem; */
	width: 58vw;
	clip-path: polygon(0 0, 94.5% 0, 100% 100%, 0 100%);
	box-shadow: 0 0 12px rgba(0, 0, 0, 0.83);
`;

const Project2 = ({ project2Animate }) => {
	const boxRef = useRef(null);
	const canvasRef = useRef(null);

	const [ constraints, setConstraints ] = useState();
	const [ scene, setScene ] = useState();

	const handleResize = () => {
		setConstraints(boxRef.current.getBoundingClientRect());
	};
	const handleClick = () => {
		console.log('click');
		const mouseX = scene.engine.world.constraints[0].pointA.x;
		const mouseY = scene.engine.world.constraints[0].pointA.y;
		const randomWidth = Math.floor(Math.random() * (120 - 75 + 1) + 75);
		const randomHeight = Math.floor(Math.random() * (120 - 75 + 1) + 75);

		World.add(scene.engine.world, Bodies.rectangle(mouseX, mouseY, randomWidth, randomHeight));
	};

	const controlTitle = useAnimation();
	const controlDescription = useAnimation();
	const controlBackPoly = useAnimation();
	const controlMidPoly = useAnimation();
	const controlForePoly = useAnimation();
	const polyAnimateSeq = () => {
		controlBackPoly.start({
			x: 0,
			transition: { type: 'spring', mass: 1, damping: 14 }
		});
		controlMidPoly.start({
			x: 0,
			transition: { type: 'spring', mass: 1, damping: 14, delay: 0.25 }
		});
		controlForePoly.start({
			x: 0,
			transition: { type: 'spring', mass: 1, damping: 14, delay: 0.5 }
		});
	};
	const allAnimateSeq = async () => {
		await controlTitle.start({
			x: [ -700, -700, 0 ],
			scale: [ 1.5, 1.5, 1 ],
			opacity: [ 0, 1, 1 ],
			transition: { duration: 2, times: [ 0, 0.65, 1 ] }
		});
		controlDescription.start({
			opacity: 1
		});
		polyAnimateSeq();
	};

	useEffect(
		() => {
			if (project2Animate) {
				console.log('hello');
				allAnimateSeq();
			}
		},
		[ project2Animate ]
	);
	useEffect(
		() => {
			let Engine = Matter.Engine;
			let Render = Matter.Render;
			let World = Matter.World;
			let Bodies = Matter.Bodies;

			let engine = Engine.create({});

			let render = Render.create({
				element: boxRef.current,
				engine: engine,
				canvas: canvasRef.current,
				options: {
					width: window.innerWidth,
					height: window.innerHeight,
					background: 'transparent',
					wireframes: false
				}
			});

			const floor = Bodies.rectangle(150, 200, 300, 20, {
				isStatic: true,
				render: {
					fillStyle: 'transparent'
				}
			});

			const randomBox = Bodies.rectangle(1200, 0, 75, 75, {
				render: {
					fillStyle: 'brown'
				},
				angle: Math.PI * 0.1
			});
			const randomBox2 = Bodies.rectangle(1250, -1200, 80, 80, {
				render: {
					fillStyle: 'yellow'
				},
				angle: Math.PI * 0.2
			});
			const randomBox3 = Bodies.rectangle(1300, -600, 90, 90, {
				render: {
					fillStyle: 'grey'
				},
				angle: Math.PI * 0.15
			});

			const mConstraint = MouseConstraint.create(engine);

			World.add(engine.world, [ floor, randomBox, randomBox2, randomBox3, mConstraint ]);

			Engine.run(engine);
			Render.run(render);
			setConstraints(boxRef.current.getBoundingClientRect());
			setScene(render);
			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);
			};
		},
		[ project2Animate ]
	);

	useEffect(
		() => {
			if (constraints) {
				let { width, height } = constraints;

				// Dynamically update canvas and bounds
				scene.bounds.max.x = width;
				scene.bounds.max.y = height;
				scene.options.width = width;
				scene.options.height = height;
				scene.canvas.width = width;
				scene.canvas.height = height;

				// Dynamically update floor
				const floor = scene.engine.world.bodies[0];

				Matter.Body.setPosition(floor, {
					x: width / 2,
					y: height + STATIC_DENSITY / 2 - 100
				});

				Matter.Body.setVertices(floor, [
					{ x: 0, y: height },
					{ x: width, y: height },
					{ x: width, y: height + STATIC_DENSITY },
					{ x: 0, y: height + STATIC_DENSITY }
				]);
			}
		},
		[ scene, constraints ]
	);

	return (
		<Layout>
			<Background className="Project2" onClick={handleClick}>
				<PhysicsDiv ref={boxRef}>
					<canvas ref={canvasRef} />
				</PhysicsDiv>
				<DescriptionDiv>
					<ProjectTitle animate={controlTitle} initial={{ opacity: 0 }}>
						Inventory Manager
					</ProjectTitle>
					<ProjectDescription animate={controlDescription} initial={{ opacity: 0 }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ab ea magnam ipsam hic at ut
						modi doloremque corporis nam? <br />
						<br />
						More Details &rarr;
					</ProjectDescription>
					<ButtonDiv animate={controlDescription} initial={{ opacity: 0 }}>
						<LiveButton />
						<GitButton>
							<ButtonText>GITHUB</ButtonText>
							<FaGithub />
						</GitButton>
					</ButtonDiv>
				</DescriptionDiv>
				<BackPolygonShadowWrap>
					<BackPolygon
						whileHover={{
							scale: 1.05,
							transition: { type: 'spring', mass: 1 }
						}}
						animate={controlBackPoly}
						initial={{ x: -1100 }}
					/>
				</BackPolygonShadowWrap>
				<MidPolygonShadowWrap>
					<MidPolygon
						whileHover={{
							scale: 1.05,
							transition: { type: 'spring', mass: 1 }
						}}
						animate={controlMidPoly}
						initial={{ x: -1100 }}
					/>
				</MidPolygonShadowWrap>
				<ForePolygonShadowWrap>
					<ForePolygon
						whileHover={{
							scale: 1.05,
							transition: { type: 'spring', mass: 1 }
						}}
						animate={controlForePoly}
						initial={{ x: -1100 }}
					>
						<StaticImage height={450} src="../images/TripPlannerLaptop.png" alt="website" />
					</ForePolygon>
				</ForePolygonShadowWrap>
			</Background>
		</Layout>
	);
};

export default Project2;
