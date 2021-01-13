import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.styles.scss';

const NavBar = () => (
	<nav>
		<Link to='/'>
			Home
		</Link>
		<Link to='/about'>
			About
		</Link>
	</nav>
);

export default NavBar;