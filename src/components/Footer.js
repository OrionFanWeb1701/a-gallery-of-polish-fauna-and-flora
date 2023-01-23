import React from 'react';

import '../sass/Footer.scss';

const Footer = () => {
	// A function that generates the current year

	const getYear = () => {
		const date = new Date();
		return date.getFullYear();
	};
	return (
		<footer className='footer'>
			<p className='footer__info'>Łukasz Romanek &copy; {getYear()}</p>
		</footer>
	);
};

export default Footer;
