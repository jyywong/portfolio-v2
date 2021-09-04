import React from 'react';
import styled from 'styled-components';
import { FiExternalLink } from 'react-icons/fi';

const LiveSiteButton = styled.button`
	color: white;
	background-color: #e63946;
	border: none;
	padding: 1rem;
	font-size: 2.5rem;
	font-weight: 700;
	display: flex;
	align-items: center;
	margin-right: 8rem;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ButtonText = styled.h6`
	font-size: 2.5rem;
	font-weight: 700;
	margin-right: 1rem;
`;

const LiveButton = () => {
	return (
		<LiveSiteButton>
			<ButtonText>LIVE SITE</ButtonText> <FiExternalLink />
		</LiveSiteButton>
	);
};

export default LiveButton;
