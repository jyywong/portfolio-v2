import React from 'react';
import { motion } from 'framer-motion';
const Trail = () => {
	return (
		<motion.svg xmlnsXlink="http://www.w3.org/1999/xlink" width="297mm" height="210mm" viewBox="0 0 297 210">
			<defs>
				<path
					id="path1"
					style="font-variation-settings:normal"
					strokeWidth="3"
					d="M295.328 27.261c-101.977 9.592-90.87 23.727-84.812 45.435 6.058 21.708 58.56 32.31 51.493 55.532-7.068 23.222-24.232 33.824-44.426 29.28-20.193-4.543-46.95-49.978-67.647-38.872-20.699 11.106 22.717 45.94-16.66 67.648-39.377 21.707-64.114-5.049-64.114-5.049"
				/>
				<mask id="mask1">
					<use class="mask" xlinkHref="#path1" />
				</mask>
			</defs>
			<g fill="none">
				<path
					class="spot"
					style="font-variation-settings:normal"
					d="M70.93 145.392L33.57 188.808M74.968 185.274l-43.416-37.358"
					stroke-width="5"
				/>
				<use class="paths" xlinkHref="#path1" mask="url(#mask1)" />
			</g>
			<use class="paths" xlinkHref="#path1" mask="url(#mask1)" />
		</motion.svg>
	);
};

const ClientSideTrail = React.lazy(() => {
	import('./Trail.jsx');
});

export default ClientSideTrail;
