import React, { forwardRef, useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useMediaQuery } from '@react-hook/media-query';
import { StaticImage } from 'gatsby-plugin-image';
import { generateMedia } from 'styled-media-query';
import { FaGithub } from 'react-icons/fa';
import Matter, { World, Bodies, MouseConstraint } from 'matter-js';
import { Link } from 'gatsby';
import { BiChevronRight } from 'react-icons/bi';
import Layout from './Layout';
import styled from 'styled-components';
import LiveButton from './blocks/LiveButton';

const customMedia = generateMedia({
	mLaptop: '1210px',
	sLaptop: '1024px',
	xsLaptop: '850px',
	tablet: '700px',
	wTablet: '560px',
	sTablet: '550px',
	lPhone: '430px',
	mPhone: '375px'
});

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
	${customMedia.lessThan('sLaptop')`
		flex-direction:column;
		padding:5rem;
		justify-content: flex-start;
	`};
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
	z-index: 100;
	${customMedia.lessThan('sLaptop')`
	padding-right: 0;
	`};
`;

const ProjectTitle = styled(motion.h1)`
	font-size: 8.5rem;
	color: white;
	${customMedia.lessThan('sLaptop')`
		font-size: 7rem;
		
	`};
	${customMedia.lessThan('tablet')`
		font-size: 5.5rem;
		
	`};
	${customMedia.lessThan('wTablet')`
		font-size:4.5rem;
	`};
	${customMedia.lessThan('lPhone')`
		font-size:4rem;
	`};
	${customMedia.lessThan('mPhone')`
		font-size:4rem;
	`};
`;
const ProjectDescription = styled(motion.h4)`
	font-size: 2.5rem;
	color: #a8dadc;
	font-weight: 100;
	hyphens: auto;
	
	${customMedia.lessThan('sLaptop')`
		font-size: 2rem;
	`};
	${customMedia.lessThan('sTablet')`
		font-size:1.6rem;
	`};
	${customMedia.lessThan('mPhone')`
		font-size:1.3rem;
	`};
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: #a8dadc;
	
`;

const MoreDetails = styled(motion.span)`

	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const ButtonDiv = styled(motion.div)`
	display: flex;
	margin-top: 4rem;
    justify-content: flex-end;
	z-index:100;
	${customMedia.lessThan('mLaptop')`
		justify-content:space-between;
	`};
	${customMedia.lessThan('sTablet')`
		justify-content:center;
		align-items:center;
		flex-direction:column;
		width:100%;
	`};
	${customMedia.lessThan('lPhone')`
		margin-top:1rem;
	`};
`;
const ImageContainer = styled.div`
	width: 85%;
	height: 85%;
	display: flex;
	align-items: center;
	justify-content: center;
	${customMedia.lessThan('sLaptop')`
		margin-top:6rem;
		width: 85%;
		height: 85%;
	`};
	${customMedia.lessThan('xsLaptop')`
		margin-top:6rem;
		width: 100%;
		height: 100%;
	`};
	${customMedia.lessThan('tablet')`
		width: 80%;
		height: 80%;
	`};
	${customMedia.lessThan('sTablet')`
		width: 100%;
		height: 100%;
	`};
`;
const GitButton = styled(motion.a)`
	color: white;
	text-decoration: none;
	background-color: #1d3557;
	border: none;
	padding: 1rem;
	font-size: 2.5rem;
	font-weight: 700;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	cursor: pointer;
	${customMedia.lessThan('sLaptop')`
	width:47.5%;
	`};
	${customMedia.lessThan('sTablet')`
	width:100%;
	`};
	${customMedia.lessThan('mPhone')`
		padding:.75rem;
		font-size:2rem;
	`};
`;

const ButtonText = styled.h6`
	font-size: 2.2rem;
	font-weight: 500;
	margin-right: 1rem;
	${customMedia.lessThan('lPhone')`
		font-size:2rem;
	`};
	${customMedia.lessThan('mPhone')`
		font-size:1.5rem;
	`};
`;

