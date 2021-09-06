import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import Hero from '../components/Hero';
import '@fontsource/roboto';
import Skills from '../components/Skills';
import Project1 from '../components/Project1';
import Project2 from '../components/Project2';
import Contact from '../components/Contact';
import ProjectDetails from '../components/ProjectDetails';
import Project3 from '../components/Project3';

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
	markers: true,
	scroller: '.scrollContainer'
});

const ScrollContainer = styled.div`
	scroll-snap-type: y mandatory;
	height: 100vh;
	overflow-y: scroll;
	overflow-x: hidden;
`;

const IndexPage = () => {
	const [ skillsAnimate, setSkillsAnimate ] = useState(false);
	const [ project1Animate, setProject1Animate ] = useState(false);
	const [ project2Animate, setProject2Animate ] = useState(false);
	const [ project3Animate, setProject3Animate ] = useState(false);

	useEffect(() => {
		ScrollTrigger.create({
			trigger: '.Skills',
			start: 'top center',
			id: 'project1',
			onEnter: () => {
				setSkillsAnimate(true);
			}
		});
		ScrollTrigger.create({
			trigger: '.Project1',
			start: 'top center',
			id: 'project1',
			onEnter: () => {
				setProject1Animate(true);
			}
		});
		ScrollTrigger.create({
			trigger: '.Project2',
			start: 'top center',
			id: 'project2',
			onEnter: () => {
				setProject2Animate(true);
			}
		});
		ScrollTrigger.create({
			trigger: '.Project3',
			start: 'top center',
			id: 'project3',
			onEnter: () => {
				setProject3Animate(true);
			}
		});
	}, []);

	return (
		<React.Fragment>
			<ScrollContainer className="scrollContainer">
				{/* <Hero /> */}
				{/* <Skills skillsAnimate={skillsAnimate} /> */}
				{/* <Project1 project1Animate={project1Animate} /> */}
				{/* <Project2 project2Animate={project2Animate} /> */}
				<Project3 project3Animate={project3Animate} />
				{/* <Contact /> */}
				{/* <ProjectDetails /> */}
			</ScrollContainer>
		</React.Fragment>
	);
};

export default IndexPage;
