import './OurCoffeeLink.css';
import { Link } from 'react-router-dom';

function OurCoffeeLink({ isHeader }) {

	return (
		<Link
			className={`our-coffee__link link ${isHeader ? "our-coffee__header" : ""}`}
			to="/our-coffee">
			Our сoffee
		</Link>
	);
};

export default OurCoffeeLink;