const ForePolygonShadowWrap = styled.span`
	position: absolute;
	top: 22.5vh;
	left: -5rem;
	filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.83));
	${customMedia.lessThan('sLaptop')`
	left: auto;
	top: auto;
	bottom:0;
	`};
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
	${customMedia.lessThan('mLaptop')`
		width:60vw;
	`};
	${customMedia.lessThan('sLaptop')`
	clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 100%);
	width:70vw;
	height: 50vh;
	`};
	${customMedia.lessThan('tablet')`
	width:100vw;
	height: 50vh;
	`};
	${customMedia.lessThan('sTablet')`
		height: 45vh;
	`};
	${customMedia.lessThan('mPhone')`
		height: 40vh;
	`};
`;

const MidPolygonShadowWrap = styled.span`
	position: absolute;
	top: 27.5vh;
	left: -5rem;
	filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.83));
	${customMedia.lessThan('sLaptop')`
	right: auto;
	top: auto;
	left:40vw;
	bottom:0;
	`};
`;

const MidPolygon = styled(motion.div)`
	background-color: rgba(196, 196, 196, 1);
	/* height: 30rem; */
    height:30vh;
	/* width: 105rem; */
    width:54.5vw;
	clip-path: polygon(0% 0, 92% 0, 100% 100%, 0 100%);
	box-shadow: 0 0 12px rgba(0, 0, 0, 0.83);
	${customMedia.lessThan('mLaptop')`
		width:60.5vw;
	`};
	${customMedia.lessThan('sLaptop')`
		clip-path: polygon(0 0, 100% 9%, 100% 100%, 0 100%);
		height:53vh;
		width:40vw;
	`};
	${customMedia.lessThan('tablet')`
		width:55vw;
	`};
	${customMedia.lessThan('sTablet')`
		height: 47vh;
	`};
	${customMedia.lessThan('mPhone')`
		height: 42vh;
	`};
`;

const BackPolygonShadowWrap = styled(motion.span)`
	position: absolute;
	top: 45.5vh;
	left: -5rem;
	filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.83));
	${customMedia.lessThan('sLaptop')`
	right: auto;
	top: auto;
	left:24vw;
	bottom:0;
	`};
	${customMedia.lessThan('tablet')`
		left:15vw;
	`};
`;

const BackPolygon = styled(motion.div)`
	background-color: rgba(196, 196, 196, 1);
	/* height: 20rem; */
    height: 21vh;
    /* width:111rem; */
	width: 58vw;
	clip-path: polygon(0 0, 94.5% 0, 100% 100%, 0 100%);
	box-shadow: 0 0 12px rgba(0, 0, 0, 0.83);
	${customMedia.lessThan('mLaptop')`
		width:62.5vw;
	`};
	${customMedia.lessThan('sLaptop')`
		clip-path: polygon(0 0, 100% 6.5%, 100% 100%, 0 100%);
		height:52vh;
		width:30vw;
	`};
	${customMedia.lessThan('tablet')`
		width:30vw;
	`};
	${customMedia.lessThan('sTablet')`
		height: 46.5vh;
	`};
	${customMedia.lessThan('mPhone')`
		height: 42.5vh;
	`};
`;

