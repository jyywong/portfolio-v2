import React from 'react';
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

const GitButton = styled.button`
	color: white;
	background-color: #457b9d;
	border: none;
	padding: 1rem;
	font-size: 2.5rem;
	font-weight: 700;
	display: flex;
	align-items: center;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ButtonText = styled.h6`
	font-size: 2.5rem;
	font-weight: 700;
	margin-right: 1rem;
`;
const GithubButton = () => {
	return (
		<GitButton>
			<ButtonText>GITHUB</ButtonText>
			<FaGithub />
		</GitButton>
	);
};

export default GithubButton;
