import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { motion, useAnimation } from 'framer-motion';
import Logo from '../assets/logo.svg';
import styled from 'styled-components';

const StyledLogo = styled(Logo)`
	height:110%;
	width:auto ;
	margin-right: auto;
	margin-left: 2rem;
`;
const NavHeader = styled.div`
	height: 7vh;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;
const NavBar = styled(motion.div)`
	top: 0;
	height:7vh;
	width: 100%;
	background-color: rgba(29, 53, 87, 1);
	box-shadow: 0 3px 3px rgba(0, 0, 0, 0.25);
	position: sticky;
	z-index: 1000;
	

`;
const NavBarText = styled(motion.h4)`
	font-size: 1.65rem;
	font-weight: 100;
	color: white;
	margin-right: 2rem;
    cursor: pointer;
`;
const NavBarButton = styled(motion.button)`
	font-size: 1.65rem;
	font-weight: 100;
	background-color: transparent;
	border: 2px solid #a8dadc;
	color:#a8dadc;
	padding: 1rem 1.5rem;
	margin-right: 2rem;
	cursor: pointer;

`;
const HamburgerContainer = styled.div`
	position: relative;
	height: 75%;
	display: flex;
	align-items: center;
	cursor: pointer;
	margin-right: 3rem;
`;
const Hamburger = styled.span`
	&,
	&::before,
	&::after {
		width: 3rem;
		height: 3px;
		background-color: #a8dadc;
		display: inline-block;
	}

	&::before,
	&::after {
		content: "";
		position: absolute;
		left: 0;
		transition: all .2s;
	}
	& {
		background-color: ${(props) => (props.isClicked ? 'transparent' : '#a8dadc')};
	}

	&::before {
		transform: ${(props) => (props.isClicked ? 'rotate(-135deg)' : 'translateY(8px)')};
	}
	&::after {
		transform: ${(props) => (props.isClicked ? 'rotate(135deg)' : 'translateY(-8px)')};
	}
`;

const Navbar = ({ navstatus }) => {
	const [ isClicked, setIsClicked ] = useState(false);
	const controlNav = useAnimation();
	const tabletMatch = useMediaQuery('only screen and (max-width:700px)');
	const hoverAnimation = {
		color: '#a8dadc',
		scale: 1.05
	};
	useEffect(
		() => {
			if (navstatus === 'visible') {
				controlNav.start({
					y: 0,
					opacity: 1,
					transition: { type: 'tween' }
				});
			} else if (navstatus === 'disappear') {
				controlNav.start({
					y: '-7vh',
					opacity: 0,
					transition: { type: 'tween' }
				});
			}
		},
		[ navstatus ]
	);
	return (
		<NavBar isClicked={isClicked} animate={controlNav}>
			<NavHeader>
				<StyledLogo />
				{tabletMatch ? (
					<HamburgerContainer
						onClick={() => {
							setIsClicked(!isClicked);
						}}
						onTouchStart={() => {
							setIsClicked(!isClicked);
						}}
					>
						<Hamburger isClicked={isClicked} />
					</HamburgerContainer>
				) : (
					<React.Fragment>
						<NavBarText whileHover={hoverAnimation}>About</NavBarText>
						<NavBarText whileHover={hoverAnimation}>Skills</NavBarText>
						<NavBarText whileHover={hoverAnimation}>Projects</NavBarText>
						<NavBarText whileHover={hoverAnimation}>Contact</NavBarText>
						<NavBarButton
							whileHover={{
								backgroundColor: 'rgba(168, 218, 220, 0.05)',
								scale: 1.05
							}}
						>
							All Projects
						</NavBarButton>
					</React.Fragment>
				)}
			</NavHeader>
		</NavBar>
	);
};

export default Navbar;
