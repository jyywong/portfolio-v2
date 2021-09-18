import React from 'react';
import { motion } from 'framer-motion';
import ReactLoading from 'react-loading';
import styled, { keyframes } from 'styled-components';
import Logo from '../assets/logo.svg';

const Background = styled(motion.div)`
	position: fixed;
	width: 100vw;
	height: 100vh;
	background-color: #13233a;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 20000;
	scroll-snap-align: start;
`;

const HexAnimation = keyframes`
    from {
        stroke-dashoffset: 1;

    }
    to{
        stroke-dashoffset: 0;
    }
`;

const NameAnimation = keyframes`
    50% {
        opacity: 0
    }
    100%{
        opacity:1
    }
`;

const StyledLogo = styled(Logo)`
	height:110%;
	width:auto ;
	z-index:2000;
    .hex{
        stroke-dasharray: 1;
        stroke-dashoffset: 1;
        animation: ${HexAnimation} 2.5s linear;
        will-change: stroke-dashoffset;
    }
    .name{
        opacity: 0;
        animation: ${NameAnimation} 5s linear
      
    }
`;
const Loader = () => {
	return (
		<Background exit={{ opacity: 0 }}>
			{/* <StyledLogo /> */}
			<ReactLoading type="spin" />
		</Background>
	);
};

export default Loader;
