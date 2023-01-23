import React from 'react';

import '../sass/Header.scss';

import headerImg from '../images/header_logo.png';

const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header__img'>
					<img
						className='header__img--logo'
						src={headerImg}
						alt='logo'
					/>
				</div>
				<h1 className='header__title'>A gallery of Polish fauna and flora</h1>
			</div>
		</header>
	);
};

export default Header;
