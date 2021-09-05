import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import styled from 'styled-components';
import Layout from './Layout';

const Background = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #182c49;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	scroll-snap-align: start;
`;

const HeroText = styled.h1`
	text-align: center;
	font-size: 6rem;
	color: white;
	font-weight: 300;
`;

const Button = styled.button`
	margin-top: 2rem;
	padding: 1rem;
	border: 2px solid white;
	background-color: transparent;
	color: white;
	font-size: 2rem;
	cursor: pointer;
`;

const NameSpan = styled.span`color: #e63946;`;

const Hero = () => {
	const [ vantaEffect, setVantaEffect ] = useState(0);
	const myRef = useRef(null);
	useEffect(
		() => {
			if (!vantaEffect) {
				setVantaEffect(
					NET({
						el: myRef.current,
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
			<Background ref={myRef}>
				<HeroText>
					Hello, I'm <NameSpan>Jonathan Wong</NameSpan> <br /> a front-end developer
				</HeroText>
				<Button>View my work</Button>
			</Background>
		</Layout>
	);
};

export default Hero;
