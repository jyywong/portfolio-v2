import React from 'react';
import { motion } from 'framer-motion';
import { generateMedia } from 'styled-media-query';
import styled from 'styled-components';
import { MdFolderOpen } from 'react-icons/md';

const customMedia = generateMedia({
	lLaptop: '1440px',
	mLaptop: '870px',
	sTablet: '520px',
	lPhone: '430px'
});

const ProjectDiv = styled(motion.a)`
	background-color: #457b9d;
	cursor: pointer;
	height: 250px;
	width: 100%;
	padding: 1.5rem;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	box-shadow: 0 0 12px rgba(0, 0, 0, 0.53);
	text-decoration: none;
`;
const ProjectHeader = styled(motion.div)`
	font-size: 3rem;
	color: #a8dadc;
`;
const ProjectTitle = styled(motion.h5)`
	font-size: 3rem;
	font-weight: 100;
	color: white;
`;
const ProjectDescription = styled(motion.p)`
	font-size: 1.5rem;
	color: rgba(255, 255, 255, 0.75);
`;

const ProjectTags = styled.p`
	margin-right: 1rem;
	font-size: 1rem;
	color: rgba(255, 255, 255, 0.33);
`;
const TagContainer = styled(motion.div)`
	margin-top: auto;
	display: flex;
`;
const ProjectBlock = ({ name, description, tags, href }) => {
	return (
		<ProjectDiv
			layout
			whileHover={{
				scale: 1.05,
				y: -2
			}}
			exit={{ scale: 0, opacity: 0 }}
			href={href}
			target="_blank"
		>
			<ProjectHeader layout>
				<MdFolderOpen />
			</ProjectHeader>
			<ProjectTitle layout>{name}</ProjectTitle>
			<ProjectDescription layout>{description}</ProjectDescription>
			<TagContainer layout>{tags.map((tag, index) => <ProjectTags key={index}>{tag}</ProjectTags>)}</TagContainer>
		</ProjectDiv>
	);
};

export default ProjectBlock;
