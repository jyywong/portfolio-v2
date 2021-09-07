import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import TrailClean from '../assets/trailClean.svg';
import MaskTrail from '../assets/maskTrail.svg';

import Layout from './Layout';
import styled, { keyframes } from 'styled-components';
import LiveButton from './blocks/LiveButton';
import GithubButton from './blocks/GithubButton';

const Background = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	background-color: #1d3557;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: flex-start;

	scroll-snap-align: start;
`;
const TrailAnimation = keyframes`
	0%{
		stroke-dashoffset: 482.44683837890625;
		/* opacity: 1; */
	}
	80%{
		stroke-dashoffset: 0;
		opacity: 1;
	}
	100%{
		stroke-dashoffset: 0;
		opacity:0;
	}
`;

const XAnimation = keyframes`
80%{
	opacity:0;
}
90%{
	opacity: 1;

}
100%{
	opacity:0;
}
`;

const StyledTrail = styled(MaskTrail)`
	position: absolute;
	/* right: 0; */
	transform-origin: 0% 0%;
	left: ${(props) => props.mouseposition.x}px;
	top: calc(${(props) => props.mouseposition.y}px - 62vh);
	z-index:2;
	opacity:.25;

	width:60%;
	stroke: #457b9d;
	.paths {
	fill: none;
	stroke: #457b9d;
	stroke-width: 5;
	stroke-dasharray: 24;
	stroke-linejoin: round;
	}
	.mask {
	fill: none;
	stroke: white;
	stroke-width: 10;
	stroke-dasharray: 482;
	stroke-dashoffset: 482.44683837890625;
	animation:${TrailAnimation} 6s linear  infinite;
	}
	.spot{
	opacity: 0;
	animation: ${XAnimation} 6s linear infinite;
	}
`;

const DescriptionDiv = styled.div`
	/* background-color: white; */
	flex-basis: 40%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: left;
	padding-left: 8rem;
	z-index: 10;
`;

const ProjectTitle = styled(motion.h1)`
	font-size: 10rem;
	color: white;
	z-index:10;

`;
const ProjectDescription = styled(motion.h4)`
	font-size: 2.5rem;
	color: #a8dadc;
	font-weight: 100;
`;
const ButtonDiv = styled(motion.div)`
	display: flex;
	margin-top: 4rem;
`;

const ForePolygonShadowWrap = styled.span`
	position: absolute;
	/* top: -5rem; */
	right: -5rem;
	top: 22.5vh;
	filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.83));
	z-index: 100;
`;

const ForePolygon = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
	background-color: rgba(196, 196, 196, 1);
	width: 50vw;
	height: 55vh;
	clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
	box-shadow: 0 0 12px rgba(0, 0, 0, 0.83);
`;

const MidPolygonShadowWrap = styled.span`
	position: absolute;
	/* top: 0rem; */
	right: -5rem;
	top: 27.5vh;
	filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.83));
	z-index: 100;
`;

const MidPolygon = styled(motion.div)`
	background-color: rgba(196, 196, 196, 1);
	/* height: 30rem; */
    height:30vh;
	/* width: 105rem; */
    width:54.5vw;
	clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%);
	box-shadow: 0 0 12px rgba(0, 0, 0, 0.83);
`;

const BackPolygonShadowWrap = styled(motion.span)`
	position: absolute;
	/* top: 18rem; */
	right: -5rem;
    top: 45.5vh;
	filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.83));
	z-index:100;

`;

const BackPolygon = styled(motion.div)`
	background-color: rgba(196, 196, 196, 1);
	/* height: 20rem; */
    height: 21vh;
    /* width:111rem; */
	width: 58vw;
	clip-path: polygon(5.5% 0, 100% 0, 100% 100%, 0 100%);
	box-shadow: 0 0 12px rgba(0, 0, 0, 0.83);
`;
const TrackContainer = styled(motion.div)`
position: absolute;
	top: 0;
	right:0;
	display: flex;
	transform: rotate(-10deg);
`;
const TopTrack = styled(motion.div)`
	position: absolute;
	top: 5vh;
	right: 0;
	border: 2px dashed rgba(122, 138, 128, 1);
	width: 28vw;
    
`;
const MidTrack = styled(motion.div)`
	position: absolute; 
	top: 5vh;
	right: calc(28vw + 4px);
	border: 2px dashed rgba(122, 138, 128, 1);
	height: 35vw;
    
`;
const BotTrack = styled(motion.div)`
	position: absolute;
	top: calc(5vh + 35vw);
	right: calc(28vw + 8px);
	border: 2px dashed rgba(122, 138, 128, 1);
	width: 8vw;
`;

const LMarksTheSpot = styled(motion.div)`
	position: absolute;
	top: calc(5vh + 35vw);
	right: calc(35vw + 8px);
	border: 4px solid rgba(122, 138, 128, 1);
	width: 6vw;
	transform-origin: center;
	transform:rotate(45deg);
`;
const RMarksTheSpot = styled(motion.div)`
	position: absolute;
	top: calc(5vh + 35vw);
	right: calc(35vw + 8px);
	border: 4px solid rgba(122, 138, 128, 1);
	width: 6vw;
	transform-origin: center;
	transform:rotate(-45deg);
`;

const Project1 = ({ project1Animate }) => {
	const [ mousePosition, setMousePosition ] = useState({ x: 0, y: 0 });
	const [ animationCoords, setAnimationCoords ] = useState({ x: 500, y: 300 });

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
			x: [ 700, 700, 0 ],
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
			if (project1Animate) {
				allAnimateSeq();
			}
		},
		[ project1Animate ]
	);

	return (
		<Layout>
			<Background
				className="Project1"
				onMouseMove={(event) => {
					setMousePosition({ x: event.clientX, y: event.clientY });
				}}
			>
				<StyledTrail
					onAnimationIteration={(event) => {
						if (event.animationName === TrailAnimation.name && mousePosition !== 0) {
							setAnimationCoords(mousePosition);
							console.log(animationCoords);
						}
					}}
					mouseposition={animationCoords}
				/>

				<DescriptionDiv>
					<ProjectTitle animate={controlTitle} initial={{ opacity: 0 }}>
						Trip Planner
					</ProjectTitle>
					<ProjectDescription animate={controlDescription} initial={{ opacity: 0 }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ab ea magnam ipsam hic at ut
						modi doloremque corporis nam? <br />
						<br />
						More Details &rarr;
					</ProjectDescription>
					<ButtonDiv animate={controlDescription} initial={{ opacity: 0 }}>
						<LiveButton />
						<GithubButton />
					</ButtonDiv>
				</DescriptionDiv>
				<BackPolygonShadowWrap>
					<BackPolygon
						whileHover={{
							scale: 1.05,
							transition: { type: 'spring', mass: 1 }
						}}
						animate={controlBackPoly}
						initial={{ x: 1100 }}
					/>
				</BackPolygonShadowWrap>
				<MidPolygonShadowWrap>
					<MidPolygon
						whileHover={{
							scale: 1.05,
							transition: { type: 'spring', mass: 1 }
						}}
						animate={controlMidPoly}
						initial={{ x: 1100 }}
					/>
				</MidPolygonShadowWrap>
				<ForePolygonShadowWrap>
					<ForePolygon
						whileHover={{
							scale: 1.05,
							transition: { type: 'spring', mass: 1 }
						}}
						animate={controlForePoly}
						initial={{ x: 1100 }}
					>
						<StaticImage height={450} src="../images/TripPlannerLaptop.png" alt="website" />
					</ForePolygon>
				</ForePolygonShadowWrap>
			</Background>
		</Layout>
	);
};

export default Project1;
