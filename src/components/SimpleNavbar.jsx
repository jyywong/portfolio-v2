import React from 'react';
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
const NavBarButton = styled(motion.button)`
	font-size: 1.65rem;
	font-weight: 100;
	background-color: transparent;
	border: 2px solid #a8dadc;
	color:#a8dadc;
	padding: 1rem 1.5rem;
	margin-right: 2rem;
	cursor: pointer;

	@media only screen and (max-height: 800px){
		padding: .5rem 1rem;
	}
`;

const TopBar = styled.div`
	height: 7vh;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const SimpleNavbar = () => {
	return (
		<NavBar>
			<NavHeader>
				<TopBar>
					<StyledLogo />

					<NavBarButton
						whileHover={{
							backgroundColor: 'rgba(168, 218, 220, 0.05)',
							scale: 1.05
						}}
						onClick={() => {
							navigate('/');
						}}
						onTouchEnd={() => {
							navigate('/');
						}}
					>
						Home
					</NavBarButton>
				</TopBar>
			</NavHeader>
		</NavBar>
	);
};

export default SimpleNavbar;
