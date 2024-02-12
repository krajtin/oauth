import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

// scss file imports
import '../styles/app.scss';


// context/reducer import
import ThemeState from '../context/theme/ThemeState';

export default function MyApp(props) {
	const { Component, pageProps } = props;

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (

		<React.Fragment>
			<Head>
				<title>Workerix</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<ThemeState>
				<main>
					<Component {...pageProps} />
				</main>
			</ThemeState>
		</React.Fragment>

	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};
