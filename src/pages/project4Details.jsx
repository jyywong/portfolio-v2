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
import { StaticImage } from 'gatsby-plugin-image';
import { BiChevronLeft } from 'react-icons/bi';

const customMedia = generateMedia({
	half4k: '2100px',
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
	justify-content: space-evenly;
	height: 100%;
	width: 100%;
	${customMedia.lessThan('sLaptop')`
	align-items: center
	`};
	${customMedia.lessThan('sTablet')`
		justify-content: space-between;
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
	font-size: 10rem;
	color: white;
	z-index:10;
	${customMedia.greaterThan('half4k')`
		font-size: 11.5rem
	`};
	${customMedia.lessThan('lLaptop')`
		font-size: 8.5rem;
		
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
	font-size: 2.5rem;
	color: #a8dadc;
	font-weight: 100;
	hyphens: auto;
	${customMedia.greaterThan('half4k')`
		font-size: 3.5rem
	`};
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
		flex-basis: 27.5%;
	`};
	/* ${customMedia.lessThan('lPhone')`
		flex-basis:2%
	`}; */
	${customMedia.lessThan('mPhone')`
		padding: 2rem;
		flex-basis:30%
	`};
`;

const FeaturesContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: 50%;
	width: 75%;
	${customMedia.lessThan('sTablet')`
		justify-content:space-evenly;
		height:auto;
	`};
`;
const SubHeading = styled.h4`
	font-size: 3rem;
	color: white;
	${customMedia.greaterThan('half4k')`
		font-size: 5rem
	`};
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
	${customMedia.greaterThan('half4k')`
		font-size: 3rem
	`};
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
		justify-content: space-evenly;
	`};
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
	font-size: 1.5rem;
	color: white;
	${customMedia.greaterThan('half4k')`
		font-size: 2.5rem
	`};
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
	${customMedia.greaterThan('half4k')`
		font-size: 2.75rem
	`};
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

const Project4Details = () => {
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
				<title>Jonathan Wong - Algorithm Visualizer</title>
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
							<ProjectTitle>Algorithm Visualizer</ProjectTitle>
							<ProjectDescription>
								A web app to visualize hard to understand algorithms.Built using React, and D3.js. (Not
								mobile responsive)
							</ProjectDescription>
							<ButtonDiv>
								<LiveButton href={'https://romantic-kepler-0dfb7a.netlify.app/'} target="_blank" />
								<GithubButton href={'https://github.com/jyywong/algo-vis'} />
							</ButtonDiv>
						</MainContainer>

						{hasMounted &&
						!laptopMatch && (
							<ImageContainerContainer>
								<ImageContainer>
									<StaticImage src="../images/algoVisPort.png" alt="website" />
								</ImageContainer>
							</ImageContainerContainer>
						)}
					</DescriptionDiv>
					{hasMounted &&
					laptopMatch && (
						<PolygonContainer>
							<ImageContainer>
								<StaticImage src="../images/algoVisPort.png" alt="website" />
							</ImageContainer>
						</PolygonContainer>
					)}
					<MiddleDiv>
						<CenteringContainer>
							<Features>
								<FeaturesContainer>
									<SubHeading>What can the user do?</SubHeading>
									<SubDescription>
										Users can visualize both pathfinding and sorting algorithms. Sorting algorithms
										include Bubble Sort, Insertion Sort, Merge Sort, and Quick Sort. Pathfinding
										algorithms include Djikstra's Algorithm, A*, and Greedy Best First Search.
									</SubDescription>
								</FeaturesContainer>
							</Features>
							<Features>
								<FeaturesContainer>
									<SubHeading>What did I learn?</SubHeading>
									<SubDescription>
										With this project I delved into D3.js and learned the data binding model of D3.
										I learned the basics of how to enter data into D3 objects and how to animate
										using transition in D3. Additionally, figuring out how to animate these
										algorithms helped me to understand these algorithms on a deeper level.
									</SubDescription>
								</FeaturesContainer>
							</Features>
						</CenteringContainer>
					</MiddleDiv>
					<Technologies>
						<TechHeading>Technologies used</TechHeading>
						<TechContainer>
							<TechItem>React</TechItem>
							<TechItem>D3.js</TechItem>
						</TechContainer>
					</Technologies>
				</SeperatorDiv>
			</Background>;
		</DetailsLayout>
	);
};

export default Project4Details;
