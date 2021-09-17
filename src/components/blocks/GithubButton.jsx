import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import media, { generateMedia } from 'styled-media-query';
import styled from 'styled-components';

const customMedia = generateMedia({
	mLaptop: '1210px',
	sLaptop: '1024px',
	sTablet: '550px',
	lPhone: '430px',
	mPhone: '375px'
});
const GitButton = styled(motion.a)`
	color: white;
	text-decoration: none;
	background-color: #457b9d;
	border: none;
	padding: 1rem;
	font-size: 2.5rem;
	font-weight: 700;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	${customMedia.lessThan('sLaptop')`
	width:47.5%;
	`};
	${customMedia.lessThan('sTablet')`
	width:100%;
	`};
	${customMedia.lessThan('mPhone')`
		padding:.75rem;
		font-size:2rem;
	`};
`;

const ButtonText = styled.h6`
	font-size: 2.5rem;
	font-weight: 700;
	margin-right: 1rem;
	${customMedia.lessThan('lPhone')`
		font-size:2rem;
	`};
	${customMedia.lessThan('mPhone')`
		font-size:1.5rem;
	`};
`;

const GithubButton = ({ href }) => {
	return (
		<GitButton
			whileHover={{
				scale: 1.05,
				y: -4
			}}
			href={href}
			target="_blank"
		>
			<ButtonText>GITHUB</ButtonText>
			<FaGithub />
		</GitButton>
	);
};

export default GithubButton;
