module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
		title: 'portfolio-v2'
	},
	plugins: [
		'gatsby-plugin-styled-components',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /assets/ // See below to configure properly
				}
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/'
			},
			__key: 'images'
		},
		{
			resolve: 'gatsby-plugin-html-attributes',
			options: {
				lang: 'en'
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Portfolio',
				short_name: 'Portfolio',
				start_url: '/',
				icon: 'src/assets/favicon.svg'
			}
		}
	]
};
