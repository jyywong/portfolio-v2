import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { generateMedia } from 'styled-media-query';

const customMedia = generateMedia({
	sLaptop: '1024px'
});
const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
    margin:0;
   padding: 0;
   box-sizing: inherit;
}

body {
font-family: roboto;
box-sizing: border-box;
overflow-x: hidden;
}

#gatsby-focus-wrapper {
	overflow: hidden;

}

html {
    font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%
}
`;
export default function Layout({ children }) {
	return (
		<React.Fragment>
			<GlobalStyle />
			{children}
		</React.Fragment>
	);
}
