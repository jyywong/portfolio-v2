import React from 'react';
import { motion } from 'framer-motion';
import { generateMedia } from 'styled-media-query';
import styled from 'styled-components';
import { FaRegCheckCircle } from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';
import { VscError } from 'react-icons/vsc';

const customMedia = generateMedia({
	sLaptop: '1024px',
	xsLaptop: '850px',
	tablet: '700px',
	sTablet: '580px',
	lPhone: '430px',
	mPhone: '375px',
	sPhone: '340px'
});

const ModalContainer = styled(motion.div)`
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	height: 100%;
	width: 100%;
	overflow: hidden;
	z-index: 10000;
	background-color: rgba(0, 0, 0, 0.5);

	display: flex;
	align-items: center;
	justify-content: center;
`;

const ModalContent = styled(motion.div)`
	background-color: #1d3557;
	padding: 1rem;
	width: 75%;
	height: 75%;
	box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	${customMedia.lessThan('lPhone')`
       width: 90%;
       height: 80%;
	`};
`;

const ModalHeader = styled.h2`
	text-align: center;
	margin-top: 2rem;
	margin-bottom: 4rem;
	font-size: 6rem;
	color: white;
	${customMedia.lessThan('xsLaptop')`
        font-size: 5rem;
	`};
	${customMedia.lessThan('sTablet')`
        font-size: 4rem;
	`};
`;

const CaptchaModal = ({ handleCaptcha }) => {
	return (
		<ModalContainer animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>
			<ModalContent animate={{ y: 0 }} initial={{ y: 1000 }} exit={{ y: 1000 }}>
				<ModalHeader>Please verify that you're not a bot!</ModalHeader>
				<ReCAPTCHA onChange={handleCaptcha} sitekey="6LfR2XocAAAAAFMSPRZk1DxnZtev0W-RAISLj9yK" />
			</ModalContent>
		</ModalContainer>
	);
};

export default CaptchaModal;
