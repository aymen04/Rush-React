import '@sass/content/home/home.scss';

import React from 'react';

import logo from '../assets/images/logo.svg';


function Header() {
	return (
		
			<header className="home-header">
				<img src={logo} className="home-logo" alt="logo" />
				<nav className='navbar'>
					<a href="/" className='anav'>Home</a>
					<a href="/Liste" className='anav'>List</a>
				</nav>
			</header>
		
	);
}

export default Header;