const Project2 = forwardRef(({ project2Animate }, ref) => {
	const touchScreen = useMediaQuery('(hover:none)');
	const laptopMatch = useMediaQuery('only screen and (max-width:1024px)');
	const tabletMatch = useMediaQuery('only screen and (max-width:700px)');
	const phoneMatch = useMediaQuery('only screen and (max-width:700px)');
	const mPhoneMatch = useMediaQuery('only screen and (max-width:550px)');

	const boxRef = useRef(null);
	const canvasRef = useRef(null);
	let render = useRef(null);

	const [ constraints, setConstraints ] = useState();
	const [ scene, setScene ] = useState();

	const handleResize = () => {
		setConstraints(boxRef.current.getBoundingClientRect());
	};
	const handleClick = (event) => {
		const randomWidth = Math.floor(Math.random() * (120 - 75 + 1) + 75);
		const randomHeight = Math.floor(Math.random() * (120 - 75 + 1) + 75);
		if (!touchScreen) {
			const mouseX = scene.engine.world.constraints[0].pointA.x;
			const mouseY = scene.engine.world.constraints[0].pointA.y;
			World.add(scene.engine.world, Bodies.rectangle(mouseX, mouseY, randomWidth, randomHeight));
		} else {
			World.add(scene.engine.world, Bodies.rectangle(canvasRef.current.width / 2, 0, randomWidth, randomHeight));
		}
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
			scale: [ 1.1, 1.1, 1 ],
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
			const responsiveScale = render.options.width;
			const randomBox = Bodies.rectangle(responsiveScale * 0.75, 0, phoneMatch ? 50 : 75, phoneMatch ? 50 : 75, {
				render: {
					fillStyle: 'brown'
				},
				angle: Math.PI * 0.1
			});
			const randomBox2 = Bodies.rectangle(
				responsiveScale * 0.73,
				-1200,
				phoneMatch ? 55 : 80,
				phoneMatch ? 55 : 80,
				{
					render: {
						fillStyle: 'yellow'
					},
					angle: Math.PI * 0.2
				}
			);
			const randomBox3 = Bodies.rectangle(
				responsiveScale * 0.71,
				-600,
				phoneMatch ? 60 : 90,
				phoneMatch ? 60 : 90,
				{
					render: {
						fillStyle: 'grey'
					},
					angle: Math.PI * 0.15
				}
			);
			if (!touchScreen) {
				const mConstraint = MouseConstraint.create(engine);
				World.add(engine.world, [ floor, randomBox, randomBox2, randomBox3, mConstraint ]);
			} else {
				World.add(engine.world, [ floor, randomBox, randomBox2, randomBox3 ]);
			}

			Engine.run(engine);
			Render.run(render);
			setConstraints(boxRef.current.getBoundingClientRect());
			setScene(render);
			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);
			};
		},
		[ project2Animate, touchScreen ]
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

				let floorHeight = 100;
				if (laptopMatch) {
					floorHeight = scene.canvas.height * 0.5;
				}
				if (tabletMatch) {
					floorHeight = scene.canvas.height * 0.75;
				}
				if (mPhoneMatch) {
					floorHeight = scene.canvas.height * 0.78;
				}
				Matter.Body.setPosition(floor, {
					x: width / 2,
					y: height + STATIC_DENSITY / 2 - floorHeight
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
			<Background ref={ref} className="Project2" onClick={handleClick} onTouchStart={handleClick}>
				<PhysicsDiv ref={boxRef}>
					<canvas ref={canvasRef} />
				</PhysicsDiv>
				<DescriptionDiv>
					<ProjectTitle animate={controlTitle} initial={{ opacity: 0 }}>
						Inventory Manager
					</ProjectTitle>
					<ProjectDescription animate={controlDescription} initial={{ opacity: 0 }}>
						A web app to help laboratories keep track of their inventory. <br /> Built using React, Redux,
						Chakra UI. <br />
						<br />
						<StyledLink to="/project2Details">
							<MoreDetails
								whileHover={{
									color: 'white'
								}}
							>
								More Details<BiChevronRight />
							</MoreDetails>
						</StyledLink>
					</ProjectDescription>
					<ButtonDiv animate={controlDescription} initial={{ opacity: 0 }}>
						<LiveButton href={'https://quirky-mahavira-f43b02.netlify.app/'} target="_blank" />
						<GitButton
							whileHover={{
								scale: 1.05,
								y: -4
							}}
							href={'https://github.com/jyywong/ims_frontend'}
							target="_blank"
						>
							<ButtonText>GITHUB</ButtonText>
							<FaGithub />
						</GitButton>
					</ButtonDiv>
				</DescriptionDiv>
				<BackPolygonShadowWrap>
					<BackPolygon animate={controlBackPoly} initial={{ x: -1100 }} />
				</BackPolygonShadowWrap>
				<MidPolygonShadowWrap>
					<MidPolygon animate={controlMidPoly} initial={{ x: -1100 }} />
				</MidPolygonShadowWrap>
				<ForePolygonShadowWrap>
					<ForePolygon animate={controlForePoly} initial={{ x: -1100 }}>
						<ImageContainer>
							<StaticImage src="../images/imsLaptopPort.png" alt="website" />
						</ImageContainer>
					</ForePolygon>
				</ForePolygonShadowWrap>
			</Background>
		</Layout>
	);
});

export default Project2;
