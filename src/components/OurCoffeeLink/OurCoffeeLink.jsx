import './OurCoffeeLink.css';
import { Link } from 'react-router-dom';

function OurCoffeeLink() {
	return (
		<Link
		className="our-coffee__link link"
		to="/our-coffee">
		Our сoffee
	</Link>
	);
};

export default OurCoffeeLink;