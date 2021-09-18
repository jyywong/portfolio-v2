import React from 'react';
import { motion } from 'framer-motion';
import { generateMedia } from 'styled-media-query';
import styled from 'styled-components';
import { FaRegQuestionCircle } from 'react-icons/fa';

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
	font-size: 6rem;
	color: white;
	${customMedia.lessThan('xsLaptop')`
        font-size: 5rem;
	`};
	${customMedia.lessThan('sTablet')`
        font-size: 4rem;
	`};
`;

const StyledQuestion = styled(FaRegQuestionCircle)`
    font-size: 20rem;
    color: #a8dadc;
    ${customMedia.lessThan('xsLaptop')`
        font-size: 16rem;
	`};
`;
const ParagraphContainer = styled.div`
	width: 60%;
	${customMedia.lessThan('sLaptop')`
        width: 80%
	`};
`;
const ModalParagraph = styled.p`
	text-align: center;
	font-size: 2rem;
	color: #a8dadc;
	${customMedia.lessThan('xsLaptop')`
        font-size: 1.8rem;
	`};
	${customMedia.lessThan('sTablet')`
        font-size: 1.5rem;
	`};
`;

const ButtonContainer = styled(motion.div)`
margin-top: 2rem;
	display: flex;
    justify-content: center;
`;

const Button = styled(motion.a)`
	margin: 1rem;
	margin-top: 2rem;
	padding: 1rem;
	border-radius: 5px;
	border:none;
	background-color:#a8dadc ;
	color: #1d3557;
	font-size: 2rem;
	cursor: pointer;
    text-decoration: none;
`;

const AltButton = styled(motion.button)`
	margin: 1rem;
	margin-top: 2rem;
	padding: 1rem;
	border-radius: 5px;
	border:1px solid #a8dadc;
	background-color:transparent ;
	color: #a8dadc;
	font-size: 2rem;
	cursor: pointer;
`;

const Modal = ({ setShowModal }) => {
	return (
		<ModalContainer animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>
			<ModalContent animate={{ y: 0 }} initial={{ y: -1000 }} exit={{ y: -1000 }}>
				<StyledQuestion />
				<ModalHeader>What is this "Alt Experience"?</ModalHeader>
				<ParagraphContainer>
					<ModalParagraph>
						This is an alternate portfolio experience that I made using Three.JS and Blender. Being a 3D
						website, this may not be an optimal experience on old computers or phones.{' '}
					</ModalParagraph>
					<ButtonContainer>
						<Button
							whileHover={{
								scale: 1.05
							}}
							href={'https://dazzling-sinoussi-307ab8.netlify.app/'}
							target="_blank"
						>
							Proceed
						</Button>
						<AltButton
							whileHover={{
								scale: 1.05
							}}
							onClick={() => {
								setShowModal(false);
							}}
						>
							Cancel
						</AltButton>
					</ButtonContainer>
				</ParagraphContainer>
			</ModalContent>
		</ModalContainer>
	);
};

export default Modal;
