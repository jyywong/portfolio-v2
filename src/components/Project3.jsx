import React, { forwardRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import { generateMedia } from 'styled-media-query';
import Layout from './Layout';
import { Link } from 'gatsby';
import { BiChevronRight } from 'react-icons/bi';
import styled, { keyframes } from 'styled-components';
import LiveButton from './blocks/LiveButton';
import GithubButton from './blocks/GithubButton';
import FlyingBook from '../assets/flyingBook.svg';

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

	display: flex;
	align-items: center;
	justify-content: flex-start;

	scroll-snap-align: start;

	${customMedia.lessThan('sLaptop')`
		flex-direction:column;
		padding:5rem;
	`};
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
	${customMedia.lessThan('xsLaptop')`
		font-size: 7rem;
		
	`};
	${customMedia.lessThan('xsLaptop')`
		font-size: 5.8rem;
		
	`};
	${customMedia.lessThan('xsLaptop')`
		font-size: 4.6rem;
		
	`};
	${customMedia.lessThan('lPhone')`
		font-size:4rem;
	`};
	${customMedia.lessThan('mPhone')`
		font-size:3.5rem;
	`};
`;
const ProjectDescription = styled(motion.h4)`
	font-size: 2.5rem;
	color: #a8dadc;
	font-weight: 100;
	z-index:10;
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
	z-index: 500;
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

const Project3 = forwardRef(({ project3Animate }, ref) => {
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
			if (project3Animate) {
				allAnimateSeq();
			}
		},
		[ project3Animate ]
	);
	const [ mousePosition, setMousePosition ] = useState(0);
	const [ animationY, setAnimationY ] = useState(500);
	return (
		<Layout>
			<Background
				ref={ref}
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
						A web app to help students sell and buy used textbooks. <br />Built using React, and Bootstrap.{' '}
						<br />
						<br />
						<StyledLink to="/project3Details">
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
						<GithubButton href={'https://github.com/jyywong/Auction-House-FrontEnd'} />
					</ButtonDiv>
				</DescriptionDiv>
				<BackPolygonShadowWrap>
					<BackPolygon animate={controlBackPoly} initial={{ x: 1100 }} />
				</BackPolygonShadowWrap>
				<MidPolygonShadowWrap>
					<MidPolygon animate={controlMidPoly} initial={{ x: 1100 }} />
				</MidPolygonShadowWrap>
				<ForePolygonShadowWrap>
					<ForePolygon animate={controlForePoly} initial={{ x: 1100 }}>
						<ImageContainer>
							<StaticImage src="../images/auctionHouseLaptopPort.png" alt="website" />
						</ImageContainer>
					</ForePolygon>
				</ForePolygonShadowWrap>
			</Background>
		</Layout>
	);
});

export default Project3;
