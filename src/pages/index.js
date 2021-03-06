import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { gsap } from 'gsap';
import { AnimatePresence } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import Hero from '../components/Hero';
import '@fontsource/roboto';
import Loader from '../components/Loader';
import MainLayout from '../components/MainLayout';
import Skills from '../components/Skills';
import Project1 from '../components/Project1';
import Project2 from '../components/Project2';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import ProjectDetails from '../components/ProjectDetails';
import Project3 from '../components/Project3';
import Project4 from '../components/Project4';

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
	scroller: '.scrollContainer'
});

const ScrollContainer = styled.div`
	position: relative;
	/* scroll-snap-type: y proximity; */
	height: 100vh;
	width: 100vw;
	overflow-y: scroll;
	overflow-x: hidden;
	z-index: 1001;
	&::-webkit-scrollbar {
		width: 1rem;
	}
	&::-webkit-scrollbar-track {
		background: #1d3557;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: .5rem;
		background: rgba(191, 191, 191, 0.5);

		border: 2px solid #1d3557;
	}
`;

const IndexPage = () => {
	const previousScroll = useRef(0);
	const [ displayLoader, setDisplayLoader ] = useState(true);
	const [ navInteract, setNavInteract ] = useState(false);
	const [ navStatus, setNavStatus ] = useState('visible');
	const heroRef = useRef();
	const skillsRef = useRef();
	const project1Ref = useRef();
	const project2Ref = useRef();
	const project3Ref = useRef();
	const project4Ref = useRef();
	const contactRef = useRef();
	const [ skillsAnimate, setSkillsAnimate ] = useState(false);
	const [ project1Animate, setProject1Animate ] = useState(false);
	const [ project2Animate, setProject2Animate ] = useState(false);
	const [ project3Animate, setProject3Animate ] = useState(false);
	const [ project4Animate, setProject4Animate ] = useState(false);

	const handleBackToTop = () => {
		heroRef.current.scrollIntoView({ behavior: 'smooth' });
	};
	const handleViewSkill = () => {
		skillsRef.current.scrollIntoView({ behavior: 'smooth' });
	};
	const handleViewWork = () => {
		project1Ref.current.scrollIntoView({ behavior: 'smooth' });
	};
	const handleViewContact = () => {
		contactRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	const handleScroll = (event) => {
		const currentScroll = event.target.scrollTop;
		if (currentScroll === 0) {
			setNavStatus('disappear');
		} else {
			if (currentScroll > previousScroll.current) {
				if (!navInteract) {
					setTimeout(() => {
						setNavStatus('disappear');
					}, 3000);
				}
			} else if (currentScroll < previousScroll.current) {
				setNavStatus('visible');
			}
		}

		previousScroll.current = currentScroll;
	};

	useEffect(() => {
		setTimeout(() => {
			setDisplayLoader(false);
		}, 1000);

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
		ScrollTrigger.create({
			trigger: '.Project4',
			start: 'top center',
			id: 'project4',
			onEnter: () => {
				setProject4Animate(true);
			}
		});
	}, []);

	useEffect(
		() => {
			if (navInteract) {
				setNavStatus('visible');
			}
		},
		[ navInteract ]
	);

	return (
		<React.Fragment>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Jonathan Wong</title>
			</Helmet>
			<MainLayout>
				<AnimatePresence>{displayLoader && <Loader />}</AnimatePresence>

				<ScrollContainer className="scrollContainer">
					<Navbar
						navInteract={navInteract}
						setNavInteract={setNavInteract}
						navstatus={navStatus}
						setNavStatus={setNavStatus}
						handleBackToTop={handleBackToTop}
						handleViewSkill={handleViewSkill}
						handleViewWork={handleViewWork}
						handleViewContact={handleViewContact}
					/>
					<Hero ref={heroRef} handleViewWork={handleViewWork} />
					<Skills ref={skillsRef} skillsAnimate={skillsAnimate} />

					<Project1 ref={project1Ref} project1Animate={project1Animate} />
					<Project2 ref={project2Ref} project2Animate={project2Animate} />
					<Project3 ref={project3Ref} project3Animate={project3Animate} />
					<Project4 ref={project4Ref} project4Animate={project4Animate} />
					<Contact ref={contactRef} handleBackToTop={handleBackToTop} />
					{/* <ProjectDetails /> */}
				</ScrollContainer>
			</MainLayout>
		</React.Fragment>
	);
};

export default IndexPage;
