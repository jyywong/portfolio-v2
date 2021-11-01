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
import BackBars from '../assets/layered-steps-haikei-v2-back.svg';

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

const Background = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	background-color: #457b9d;
	overflow: hidden;

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
const StyledBackBars = styled(motion.svg)`
    position: absolute;
    width: 125%;
    bottom: 0%;

`;
const StyledMidBars = styled(motion.svg)`
    position: absolute;
    width: 125%;
    bottom: 0%;

`;
const StyledFrontBars = styled(motion.svg)`
    position: absolute;
    width: 125%;
    bottom: 0%;

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

const Project4 = forwardRef(({ project4Animate }, ref) => {
	const controlTitle = useAnimation();
	const controlDescription = useAnimation();
	const controlBackPoly = useAnimation();
	const controlMidPoly = useAnimation();
	const controlForePoly = useAnimation();
	const controlBackBars = useAnimation();
	const controlMidBars = useAnimation();
	const controlFrontBars = useAnimation();

	const handleMouseMove = (e) => {
		console.log(e.clientX, e.clientY);
		console.log(window.innerWidth);
		const offsetX = e.clientX - window.innerWidth / 2;
		const offsetY = e.clientY - window.innerHeight / 2;
		controlBackBars.start({
			x: offsetX * 0.025,
			y: offsetY * 0.025 * 0.5
		});
		controlMidBars.start({
			x: offsetX * 0.075,
			y: offsetY * 0.075 * 0.5
		});
		controlFrontBars.start({
			x: offsetX * 0.125,
			y: offsetY * 0.125 * 0.5
		});
	};
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
			if (project4Animate) {
				allAnimateSeq();
			}
		},
		[ project4Animate ]
	);

	return (
		<Layout>
			<Background ref={ref} className="Project4" onMouseMove={handleMouseMove}>
				<StyledBackBars
					viewBox="0 0 900 600"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					version="1.1"
					animate={controlBackBars}
					initial={{
						scaleX: 1.25,
						scaleY: 1.1
					}}
				>
					<path
						className="backBars"
						d="M0 448L75 448L75 396L150 396L150 414L225 414L225 425L300 425L300 395L375 395L375 443L450 443L450 433L525 433L525 403L600 403L600 422L675 422L675 421L750 421L750 428L825 428L825 409L900 409L900 409L900 601L900 601L825 601L825 601L750 601L750 601L675 601L675 601L600 601L600 601L525 601L525 601L450 601L450 601L375 601L375 601L300 601L300 601L225 601L225 601L150 601L150 601L75 601L75 601L0 601Z"
						fill="#0066ff"
					/>
				</StyledBackBars>
				<StyledMidBars
					viewBox="0 0 900 600"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					version="1.1"
					animate={controlMidBars}
					initial={{
						scaleX: 1.35,
						scaleY: 1.1
					}}
				>
					<path
						class="midBars"
						d="M0 503L75 503L75 476L150 476L150 485L225 485L225 482L300 482L300 463L375 463L375 503L450 503L450 484L525 484L525 510L600 510L600 490L675 490L675 470L750 470L750 476L825 476L825 510L900 510L900 484L900 601L900 601L825 601L825 601L750 601L750 601L675 601L675 601L600 601L600 601L525 601L525 601L450 601L450 601L375 601L375 601L300 601L300 601L225 601L225 601L150 601L150 601L75 601L75 601L0 601Z"
						fill="#008cff"
					/>
				</StyledMidBars>
				<StyledFrontBars
					viewBox="0 0 900 600"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					version="1.1"
					animate={controlFrontBars}
					initial={{
						scaleX: 1.45,
						scaleY: 1.1
					}}
				>
					<path
						class="frontBars"
						d="M0 532L75 532L75 545L150 545L150 536L225 536L225 519L300 519L300 547L375 547L375 529L450 529L450 568L525 568L525 565L600 565L600 550L675 550L675 515L750 515L750 549L825 549L825 531L900 531L900 552L900 601L900 601L825 601L825 601L750 601L750 601L675 601L675 601L600 601L600 601L525 601L525 601L450 601L450 601L375 601L375 601L300 601L300 601L225 601L225 601L150 601L150 601L75 601L75 601L0 601Z"
						fill="#4facf7"
					/>
				</StyledFrontBars>

				<DescriptionDiv>
					<ProjectTitle animate={controlTitle} initial={{ opacity: 0 }}>
						Algorithm Visualizer
					</ProjectTitle>
					<ProjectDescription animate={controlDescription} initial={{ opacity: 0 }}>
						A web app to visualize hard to understand algorithms. <br /> Built using React, and D3.js.{' '}
						<br />
						(Not mobile responsive)
						<br />
						<br />
						<StyledLink to="/project4Details">
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
						<LiveButton href={'https://romantic-kepler-0dfb7a.netlify.app/'} target="_blank" />
						<GitButton
							whileHover={{
								scale: 1.05,
								y: -4
							}}
							href={'https://github.com/jyywong/algo-vis'}
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
							<StaticImage src="../images/algoVisPort.png" alt="website" />
						</ImageContainer>
					</ForePolygon>
				</ForePolygonShadowWrap>
			</Background>
		</Layout>
	);
});

export default Project4;
