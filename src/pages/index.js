import * as React from 'react';
import Hero from '../components/Hero';
import '@fontsource/roboto';
import Skills from '../components/Skills';
import Project1 from '../components/Project1';
import Project2 from '../components/Project2';
import Contact from '../components/Contact';
import ProjectDetails from '../components/ProjectDetails';

// markup
const IndexPage = () => {
	return (
		<React.Fragment>
			<Hero />
			<Skills />
			<Project1 />
			<Project2 />
			<Project1 />
			<Contact />
			{/* <ProjectDetails /> */}
		</React.Fragment>
	);
};

export default IndexPage;
