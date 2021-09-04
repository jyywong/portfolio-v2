import React from 'react';
import styled from 'styled-components';
import { MdFolderOpen } from 'react-icons/md';

const ProjectDiv = styled.div`
	background-color: #457b9d;
	/* height: 250px;
	width: 250px; */
	height: 250px;
	width: 100%;
	padding: 1.5rem;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	box-shadow: 0 0 12px rgba(0, 0, 0, 0.53);
`;
const ProjectHeader = styled.div`
	font-size: 3rem;
	color: #a8dadc;
`;
const ProjectTitle = styled.h5`
	font-size: 3rem;
	font-weight: 100;
	color: white;
`;
const ProjectDescription = styled.p`
	font-size: 1.5rem;
	color: rgba(255, 255, 255, 0.75);
`;

const ProjectTags = styled.p`
	margin-top: auto;
	font-size: 1rem;
	color: rgba(255, 255, 255, 0.33);
`;
const ProjectBlock = () => {
	return (
		<ProjectDiv>
			<ProjectHeader>
				<MdFolderOpen />
			</ProjectHeader>
			<ProjectTitle>Project Title</ProjectTitle>
			<ProjectDescription>Project description lorem ipsum</ProjectDescription>
			<ProjectTags>Tag</ProjectTags>
		</ProjectDiv>
	);
};

export default ProjectBlock;
