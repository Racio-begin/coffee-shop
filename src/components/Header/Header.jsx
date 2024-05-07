import { Link, Route, Routes } from 'react-router-dom';

import Logo from '../Logo/Logo';
import OurCoffeeLink from '../OurCoffeeLink/OurCoffeeLink';

import './Header.css';

function Header() {
	return (
		<nav className="header">
			<Logo />

			<div className="header__link">
				<OurCoffeeLink
				isHeader={true}
				/>
			</div>
		</nav>
	);
};

export default Header;