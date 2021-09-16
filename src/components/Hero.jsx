import React, { useState, useEffect, forwardRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import NET from 'vanta/dist/vanta.net.min';
import styled from 'styled-components';
import media, { generateMedia } from 'styled-media-query';
import Layout from './Layout';
const customMedia = generateMedia({
	small: '500px'
});
const Background = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #182c49;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	scroll-snap-align: start;
	margin-top: -7vh;

	${customMedia.lessThan('small')`
		padding:2rem;
	`};
`;

const HeroText = styled.h1`
	text-align: center;
	font-size: 6rem;
	color: white;
	font-weight: 300;

	${media.lessThan('medium')`
		font-size:4rem;
	`};
`;

const Button = styled(motion.button)`
	margin-top: 2rem;
	padding: 1rem;
	border: 2px solid white;
	background-color: transparent;
	color: white;
	font-size: 2rem;
	cursor: pointer;
`;

const NameSpan = styled.span`color: #e63946;`;

const Hero = forwardRef(({ handleViewWork }, ref) => {
	const [ vantaEffect, setVantaEffect ] = useState(0);
	useEffect(
		() => {
			if (!vantaEffect) {
				setVantaEffect(
					NET({
						el: ref.current,
						THREE,
						backgroundColor: 0x1d3557,
						color: 0x457b9d
					})
				);
			}
			return () => {
				if (vantaEffect) vantaEffect.destroy();
			};
		},
		[ vantaEffect ]
	);
	return (
		<Layout>
			<Background ref={ref}>
				<HeroText>
					Hello, I'm <NameSpan>Jonathan Wong</NameSpan> <br /> a front-end developer
				</HeroText>
				<Button
					whileHover={{
						backgroundColor: '#457b9d',
						borderColor: '#457b9d'
					}}
					onClick={handleViewWork}
					onTouchEnd={handleViewWork}
				>
					View my work
				</Button>
			</Background>
		</Layout>
	);
});

export default Hero;
