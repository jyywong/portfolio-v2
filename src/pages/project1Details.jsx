import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { generateMedia } from 'styled-media-query';
import LiveButton from '../components/blocks/LiveButton';
import GithubButton from '../components/blocks/GithubButton';
import { StaticImage } from 'gatsby-plugin-image';

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
	align-items: flex-start;
	justify-content: flex-start;

	scroll-snap-align: start;
`;
const SeperatorDiv = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
`;
const DescriptionDiv = styled.div`
	/* background-color: white; */
	flex-basis: 40%;
	margin-top: 4rem;
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

const MiddleDiv = styled.div`
	margin-top: 4rem;
	display: flex;
	width: 100%;
	flex-basis: 35%;
	background-color: #457b9d;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.8);
`;

const FeaturesContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 50%;
	width: 75%;
`;
const SubHeading = styled.h4`
	font-size: 3rem;
	color: white;
`;
const SubDescription = styled.p`
	font-size: 2rem;
	color: #f1faee;
`;

const Features = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-basis: 50%;
	height: 100%;
`;
const Technologies = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	flex-direction: column;
	flex-grow: 1;
`;
const TechHeading = styled.h5`
	font-size: 1.5rem;
	color: white;
`;
const TechContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-evenly;
`;
const TechItem = styled.p`
	font-size: 2rem;
	color: #a8dadc;
`;
const ImageContainer = styled.div`
	width: 65%;
	height: 65%;
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
	top: calc(22.5vh - 19.5vh);
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
	height:calc(55vh - 15vh);
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
	top: calc(27.5vh - 22vh);
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
    height:calc(30vh - 7vh);
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
    top: calc(45.5vh - 22vh);
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
    height: calc(21vh - 4vh);
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

const Project1Details = () => {
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
	useEffect(() => {
		allAnimateSeq();
	}, []);
	return (
		<Layout>
			<Background>
				<SeperatorDiv>
					<DescriptionDiv>
						<ProjectTitle animate={controlTitle} initial={{ opacity: 0 }}>
							Trip Planner
						</ProjectTitle>
						<ProjectDescription animate={controlDescription} initial={{ opacity: 0 }}>
							A web app to help groups plan trips collaboratively.<br /> Built using React, Redux,
							RTK-Query, Material-UI, Framer-Motion, and Google Maps API. <br />
						</ProjectDescription>
						<ButtonDiv animate={controlDescription} initial={{ opacity: 0 }}>
							<LiveButton />
							<GithubButton href={'https://github.com/jyywong/trip-planner'} />
						</ButtonDiv>
					</DescriptionDiv>
					<MiddleDiv>
						<Features>
							<FeaturesContainer>
								<SubHeading>What can the user do?</SubHeading>
								<SubDescription>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus praesentium
									asperiores ut nam, ipsam ratione dolorem odit ipsum. Quasi, libero.
								</SubDescription>
							</FeaturesContainer>
						</Features>
						<Features>
							<FeaturesContainer>
								<SubHeading>What did I learn?</SubHeading>
								<SubDescription>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus praesentium
									asperiores ut nam, ipsam ratione dolorem odit ipsum. Quasi, libero.
								</SubDescription>
							</FeaturesContainer>
						</Features>
					</MiddleDiv>
					<Technologies>
						<TechHeading>Technologies used</TechHeading>
						<TechContainer>
							<TechItem>React</TechItem>
							<TechItem>Redux</TechItem>
							<TechItem>RTK</TechItem>
							<TechItem>Material UI</TechItem>
						</TechContainer>
					</Technologies>
				</SeperatorDiv>

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
			</Background>;
		</Layout>
	);
};

export default Project1Details;
