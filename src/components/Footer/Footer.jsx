import './Footer.css';
import { Link } from 'react-router-dom';
import BeansImg from '../BeansImg/BeansImg';
import Logo from '../Logo/Logo';
import OurCoffeeLink from '../OurCoffeeLink/OurCoffeeLink';

function Footer() {
	return (
		<div className="footer">
			<div className="footer__container">
				<div className="footer__logo">
					<Logo />
				</div>
				<div>
					<OurCoffeeLink />
				</div>
				<Link
					className="footer__link link"
					to={"/"}>
					For your pleasure
				</Link>
			</div>
			<BeansImg />

		</div>
	);
};

export default Footer;