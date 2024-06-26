import './Footer.css';
import { Link } from 'react-router-dom';
import BeansImg from '../BeansImg/BeansImg';
import Logo from '../Logo/Logo';
import OurCoffeeLink from '../OurCoffeeLink/OurCoffeeLink';

function Footer() {
	return (
		<footer className="footer">
			<ul className="footer__container ul">

				<li className="footer__container-element">
					<div className="footer__logo">
						<Logo />
					</div>
				</li>

				<li className="footer__container-element">
					<div>
						<OurCoffeeLink />
					</div>
				</li>

				<li className="footer__container-element">
					<Link
						className="footer__link link"
						to={"/coffee-shop"}>
						For your pleasure
					</Link>
				</li>

			</ul>

			<BeansImg />

		</footer>
	);
};

export default Footer;