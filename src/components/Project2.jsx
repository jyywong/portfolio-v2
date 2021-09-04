import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import { FaGithub } from 'react-icons/fa';

import Layout from './Layout';
import styled from 'styled-components';
import LiveButton from './blocks/LiveButton';

const Background = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	background-color: #457b9d;

	display: flex;
	align-items: center;
	justify-content: flex-end;
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

const Project2 = () => {
	const controlTitle = useAnimation();
	const controlDescription = useAnimation();
	return (
		<Layout>
			<Background>
				<DescriptionDiv>
					<ProjectTitle>Project Name</ProjectTitle>
					<ProjectDescription>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ab ea magnam ipsam hic at ut
						modi doloremque corporis nam? <br />
						<br />
						More Details &rarr;
					</ProjectDescription>
					<ButtonDiv>
						<LiveButton />
						<GitButton>
							<ButtonText>GITHUB</ButtonText>
							<FaGithub />
						</GitButton>
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

export default Project2;
