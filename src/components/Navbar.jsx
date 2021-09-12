import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import { useMediaQuery } from '@react-hook/media-query';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import Logo from '../assets/logo.svg';
import styled from 'styled-components';

const StyledLogo = styled(Logo)`
	height:110%;
	width:auto ;
	margin-right: auto;
	margin-left: 2rem;
	z-index:2000;
`;
const NavHeader = styled.div`
	width: 100%;
	display: flex;

	align-items: center;
	flex-direction: column;
`;
const NavBar = styled(motion.div)`
	top: 0;
	height:7vh;
	width: 100%;
	background-color: rgba(29, 53, 87, 1);
	box-shadow: ${(props) => (props.isClicked ? '' : ' 0 3px 3px rgba(0, 0, 0, 0.25)')};
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
	z-index: 2000;
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
const TopBar = styled.div`
	height: 7vh;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const NavMenu = styled(motion.div)`
	height: 100vh;
	width: 100vw;
	background-color: #1d3557;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const NavLink = styled(motion.h4)`
	font-size: 4rem;
	color:white;
	margin-bottom: 7vh;
	cursor: pointer;
`;
const Navbar = ({
	navInteract,
	setNavInteract,
	navstatus,
	setNavStatus,
	handleBackToTop,
	handleViewSkill,
	handleViewWork,
	handleViewContact
}) => {
	const [ isClicked, setIsClicked ] = useState(false);
	const controlNav = useAnimation();
	const tabletMatch = useMediaQuery('only screen and (max-width:700px)');
	const hoverAnimation = {
		color: '#a8dadc',
		scale: 1.05
	};
	const controlFocusHero = () => {
		handleBackToTop();
		setIsClicked(false);
		setNavInteract(false);
	};
	const controlFocusSkills = () => {
		handleViewSkill();
		setIsClicked(false);
		setNavInteract(false);
	};
	const controlFocusProjects = () => {
		handleViewWork();
		setIsClicked(false);
		setNavInteract(false);
	};
	const controlFocusContact = () => {
		handleViewContact();
		setIsClicked(false);
		setNavInteract(false);
	};
	useEffect(
		() => {
			if (navstatus === 'visible') {
				controlNav.start({
					y: 0,
					opacity: 1,
					transition: { type: 'tween' }
				});
			} else if (navstatus === 'disappear' && !navInteract) {
				controlNav.start({
					y: '-7vh',
					opacity: 0,
					transition: { type: 'tween' }
				});
			}
		},
		[ navstatus, navInteract ]
	);
	return (
		<NavBar isClicked={isClicked} animate={controlNav}>
			<NavHeader>
				<TopBar>
					<StyledLogo />
					{tabletMatch ? (
						<HamburgerContainer
							onClick={() => {
								setIsClicked(!isClicked);
							}}
							onTouchStart={() => {
								if (!isClicked) {
									setNavInteract(true);
								} else {
									setNavInteract(false);
									console.log('disappear');
								}
								setIsClicked(!isClicked);
							}}
						>
							<Hamburger isClicked={isClicked} />
						</HamburgerContainer>
					) : (
						<React.Fragment>
							<NavBarText
								onClick={controlFocusHero}
								onTouchStart={controlFocusHero}
								whileHover={hoverAnimation}
							>
								About
							</NavBarText>
							<NavBarText
								onClick={controlFocusSkills}
								onTouchStart={controlFocusSkills}
								whileHover={hoverAnimation}
							>
								Skills
							</NavBarText>
							<NavBarText
								onClick={controlFocusProjects}
								onTouchStart={controlFocusProjects}
								whileHover={hoverAnimation}
							>
								Projects
							</NavBarText>
							<NavBarText
								onClick={controlFocusContact}
								onTouchStart={controlFocusContact}
								whileHover={hoverAnimation}
							>
								Contact
							</NavBarText>

							<NavBarButton
								whileHover={{
									backgroundColor: 'rgba(168, 218, 220, 0.05)',
									scale: 1.05
								}}
								onClick={() => {
									navigate('/allProjects');
								}}
								onTouchEnd={() => {
									navigate('/allProjects');
								}}
							>
								All Projects
							</NavBarButton>
						</React.Fragment>
					)}
				</TopBar>
				<AnimatePresence>
					{isClicked && (
						<NavMenu
							animate={{ y: 0 }}
							initial={{ y: '-100vh' }}
							transition={{ duration: 1 }}
							exit={{ y: '-100vh' }}
						>
							<NavLink onClick={controlFocusHero} onTouchStart={controlFocusHero}>
								About
							</NavLink>
							<NavLink onClick={controlFocusSkills} onTouchStart={controlFocusSkills}>
								Skills
							</NavLink>
							<NavLink onClick={controlFocusProjects} onTouchStart={controlFocusProjects}>
								Projects
							</NavLink>
							<NavLink onClick={controlFocusContact} onTouchStart={controlFocusContact}>
								Contact
							</NavLink>

							<NavBarButton
								onClick={() => {
									navigate('/allProjects');
								}}
								onTouchEnd={() => {
									navigate('/allProjects');
								}}
								style={{ marginRight: 0 }}
							>
								All Projects
							</NavBarButton>
						</NavMenu>
					)}
				</AnimatePresence>
			</NavHeader>
		</NavBar>
	);
};

export default Navbar;
