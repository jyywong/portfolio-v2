import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateMedia } from 'styled-media-query';
import Layout from '../components/Layout';
import styled from 'styled-components';
import ProjectBlock from '../components/blocks/ProjectBlock';
import SimpleNavbar from '../components/SimpleNavbar';
import { projectList } from '../components/projectList';
const customMedia = generateMedia({
	lLaptop: '1440px',
	mLaptop: '870px',
	sTablet: '520px',
	lPhone: '430px'
});

const Background = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	background-color: #1d3557;
	padding-bottom: 1rem;
	overflow: auto;

	display: flex;
	align-items: center;

	flex-direction: column;
`;

const PageHeader = styled.div`
	margin-top: 6rem;
	font-size: 6rem;
	color: white;
	padding: 1rem;
	text-align: center;
	${customMedia.lessThan('lPhone')`
		margin-top: 4rem;
	`};
`;

const LineInput = styled(motion.input)`
	margin-top: 2rem;
	text-align: center;
	padding: 1rem;
	background-color: #a8dadc;
	border-radius: 5px;
	font-size: 2rem;
	outline-color: #1d3557;
	border: none;

	&::placeholder {
		color: rgb(29, 53, 87, 0.5);
	}
	&:focus{
		outline:none;
	}
`;

const ProjectsContainer = styled(motion.div)`
	/* background-color: #fff; */
	margin-top: 4rem;
	width: 50vw;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-gap: 2rem;
	justify-items: center;
	${customMedia.lessThan('lLaptop')`
		width:60vw
	`};
	${customMedia.lessThan('mLaptop')`
		width:70vw
	`};
	${customMedia.lessThan('sTablet')`
		width:90vw
	`};
`;

const AllProjects = () => {
	const [ searchTerm, setSearchTerm ] = useState('');
	const filterProjects = (projects) => {
		return projects.filter(
			({ name, description, tags }) =>
				name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				description.toLowerCase().includes(searchTerm.toLowerCase()) ||
				tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
		);
	};
	return (
		<Layout>
			<Background>
				<SimpleNavbar />
				<PageHeader>All Projects</PageHeader>
				<LineInput
					whileFocus={{
						scale: 1.03,
						boxShadow: ' 0 0 0 4px rgb(69, 123, 157, 0.4)'
					}}
					placeholder="Search projects"
					input={searchTerm}
					onChange={(e) => {
						setSearchTerm(e.target.value);
					}}
				/>
				<ProjectsContainer layout>
					<AnimatePresence>
						{filterProjects(projectList).map(({ name, description, tags }, index) => (
							<ProjectBlock key={index} name={name} description={description} tags={tags} />
						))}
					</AnimatePresence>
				</ProjectsContainer>
			</Background>
		</Layout>
	);
};

export default AllProjects;
