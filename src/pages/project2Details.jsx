import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { motion, useAnimation } from 'framer-motion';
import { useMediaQuery } from '@react-hook/media-query';
import styled from 'styled-components';
import DetailsLayout from '../components/DetailsLayout';
import { generateMedia } from 'styled-media-query';
import LiveButton from '../components/blocks/LiveButton';
import GithubButton from '../components/blocks/GithubButton';
import { BiChevronLeft } from 'react-icons/bi';
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

const Home = styled.span`
	cursor: pointer;
	display: flex;
	align-items: center;
	position: absolute;
	font-size: 2rem;
	color: #a8dadc;
	top: 1.5rem;
	left: 1.5rem;
	z-index: 2000;
`;
const DescriptionDiv = styled.div`
	/* background-color: white; */
	height: 50vh;
	width: 100%;
	margin-top: 4rem;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: left;
	padding: 8rem;
	z-index: 10;
	${customMedia.lessThan('sLaptop')`
		
		width:100%;
		padding:4rem;
	`};
	${customMedia.lessThan('sTablet')`
		flex-basis:25%
	`};
`;

const ProjectTitle = styled(motion.h1)`
	font-size: 8rem;
	color: white;
	z-index:10;
	${customMedia.lessThan('lLaptop')`
		font-size: 5.5rem;
		
	`};
	${customMedia.lessThan('mLaptop')`
		font-size: 4.7rem;
		
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
	align-items: center;
	width: 100%;
	flex-basis: 35%;
	background-color: #457b9d;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.8);
	/* ${customMedia.lessThan('sLaptop')`
		flex-basis:30%;
	`}; */
	${customMedia.lessThan('sTablet')`
		flex-basis: 25%;
	`};
	${customMedia.lessThan('lPhone')`
		flex-basis:30%
	`};
	${customMedia.lessThan('mPhone')`
		padding: 2rem;
		flex-basis:30%
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
const CenteringContainer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	height: min-content;
	${customMedia.lessThan('sTablet')`
		height: 100%;
		flex-direction:column;
		justify-content:space-evenly;
	`};
`;

const Features = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-basis: 50%;
`;
const Technologies = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;
	flex-basis: 15%;
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
	/* background-color: red; */
	width: 95%;
	height: 95%;
	display: flex;
	align-items: center;
	justify-content: center;
	/* ${customMedia.lessThan('mLaptop')`

		width: 80%;
		height: 80%;
	`}; */
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

const ImageContainerContainer = styled.div`
	flex-basis: 50%;
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const MainContainer = styled.div`
	display: flex;
	flex-basis: 50%;
	flex-direction: column;
	justify-content: flex-start;
	${customMedia.lessThan('sLaptop')`
		
		flex-basis: 100%;
		padding:4rem;
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
		<DetailsLayout>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Jonathan Wong - Inventory Manager</title>
			</Helmet>
			<Background>
				<Link to="/">
					<Home>
						<BiChevronLeft /> Home
					</Home>
				</Link>
				<SeperatorDiv>
					<DescriptionDiv>
						<MainContainer>
							<ProjectTitle>Inventory Manager</ProjectTitle>
							<ProjectDescription>
								A web app to help laboratories keep track of their inventory.<br />
								Built using React, Redux, Chakra UI.
							</ProjectDescription>
							<ButtonDiv>
								<LiveButton />
								<GithubButton href={'https://github.com/jyywong/trip-planner'} />
							</ButtonDiv>
						</MainContainer>

						{hasMounted &&
						!laptopMatch && (
							<React.Fragment>
								<ImageContainerContainer>
									<ImageContainer>
										<StaticImage src="../images/imsLaptopPort.png" alt="website" />
									</ImageContainer>
								</ImageContainerContainer>
							</React.Fragment>
						)}
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
						<CenteringContainer>
							<Features>
								<FeaturesContainer>
									<SubHeading>What can the user do?</SubHeading>
									<SubDescription>
										Users can invite other members to a "lab" where all users can see and edit
										inventory. Some notable features: Alert users to items with low stock, charts
										show usage history of all items, request orders for an item.
									</SubDescription>
								</FeaturesContainer>
							</Features>
							<Features>
								<FeaturesContainer>
									<SubHeading>What did I learn?</SubHeading>
									<SubDescription>
										This was my first project using Redux. Learned how to understand and use base
										Redux, and how to pair it with async API calls using Redux Thunks and Axios.
										Learned how to use Chakra UI to quickly build a UI. Continued to learn how to
										test with React Testing Library and Cypress.
									</SubDescription>
								</FeaturesContainer>
							</Features>
						</CenteringContainer>
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
			</Background>;
		</DetailsLayout>
	);
};

export default Project1Details;
