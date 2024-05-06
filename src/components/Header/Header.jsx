import { Link, Route, Routes } from 'react-router-dom';

import Logo from '../Logo/Logo';
import OurCoffeeLink from '../OurCoffeeLink/OurCoffeeLink';

import './Header.css';

function Header() {
	return (
		<div className="header">
			<Logo />

			<div className="header__link">
				<OurCoffeeLink />
			</div>
		</div>
	);
};

export default Header;