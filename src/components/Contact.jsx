import React, { useState, forwardRef } from 'react';
import Layout from './Layout';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { generateMedia } from 'styled-media-query';
import { HiChevronDoubleUp } from 'react-icons/hi';
import Triangle from '../assets/triangle.svg';
import { createContact } from '../services/services';

const customMedia = generateMedia({
	sTablet: '580px',
	xsTablet: '500px',
	phone: '425px',
	sPhone: '350px'
});

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
	${customMedia.lessThan('sTablet')`
		width:90%;
	`};
`;

const SectionHeader = styled.h1`
	font-size: 6rem;
	font-weight: 300;
	color: #1d3557;
	text-transform: uppercase;
	text-decoration: underline;
	text-decoration-thickness: 8%;
	${customMedia.lessThan('xsTablet')`
		font-size:5rem;
	`};
	${customMedia.lessThan('sPhone')`
		font-size:4rem;
	`};
`;
const SectionPrompt = styled.p`
	margin-top: 2rem;
	font-size: 2.5rem;
	color: #457b9d;
	${customMedia.lessThan('xsTablet')`
		font-size:1.8rem;
	`};
`;

const LineInput = styled(motion.input)`
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
	&:focus{
		outline:none;
	}
	${customMedia.lessThan('phone')`
		font-size:1.5rem;
	`};
`;
const MultiLineInput = styled(motion.textarea)`
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
	&:focus{
		outline:none;
	}
	${customMedia.lessThan('phone')`
		font-size:1.5rem;
	`};
`;

const SubmitButton = styled(motion.button)`
	margin-top: 2rem;
	padding: 1rem;
	border-radius: 5px;
	font-size: 2.5rem;
	font-weight: 500;
	border: 3px solid #1d3557;
	color: #1d3557;
	text-transform: uppercase;
	background-color: transparent;
	cursor: pointer;
	${customMedia.lessThan('sPhone')`
		font-size:2rem;
		padding:.75rem;
	`};
`;

const ReturnTop = styled(motion.button)`
	position: absolute;
	background-color: #e63946;
	padding: 1rem;
	border: none;
	font-size: 3rem;
	color: white;
	bottom: 2vh;
	cursor: pointer;
	${customMedia.lessThan('sPhone')`
		font-size:2.5rem;
		padding:.75rem;
	`};
`;
const Contact = forwardRef(({ handleBackToTop }, ref) => {
	const [ formValues, setFormValues ] = useState({ name: '', email: '', message: '' });

	const handleSubmit = () => {
		const { name, email, message } = formValues;
		createContact(name, email, message).catch((error) => console.log(error.response));
		setFormValues({ name: '', email: '', message: '' });
	};
	return (
		<Layout>
			<Background ref={ref}>
				<StyledTriangle />
				<FormContainer>
					<SectionHeader>Contact</SectionHeader>
					<SectionPrompt> Have a question or want to work together?</SectionPrompt>
					<LineInput
						whileFocus={{
							scale: 1.03,
							boxShadow: ' 0 0 0 4px rgb(69, 123, 157, 0.4)'
						}}
						placeholder="Name"
						value={formValues.name}
						onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
					/>
					<LineInput
						whileFocus={{
							scale: 1.03,
							boxShadow: ' 0 0 0 4px rgb(69, 123, 157, 0.4)'
						}}
						placeholder="Email"
						value={formValues.email}
						onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
					/>
					<MultiLineInput
						whileFocus={{
							scale: 1.03,
							boxShadow: ' 0 0 0 4px rgb(69, 123, 157, 0.4)'
						}}
						placeholder="Your message"
						rows="5"
						value={formValues.message}
						onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
					/>
					<SubmitButton
						whileHover={{ backgroundColor: '#1d3557', borderColor: '#1d3557', color: 'white' }}
						onClick={handleSubmit}
					>
						Submit
					</SubmitButton>
				</FormContainer>
				<ReturnTop
					whileHover={{
						scale: 1.05,
						y: -5
					}}
					onClick={handleBackToTop}
					onTouchEnd={handleBackToTop}
				>
					<HiChevronDoubleUp />
				</ReturnTop>
			</Background>
		</Layout>
	);
});

export default Contact;
