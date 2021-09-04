import React from 'react';
import Layout from './Layout';
import styled from 'styled-components';

import { motion, useAnimation } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import LiveButton from './blocks/LiveButton';
import GithubButton from './blocks/GithubButton';

const Background = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	background-color: #1d3557;

	display: flex;
	/* align-items: center; */
	justify-content: flex-start;
`;

const DescriptionDiv = styled.div`
	/* background-color: white; */
	margin-top: 4rem;
	flex-basis: 40%;
	height: 100%;
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	text-align: left;
	padding-left: 8rem;
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
`;

const ForePolygonShadowWrap = styled.span`
	position: absolute;
	/* top: -5rem; */
	right: -5rem;
	top: calc(22.5vh - 20vh);
	filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.83));
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
	top: calc(27.5vh - 20vh);
	filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.83));
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
    top: calc(45.5vh - 20vh);
	filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.83));
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
const ProjectDetails = () => {
	const controlTitle = useAnimation();
	const controlDescription = useAnimation();
	const controlBackPoly = useAnimation();
	const controlMidPoly = useAnimation();
	const controlForePoly = useAnimation();
	return (
		<Layout>
			<Background>
				<DescriptionDiv>
					<ProjectTitle animate={controlTitle}>Project Name</ProjectTitle>
					<ProjectDescription animate={controlDescription}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ab ea magnam ipsam hic at ut
						modi doloremque corporis nam? <br />
						<br />
						More Details &rarr;
					</ProjectDescription>
					<ButtonDiv animate={controlDescription}>
						<LiveButton />
						<GithubButton />
					</ButtonDiv>
				</DescriptionDiv>
				<BackPolygonShadowWrap>
					<BackPolygon
					// whileHover={{
					// 	scale: 1.05,
					// 	transition: { type: 'spring', mass: 1 }
					// }}
					// animate={controlBackPoly}
					// initial={{ x: 1100 }}
					/>
				</BackPolygonShadowWrap>
				<MidPolygonShadowWrap>
					<MidPolygon
					// whileHover={{
					// 	scale: 1.05,
					// 	transition: { type: 'spring', mass: 1 }
					// }}
					// animate={controlMidPoly}
					// initial={{ x: 1100 }}
					/>
				</MidPolygonShadowWrap>
				<ForePolygonShadowWrap>
					<ForePolygon
					// whileHover={{
					// 	scale: 1.05,
					// 	transition: { type: 'spring', mass: 1 }
					// }}
					// animate={controlForePoly}
					// initial={{ x: 1100 }}
					>
						<StaticImage height={450} src="../images/TripPlannerLaptop.png" alt="website" />
					</ForePolygon>
				</ForePolygonShadowWrap>
			</Background>
		</Layout>
	);
};

export default ProjectDetails;
