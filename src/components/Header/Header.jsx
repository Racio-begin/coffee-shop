import { Link, Route, Routes } from 'react-router-dom';

import Logo from '../Logo/Logo';
import OurCoffeeLink from '../OurCoffeeLink/OurCoffeeLink';

import './Header.css';

function Header() {
	return (
		<div className="header">
			{/* <div className="header__logo-wrapper">
			</div> */}
			<Logo />
			<div className="header__link">
				<OurCoffeeLink />
			</div>
			{/* <Link
				className="header__link link"
				to="/our-coffee">
				Our Coffee
			</Link> */}

		</div>
	);
};

export default Header;