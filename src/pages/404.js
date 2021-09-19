import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

// styles
const Background = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #1d3557;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Code = styled.h1`
	font-size: 20rem;
	color: white;
	line-height: 0.8;
`;

const Description = styled.h4`
	text-align: center;
	font-size: 8rem;
	color: white;
`;

const Home = styled(Link)`
  margin-top:1rem;
  border-radius: 10px;
  padding: 1rem 3rem;
  background-color: #A8DADC;
  color:#1d3557 ;
  font-size: 3rem;
  cursor: pointer;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.53);
  
`;
// markup
const NotFoundPage = () => {
	return (
		<Layout>
			<Helmet>
				<meta charSet="utf-8" />
				<title>404 - Page not found</title>
			</Helmet>
			<Background>
				<Code>404</Code>
				<Description>Page not found</Description>
				<Home>Home</Home>
			</Background>
		</Layout>
	);
};

export default NotFoundPage;
