import React, { forwardRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import { generateMedia } from 'styled-media-query';
import { Link } from 'gatsby';
import MaskTrail from '../assets/maskTrail.svg';

import { BiChevronRight } from 'react-icons/bi';
import Layout from './Layout';
import styled, { keyframes } from 'styled-components';
import LiveButton from './blocks/LiveButton';
import GithubButton from './blocks/GithubButton';

const customMedia = generateMedia({
	mLaptop: '1210px',
	sLaptop: '1024px',
	xsLaptop: '850px',
	tablet: '700px',
	sTablet: '550px',
	lPhone: '430px',
	mPhone: '375px'
});

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

	${customMedia.lessThan('sLaptop')`
		flex-direction:column;
		padding:5rem;
	`};
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
	${customMedia.lessThan('sLaptop')`
	padding-left: 0;
	`};
`;

const ProjectTitle = styled(motion.h1)`
	font-size: 10rem;
	color: white;
	z-index:10;
	${customMedia.lessThan('sLaptop')`
		font-size: 8rem;
		
	`};
	${customMedia.lessThan('sTablet')`
		font-size:6rem;
	`};
	${customMedia.lessThan('lPhone')`
		font-size:5rem;
	`};
	${customMedia.lessThan('mPhone')`
		font-size:4.1rem;
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
`;
const ButtonDiv = styled(motion.div)`
	display: flex;
	margin-top: 4rem;
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

const ForePolygonShadowWrap = styled.span`
	position: absolute;
	/* top: -5rem; */
	right: -5rem;
	top: 22.5vh;
	filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.83));
	z-index: 100;
	${customMedia.lessThan('sLaptop')`
	right: auto;
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
	clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
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
	/* top: 0rem; */
	right: -5rem;
	top: 27.5vh;
	filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.83));
	z-index: 100;
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
	clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%);
	box-shadow: 0 0 12px rgba(0, 0, 0, 0.83);
	${customMedia.lessThan('mLaptop')`
		width:61.5vw;
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
	/* top: 18rem; */
	right: -5rem;
    top: 45.5vh;
	filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.83));
	z-index:100;
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
	clip-path: polygon(5.5% 0, 100% 0, 100% 100%, 0 100%);
	box-shadow: 0 0 12px rgba(0, 0, 0, 0.83);
	${customMedia.lessThan('mLaptop')`
		width:64.5vw;
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

const Project1 = forwardRef(({ project1Animate }, ref) => {
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
				ref={ref}
				className="Project1"
				onMouseMove={(event) => {
					setMousePosition({ x: event.clientX, y: event.clientY });
				}}
			>
				<StyledTrail
					onAnimationIteration={(event) => {
						if (event.animationName === TrailAnimation.name && mousePosition !== 0) {
							setAnimationCoords(mousePosition);
						}
					}}
					mouseposition={animationCoords}
				/>

				<DescriptionDiv>
					<ProjectTitle animate={controlTitle} initial={{ opacity: 0 }}>
						Trip Planner
					</ProjectTitle>
					<ProjectDescription animate={controlDescription} initial={{ opacity: 0 }}>
						A web app to help groups plan trips collaboratively.<br /> Built using React, Redux, RTK-Query,
						Material-UI, Framer-Motion, and Google Maps API. <br />
						<br />
						<StyledLink to="/project1Details">
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
						<LiveButton />
						<GithubButton href={'https://github.com/jyywong/trip-planner'} />
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
						<ImageContainer>
							<StaticImage src="../images/TripPlannerLaptop.png" alt="website" />
						</ImageContainer>
					</ForePolygon>
				</ForePolygonShadowWrap>
			</Background>
		</Layout>
	);
});

export default Project1;
