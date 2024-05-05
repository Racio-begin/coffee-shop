import { Link, Route, Routes } from 'react-router-dom';

import Logo from '../Logo/Logo';

import './Header.css';

function Header() {
	return (
		<div className="header">
			<div className="header__logo-wrapper">
			</div>
				<Logo />
			<Link className="header__link link" to="/our-coffee">Our Coffee</Link>
		</div>
	);
};

export default Header;