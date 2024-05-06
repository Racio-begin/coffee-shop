import { Link } from "react-router-dom";
// import logo from '../../images/logo/coffee-beans.svg';
import logo from '../../images/logo/Coffee-house-logo.svg';
import './Logo.css';

function Logo() {
	return (
		<Link to="/coffee-shop" className="logo button">
			<img
				src={logo}
				alt="Логотип сайта Coffee Shop"
			/>
		</Link>
	);
};

export default Logo;