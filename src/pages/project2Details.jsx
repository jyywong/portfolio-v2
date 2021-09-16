import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useMediaQuery } from '@react-hook/media-query';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { generateMedia } from 'styled-media-query';
import LiveButton from '../components/blocks/LiveButton';
import GithubButton from '../components/blocks/GithubButton';
import { StaticImage } from 'gatsby-plugin-image';

const customMedia = generateMedia({
	lLaptop: '1370px',
	mLaptop: '1210px',
	sLaptop: '1024px',
	xsLaptop: '850px',
	tablet: '700px',
	sTablet: '550px',
	lPhone: '430px',
	mPhone: '375px',
	sPhone: '340px'
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
	${customMedia.lessThan('sLaptop')`
	justify-content: space-evenly;
	overflow:auto;
	height:200vh;
	`};

	scroll-snap-align: start;
`;
const SeperatorDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	width: 100%;
	${customMedia.lessThan('sLaptop')`
	align-items: center
	`};
`;
const DescriptionDiv = styled.div`
	/* background-color: white; */
	/* flex-basis: 40%; */
	width: 45%;
	margin-top: 4rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: left;
	padding-left: 8rem;
	z-index: 10;
	${customMedia.lessThan('sLaptop')`
		margin-top: 0;
		width:100%;
		padding:4rem;
	`};
	${customMedia.lessThan('sTablet')`
		flex-basis:25%
	`};
`;

const ProjectTitle = styled(motion.h1)`
	font-size: 6rem;
	color: white;
	z-index:10;
	${customMedia.lessThan('lLaptop')`
		font-size: 7.5rem;
		
	`};
	${customMedia.lessThan('mLaptop')`
		font-size: 7rem;
		
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
	font-size: 2rem;
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
	/* ${customMedia.lessThan('sLaptop')`
		flex-basis:30%;
	`}; */
	${customMedia.lessThan('sTablet')`
		flex-direction:column;
		flex-basis: 30%;
	`};
	${customMedia.lessThan('lPhone')`
		flex-basis:35%
	`};
	${customMedia.lessThan('mPhone')`
		padding: 2rem;
		flex-basis:40%
	`};
`;

const FeaturesContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	height: 50%;
	width: 75%;
	${customMedia.lessThan('sTablet')`
		justify-content:space-evenly;
	`};
`;
const SubHeading = styled.h4`
	font-size: 3rem;
	color: white;
	${customMedia.lessThan('tablet')`
		font-size: 2.5rem
	`};
	${customMedia.lessThan('sTablet')`
		font-size: 2rem
	`};
	${customMedia.lessThan('sPhone')`
		font-size: 1.8rem;
	`};
`;
const SubDescription = styled.p`
	font-size: 2rem;
	color: #f1faee;
	hyphens: auto;
	${customMedia.lessThan('tablet')`
		font-size: 1.8rem
	`};
	${customMedia.lessThan('sTablet')`
		font-size: 1.5rem
	`};
	${customMedia.lessThan('sPhone')`
		font-size: 1.2rem;
	`};
`;

const Features = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-basis: 50%;
	height: 100%;
	margin-top: 4rem;
`;
const Technologies = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;
	flex-basis: 10%;
	${customMedia.lessThan('sLaptop')`
		width:100%;
	`};
	${customMedia.lessThan('sTablet')`
		margin-top:-4rem;
		margin-bottom: 4rem;
	`};
	${customMedia.lessThan('lPhone')`
		margin-top:2rem;
		margin-bottom: 4rem;
	`};
`;
const TechHeading = styled.h5`
	margin-top: 1rem;
	font-size: 1.5rem;
	color: white;
`;
const TechContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-evenly;
	${customMedia.lessThan('sTablet')`
		align-items:center;
		flex-direction:column;
	`};
`;
const TechItem = styled.p`
	font-size: 2rem;
	color: #a8dadc;
	${customMedia.lessThan('sLaptop')`
		margin-top: 2rem;
	`};
`;
const ImageContainer = styled.div`
	width: 65%;
	height: 65%;
	display: flex;
	align-items: center;
	justify-content: center;
	${customMedia.lessThan('mLaptop')`

		width: 80%;
		height: 80%;
	`};
	${customMedia.lessThan('sLaptop')`

		width: 75%;
		height: 75%;
	`};

	${customMedia.lessThan('tablet')`
		width: 80%;
		height: 80%;
	`};
	${customMedia.lessThan('sTablet')`
		width: 80%;
		height: 80%;
	`};
	${customMedia.lessThan('lPhone')`
		width: 90%;
		height: 90%;
	`};
`;
const PolygonContainer = styled.div`
	width: 100%;
	flex-basis: 25%;
	display: flex;
	align-items: center;
	justify-content: center;
	${customMedia.lessThan('sTablet')`
		flex-basis:15%

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
		right: 15vw;
		top: auto;
	`};
	${customMedia.lessThan('tablet')`
		right:5vw

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
	/* ${customMedia.lessThan('mLaptop')`
		width:60vw;
	`}; */
	${customMedia.lessThan('sLaptop')`
		clip-path: polygon(15% 0, 100% 0, 85% 100%, 0 100%);
		width:70vw;
		height: 42vh;
	`};
	${customMedia.lessThan('tablet')`
		width:90vw

	`};
	${customMedia.lessThan('sTablet')`
		height: 35vh;
	`};
	${customMedia.lessThan('lPhone')`
		height: 30vh
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
		left: 15vw;
		top: 6vh;
	`};
	${customMedia.lessThan('tablet')`
		left: 5vw;
		top: 6vh;
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
	/* ${customMedia.lessThan('mLaptop')`
		width:61.5vw;
	`}; */
	${customMedia.lessThan('sLaptop')`
		clip-path: polygon(9.5% 0, 100% 0, 100% 100%, 0 100%);
		
	`};
	${customMedia.lessThan('tablet')`
		clip-path: polygon(13% 0, 100% 0, 100% 100%, 0 100%);
	`};
	${customMedia.lessThan('sTablet')`
		clip-path: polygon(12% 0, 100% 0, 100% 100%, 0 100%);
		height: 15vh;
	`};
	/* ${customMedia.lessThan('mPhone')`
		height: 42vh;
	`}; */
`;

const BackPolygonShadowWrap = styled(motion.span)`
	position: absolute;
	/* top: 18rem; */
	right: -5rem;
    top: calc(45.5vh - 22vh);
	filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.83));
	z-index:100;
	/* ${customMedia.lessThan('sLaptop')`
	right: auto;
	top: auto;
	left:24vw;
	bottom:0;
	`}; */
	${customMedia.lessThan('sLaptop')`
		right: 15vw;
		bottom: 6vh;
	`};
	${customMedia.lessThan('tablet')`
		right: 8vw;
	`};
	${customMedia.lessThan('sTablet')`
		top:15vh;
		right: 7vw;
	`};
	${customMedia.lessThan('lPhone')`
		top:12vh;
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
	/* ${customMedia.lessThan('mLaptop')`
		width:64.5vw;
	`}; */
	${customMedia.lessThan('sLaptop')`
		clip-path: polygon(0 0, 100% 0, 82% 100%, 0 100%);
		width:30vw;
	`};
	${customMedia.lessThan('sLaptop')`
		left: 22.5vh;
		top: 6vh;
	`};
	${customMedia.lessThan('tablet')`
		width:30vw;
	`};
	${customMedia.lessThan('sTablet')`
		clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
	`};
	${customMedia.lessThan('lPhone')`
		clip-path: polygon(0 0, 100% 0, 76% 100%, 0 100%);
	`};
`;

const Project1Details = () => {
	const [ hasMounted, setHasMounted ] = useState(false);
	const laptopMatch = useMediaQuery('only screen and (max-width:1024px)');
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
		setHasMounted(true);
		allAnimateSeq();
	}, []);
	return (
		<Layout>
			<Background>
				<SeperatorDiv>
					<DescriptionDiv>
						<ProjectTitle animate={controlTitle} initial={{ opacity: 0 }}>
							Inventory Manager
						</ProjectTitle>
						<ProjectDescription animate={controlDescription} initial={{ opacity: 0 }}>
							A web app to help laboratories keep track of their inventory.<br />
							Built using React, Redux, Chakra UI.
						</ProjectDescription>
						<ButtonDiv animate={controlDescription} initial={{ opacity: 0 }}>
							<LiveButton />
							<GithubButton href={'https://github.com/jyywong/trip-planner'} />
						</ButtonDiv>
					</DescriptionDiv>
					{hasMounted &&
					laptopMatch && (
						<PolygonContainer>
							<ImageContainer>
								<StaticImage src="../images/TripPlannerLaptop.png" alt="website" />
							</ImageContainer>
						</PolygonContainer>
					)}
					<MiddleDiv>
						<Features>
							<FeaturesContainer>
								<SubHeading>What can the user do?</SubHeading>
								<SubDescription>
									Users can invite other members to a "lab" where all users can see and edit
									inventory. Some notable features: Alert users to items with low stock, charts show
									usage history of all items, request orders for an item.
								</SubDescription>
							</FeaturesContainer>
						</Features>
						<Features>
							<FeaturesContainer>
								<SubHeading>What did I learn?</SubHeading>
								<SubDescription>
									This was my first project using Redux. Learned how to understand and use base Redux,
									and how to pair it with async API calls using Redux Thunks and Axios. Learned how to
									use Chakra UI to quickly build a UI. Continued to learn how to test with React
									Testing Library and Cypress.
								</SubDescription>
							</FeaturesContainer>
						</Features>
					</MiddleDiv>
					<Technologies>
						<TechHeading>Technologies used</TechHeading>
						<TechContainer>
							<TechItem>React</TechItem>
							<TechItem>Redux</TechItem>
							<TechItem>Redux Thunks</TechItem>
							<TechItem>Chakra UI</TechItem>
							<TechItem>React Testing Library</TechItem>
						</TechContainer>
					</Technologies>
				</SeperatorDiv>

				{hasMounted &&
				!laptopMatch && (
					<React.Fragment>
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
									<StaticImage src="../images/imsLaptopPort.png" alt="website" />
								</ImageContainer>
							</ForePolygon>
						</ForePolygonShadowWrap>
					</React.Fragment>
				)}
			</Background>;
		</Layout>
	);
};

export default Project1Details;
