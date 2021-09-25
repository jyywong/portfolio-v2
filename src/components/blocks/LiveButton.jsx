import React from 'react';
import styled from 'styled-components';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { generateMedia } from 'styled-media-query';
const customMedia = generateMedia({
	mLaptop: '1210px',
	sLaptop: '1024px',
	sTablet: '550px',
	lPhone: '430px',
	mPhone: '375px'
});
const LiveSiteButton = styled(motion.a)`
	color: white;
	text-decoration: none;
	background-color: #e63946;
	border: none;
	padding: 1rem;
	font-size: 2.5rem;
	font-weight: 700;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 8rem;
	cursor: pointer;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	${customMedia.lessThan('mLaptop')`
		margin-right:0;
	`};
	${customMedia.lessThan('sLaptop')`
	width:47.5%;
	`};
	${customMedia.lessThan('sTablet')`
	width:100%;
	margin-bottom:2rem;
	`};
	${customMedia.lessThan('mPhone')`
		padding:.75rem;
		font-size:2rem;
		margin-bottom:1.5rem;
	`};
`;

const ButtonText = styled.h6`
	font-size: 2.2rem;
	font-weight: 500;
	margin-right: 1rem;
	${customMedia.lessThan('lPhone')`
		font-size:2rem;
	`};
	${customMedia.lessThan('mPhone')`
		font-size:1.5rem;
	`};
`;

const LiveButton = ({ href }) => {
	return (
		<LiveSiteButton
			whileHover={{
				scale: 1.05,
				y: -4
			}}
			href={href}
			target="_blank"
		>
			<ButtonText>LIVE SITE</ButtonText> <FiExternalLink />
		</LiveSiteButton>
	);
};

export default LiveButton;
