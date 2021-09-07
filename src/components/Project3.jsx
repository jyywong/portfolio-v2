import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from './Layout';
import styled, { keyframes } from 'styled-components';
import LiveButton from './blocks/LiveButton';
import GithubButton from './blocks/GithubButton';
import FlyingBook from '../assets/flyingBook.svg';

const Background = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	background-color: #1d3557;

	display: flex;
	align-items: center;
	justify-content: flex-start;

	scroll-snap-align: start;
`;

const topAnimation = keyframes`
25%{
	transform:translateY(-20px)
}
75%{
	transform:translateY(40px)
}
100%{
	transform:translateY(-20px)
}
`;

const midAnimation = keyframes`
30%{
	transform:translateY(-20px)
}
80%{
	transform:translateY(40px)
}
100%{
	transform:translateY(-20px)
}
`;
const botAnimation = keyframes`
20%{
	transform:translateY(-20px)
}
70%{
	transform:translateY(40px)
}
100%{
	transform:translateY(-20px)
}
`;

const bookAnimation = keyframes`
25%{
	transform:translateY(50px)
}
50%{
	transform:translateY(0px)

}
75%{
	transform:translateY(-50px)
}

100%{
	right:100vw


}

`;

const StyledBook = styled(FlyingBook)`
position: absolute;
right: -20vw;
height: 20vh;
width:auto;
top: calc(${(props) => props.mouseposition}px - 10vh);

animation: ${bookAnimation} infinite 4s ease-out;
.topLine{
	animation:${topAnimation} infinite 2s linear;
	animation-direction: alternate;
}
.midLine{
	animation:${midAnimation} infinite 2s linear;
	animation-direction: alternate;
}
.botLine{
	animation:${botAnimation} infinite 2s linear;
	animation-direction: alternate;
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
	z-index: 500;
`;

const ForePolygonShadowWrap = styled.span`
	position: absolute;
	/* top: -5rem; */
	right: -5rem;
	top: 22.5vh;
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
	top: 27.5vh;
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
    top: 45.5vh;
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

const Project3 = ({ project3Animate }) => {
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
			if (project3Animate) {
				allAnimateSeq();
				console.log('ofcourse');
			}
		},
		[ project3Animate ]
	);
	const [ mousePosition, setMousePosition ] = useState(0);
	const [ animationY, setAnimationY ] = useState(500);
	return (
		<Layout>
			<Background
				className="Project3"
				onMouseMove={(event) => {
					setMousePosition(event.clientY);
				}}
			>
				<StyledBook
					onAnimationIteration={(event) => {
						if (event.animationName === bookAnimation.name && mousePosition !== 0) {
							setAnimationY(mousePosition);
						}
					}}
					mouseposition={animationY}
				/>
				<DescriptionDiv>
					<ProjectTitle animate={controlTitle} initial={{ opacity: 0 }}>
						Textbook Auction
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

export default Project3;
