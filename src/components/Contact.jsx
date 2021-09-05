import React from 'react';
import Layout from './Layout';
import styled from 'styled-components';
import { HiChevronDoubleUp } from 'react-icons/hi';
import Triangle from '../assets/triangle.svg';

const Background = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	background-color: #a8dadc;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	scroll-snap-align: start;
`;

const StyledTriangle = styled(Triangle)`
    position: absolute;
    top: 0;
    height: 10vh;
    width: 100vw;
`;
const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
`;

const SectionHeader = styled.h1`
	font-size: 6rem;
	font-weight: 300;
	color: #1d3557;
	text-transform: uppercase;
	text-decoration: underline;
	text-decoration-thickness: 8%;
`;
const SectionPrompt = styled.p`
	margin-top: 2rem;
	font-size: 2.5rem;
	color: #457b9d;
`;

const LineInput = styled.input`
	margin-top: 2rem;
	text-align: center;
	padding: 1rem;
	background-color: #f1faee;
	border: none;
	border-radius: 5px;
	font-size: 2rem;
	outline-color: #1d3557;

	&::placeholder {
		color: rgb(29, 53, 87, 0.5);
	}
`;
const MultiLineInput = styled.textarea`
	font-family: inherit;
	margin-top: 2rem;
	text-align: center;
	padding: 1rem;
	background-color: #f1faee;
	border: none;
	border-radius: 5px;
	font-size: 2rem;
	outline-color: #1d3557;

	&::placeholder {
		color: rgb(29, 53, 87, 0.5);
	}
`;

const SubmitButton = styled.button`
	margin-top: 2rem;
	padding: 1rem;
	border-radius: 5px;
	font-size: 2.5rem;
	font-weight: 500;
	border: 3px solid #1d3557;
	color: #1d3557;
	text-transform: uppercase;
	background-color: transparent;
`;

const ReturnTop = styled.button`
	position: absolute;
	margin-top: 10 rem;
	background-color: #e63946;
	padding: 1rem;
	border: none;
	font-size: 3rem;
	color: white;
	bottom: 5vh;
	cursor: pointer;
`;
const Contact = () => {
	return (
		<Layout>
			<Background>
				<StyledTriangle />
				<FormContainer>
					<SectionHeader>Contact</SectionHeader>
					<SectionPrompt> Have a question or want to work together?</SectionPrompt>
					<LineInput placeholder="Name" />
					<LineInput placeholder="Email" />
					<MultiLineInput placeholder="Your message" rows="5" />
					<SubmitButton> Submit</SubmitButton>
				</FormContainer>
				<ReturnTop>
					<HiChevronDoubleUp />
				</ReturnTop>
			</Background>
		</Layout>
	);
};

export default Contact;
