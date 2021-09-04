import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import ProjectBlock from '../components/blocks/ProjectBlock';

const Background = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	background-color: #1d3557;

	display: flex;
	align-items: center;

	flex-direction: column;
`;

const PageHeader = styled.div`
	margin-top: 10rem;
	font-size: 6rem;
	color: white;
`;

const LineInput = styled.input`
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
`;

const ProjectsContainer = styled.div`
	/* background-color: #fff; */
	margin-top: 4rem;
	width: 50vw;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-gap: 2rem;
	justify-items: center;
`;

const allProjects = () => {
	return (
		<Layout>
			<Background>
				<PageHeader>All Projects</PageHeader>
				<LineInput placeholder="Search projects" />
				<ProjectsContainer>
					<ProjectBlock />
					<ProjectBlock />
					<ProjectBlock />
					<ProjectBlock />
					<ProjectBlock />
					<ProjectBlock />
				</ProjectsContainer>
			</Background>
		</Layout>
	);
};

export default allProjects;
